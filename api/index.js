import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { getConnInfo } from 'hono/cloudflare-workers';

import sgMail from '@sendgrid/mail';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';

const app = new Hono();

app.use('*', (c, next) => {
	const origin = c.env.CORS_ORIGIN;
	const middleware = cors({
		origin
	});
	return middleware(c, next);
});

app.post(
	'/contact',
	zValidator(
		'json',
		z.object({
			name: z.string().min(1),
			email: z.string().email(),
			phone: z.string().min(6).max(12),
			message: z.string().min(1),
			token: z.string()
		})
	),
	async (c) => {
		const data = c.req.valid('json');

        // Check Turnstile token
		const info = getConnInfo(c);
		const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
		const result = await fetch(url, {
			body: JSON.stringify({
				secret: c.env.TURNSTILE_KEY,
				response: data.token,
				remoteip: info.remote.address
			}),
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const outcome = await result.json();
		if (!outcome.success) {
			return c.json({ success: false });
		}

        // Send e-mail
		const msg = {
			subject: 'Brushtail Digital website enquiry',
			personalizations: [
				{
					to: [{ email: 'contact@brushtail.digital', name: 'Brushtail Digital' }]
				}
			],
			from: { email: 'contact@brushtail.digital', name: 'Brushtail Digital' },
			reply_to: { email: data.email, name: data.name },
			text: `From ${data.name}\nE-mail: ${data.email}\nPhone: ${data.phone}\n\n${data.message}`
		};

		sgMail.setApiKey(c.env.SENDGRID_API_KEY);
		const [res] = await sgMail.send(msg);
		if (res.statusCode >= 200 && res.statusCode < 300) {
			return c.json({ success: true });
		}
		console.error(res);
		return c.json({ success: false });
	}
);

export default app;

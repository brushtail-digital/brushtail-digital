<script>
	import { faCheck, faEnvelope, faIdBadge, faPhone } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { fly } from 'svelte/transition';
	import Turnstile from './Turnstile.svelte';
	import { API_URL_BASE, TURNSTILE_SITEKEY } from './settings';

	let state = 'ready';

	$: isLoading = state === 'loading';

	let data = {
		name: '',
		email: '',
		phone: '',
		message: '',
		token: null
	};

	async function submit() {
		state = 'loading';
		try {
			const response = await fetch(`${API_URL_BASE}/contact`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});
			const json = await response.json();
			if (json.success === true) {
				state = 'success';
			} else {
				state = 'error';
				console.error(json);
			}
		} catch (e) {
			console.error(e);
			state = 'error';
		}
	}
</script>

<div id="contact" class="contact">
	<div class="container is-max-desktop">
		<section class="section">
			<h2 class="title has-text-centered pb-4">Let's chat</h2>
			{#if state === 'success'}
				<div transition:fly={{ y: 200, duration: 200 }} class="notification is-success">
					<div class="is-flex is-align-items-center">
						<span class="icon"><Fa icon={faCheck} /></span>
						<span class="ml-2"
							>Thank you for your enquiry. We will get back to you as soon as possible.</span
						>
					</div>
				</div>
			{:else if state === 'error'}
				<div transition:fly={{ y: 200, duration: 200 }} class="notification is-danger">
					An unexpected error occurred. Please <a href="mailto:hello@brushtail.digital"
						>contact us</a
					>
					directly.
				</div>
			{:else}
				<form
					transition:fly={{ y: 200, duration: 200 }}
					method="POST"
					action="/contact"
					on:submit|preventDefault={submit}
				>
					<div class="field">
						<label class="label" for="input-name">Name</label>
						<div class="control has-icons-left">
							<input
								id="input-name"
								class="input"
								type="text"
								placeholder="Your Name"
								bind:value={data.name}
								required
								disabled={isLoading}
							/>
							<span class="icon is-small is-left"><Fa icon={faIdBadge} /></span>
						</div>
					</div>

					<div class="field">
						<label class="label" for="input-email">E-mail</label>
						<div class="control has-icons-left">
							<input
								id="input-email"
								class="input"
								type="email"
								placeholder="Your E-mail Address"
								bind:value={data.email}
								required
								disabled={isLoading}
							/>
							<span class="icon is-small is-left"><Fa icon={faEnvelope} /></span>
						</div>
					</div>

					<div class="field">
						<label class="label" for="input-phone">Phone Number</label>
						<div class="control has-icons-left">
							<input
								id="input-phone"
								class="input"
								type="tel"
								placeholder="Your Phone Number"
								pattern="\+?[0-9]+"
								minlength="6"
								maxlength="12"
								bind:value={data.phone}
								required
								disabled={isLoading}
							/>
							<span class="icon is-small is-left"><Fa icon={faPhone} /></span>
						</div>
					</div>

					<div class="field">
						<label class="label" for="input-message">Details of enquiry</label>
						<div class="control">
							<textarea
								id="input-message"
								class="textarea"
								bind:value={data.message}
								required
								disabled={isLoading}
							></textarea>
						</div>
					</div>

					<Turnstile sitekey={TURNSTILE_SITEKEY} bind:token={data.token} />

					<div class="py-4">
						<p>
							By submitting this form, you agree to our <a href="/privacy-policy">Privacy Policy</a>
							and consent to receive e-mails from Brushtail Digital.
							<br />
							You can unsubscribe at any time.
						</p>
					</div>

					<div class="field">
						<div class="control">
							<button class="button is-link" class:is-loading={isLoading} disabled={isLoading}>
								Submit
							</button>
						</div>
					</div>
				</form>
			{/if}
		</section>
	</div>
</div>

<script module>
	let loaded = false;
</script>

<script>
	/* global turnstile */
	import { onMount } from 'svelte';

	/**
	 * @typedef {Object} Props
	 * @property {string} sitekey
	 * @property {(token: string) => void} onGetToken
	 */

	/** @type {Props} */
	let { sitekey, onGetToken } = $props();

	/**
	 * @type {HTMLDivElement | undefined}
	 */
	let element = $state();

	let didLoadScript = $state(false);

	onMount(() => {
		if (!loaded) {
			const script = document.createElement('script');
			script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
			script.async = true;
			script.addEventListener(
				'load',
				() => {
					loaded = true;
					didLoadScript = true;
				},
				{
					once: true
				}
			);
			document.body.appendChild(script);
		}
	});

	$effect(() => {
		if (!element || (!loaded && !didLoadScript)) {
			return;
		}
		turnstile.render(element, {
			sitekey,
			callback: onGetToken
		});
	});
</script>

<div bind:this={element}></div>

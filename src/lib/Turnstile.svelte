<script module>
	let loaded = false;
</script>

<script>
	import { onMount } from 'svelte';

	/** @type {string} */
	export let sitekey;

	/** @type {string | null} */
	export let token = null;

	/**
	 * @type {HTMLDivElement}
	 */
	let element;

	let didLoadScript = false;

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

	/**
	 *
	 * @param element {HTMLDivElement | undefined}
	 * @param _didLoadScript {boolean}
	 */
	function init(element, _didLoadScript) {
		if (!element || !loaded) {
			return;
		}

		turnstile.render(element, {
			sitekey,
			callback: (t) => {
				token = t;
			}
		});
	}

	$: init(element, didLoadScript);
</script>

<div bind:this={element}></div>

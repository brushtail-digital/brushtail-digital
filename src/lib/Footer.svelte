<script>
	import { resolve } from '$app/paths';

	/** @type {{ year: number }} */
	let { year } = $props();
</script>

<footer class="footer">
	<div class="content has-text-centered">
		<p>
			&copy; {year} Brushtail Digital | ABN: 57 389 874 276 |
			<a href={resolve('/privacy-policy')}>Privacy Policy</a>
		</p>
	</div>
</footer>

<style>
	.footer {
		border-top: solid 1px var(--bulma-border);
	}
</style>

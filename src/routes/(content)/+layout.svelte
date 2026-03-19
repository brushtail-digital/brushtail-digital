<script>
	import { resolve } from '$app/paths';
	import Footer from '$lib/Footer.svelte';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	let { children, data } = $props();
</script>

<nav class="navbar is-black theme-dark">
	<div class="navbar-brand">
		<a href={resolve('/')} class="navbar-item logo">
			<img class="logo-dark" src="/logo-dark.svg" alt="Brushtail Digital" />
		</a>
	</div>
	<div class="navbar-menu">
		<div class="navbar-end">
			<div class="navbar-item">
				<a href={resolve('/#contact')} class="button is-success">
					<span class="icon">
						<Fa icon={faEnvelope} />
					</span>
					<span>Contact Us</span>
				</a>
			</div>
		</div>
	</div>
</nav>

<main>
	<div class="container is-max-desktop">
		<section class="section content">
			{@render children?.()}
		</section>
	</div>
</main>

<Footer year={data.year} />

<style>
	.navbar {
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}
</style>

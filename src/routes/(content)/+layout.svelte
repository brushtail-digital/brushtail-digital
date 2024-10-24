<script>
	import Footer from '$lib/Footer.svelte';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
</script>

<nav class="navbar is-black theme-dark">
	<div class="navbar-brand">
		<a href="/" class="navbar-item logo">
			<img class="logo-dark" src="/logo-dark.svg" alt="Brushtail Digital" />
		</a>
	</div>
	<div class="navbar-menu">
		<div class="navbar-end">
			<div class="navbar-item">
				<a href="/#contact" class="button is-success">
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
			<slot />
		</section>
	</div>
</main>

<Footer />

<style>
	.navbar {
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}
</style>

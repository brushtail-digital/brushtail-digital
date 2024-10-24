<script>
	/**
	 * @param e {MouseEvent}
	 */
	function doScroll(e) {
		e.preventDefault();
		// @ts-ignore
		document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<section class="hero is-halfheight">
	<div class="hero-head">
		<nav class="navbar">
			<div class="container">
				<div class="navbar-brand">
					<a href="/" class="navbar-item logo">
						<img src="/logo-dark.svg" alt="Brushtail Digital" />
					</a>
				</div>
			</div>
		</nav>
	</div>

	<div class="hero-body">
		<div class="container has-text-centered">
			<p class="title is-1 has-text-white">Software specialists</p>
			<p class="subtitle mt-4 has-text-white">
				Experts in web technologies and software development.
			</p>
			<p>
				<a class="button is-success mt-4" href="#expertise" on:click|preventDefault={doScroll}
					>Find out more</a
				>
			</p>
		</div>
	</div>
</section>

<style>
	.hero {
		background-image: url('/hero.jpg');
		background-size: cover;
		background-position: center;
	}

	.logo:hover {
		--bulma-navbar-item-background-a: 0.25;
	}
</style>

<script>
	import { page } from '$app/stores';

	// @ts-ignore
	$: message = $page.error.message;
</script>

<main>
	<div class="container">
		<section class="section has-text-centered">
			<p class="is-size-5">
				<strong>{$page.status}:</strong>
				{message}
			</p>
			<p class="mt-4">
				Click <a href="/">here</a> to return to the home page.
			</p>
		</section>
	</div>
</main>

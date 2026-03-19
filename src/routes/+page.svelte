<script>
	import Contact from '$lib/Contact.svelte';
	import Expertise from '$lib/Expertise.svelte';
	import Footer from '$lib/Footer.svelte';
	import Hero from '$lib/Hero.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Brushtail Digital</title>
</svelte:head>

<Hero />
<main>
	<Expertise />
	<Contact />
</main>
<Footer year={data.year} />

<style>
</style>

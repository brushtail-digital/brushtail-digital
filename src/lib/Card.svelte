<script>
	import Fa from 'svelte-fa';

	export let title;
	export let icon;
</script>

<div class="card">
	<header class="card-header">
		<div class="card-header-title">
			<div class="bt-top">
				<div class="has-text-primary"><Fa {icon} /></div>
				<div>{title}</div>
			</div>
		</div>
	</header>
	<div class="card-content">
		<div class="content"><slot /></div>
	</div>
</div>

<style>
	.card {
		height: 100%;
		transition: transform 0.3s ease;
	}
	.card:hover {
		transform: translate(0, -0.5rem);
	}
	.bt-top {
		display: flex;
		gap: 1rem;
		font-size: 1.25rem;
		padding: 0.5rem;
		padding-bottom: 0;
	}
</style>

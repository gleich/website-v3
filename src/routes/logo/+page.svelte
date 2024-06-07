<script>
	import Logo from '$lib/index/nav/logo.svelte';
</script>

<main>
	<Logo class="logo" />
</main>

<style>
	:global(.logo) {
		width: 200px;
		height: auto;
	}

	:global(.logo > .m) {
		fill: white;
	}

	:global(.logo > .lines) {
		stroke: white;
	}

	main {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100vw;
		background-color: var(--arc-palette-foregroundSecondary);
		opacity: 0.8;
		background-image: radial-gradient(white, 0.35px, var(--arc-palette-foregroundSecondary) 0.5px);
		background-size: 10px 10px;
	}
</style>

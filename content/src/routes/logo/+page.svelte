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
	}
</style>

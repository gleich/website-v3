<script>
	import Nav from '$lib/index/nav/nav.svelte';
</script>

<main>
	<Nav />
</main>

<style>
	main {
		background-color: var(--background);
		color: var(--foreground);
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Inter';
	}

	:global(h1, h2, h3, h4, h4, h5, h6) {
		margin: 0;
	}

	:root {
		--background: rgb(24, 25, 32);
		--foreground: white;
		--border: grey;
		--line-color: #49a4ff;
	}

	@media (prefers-color-scheme: light) {
		:root {
			--background: white;
			--foreground: rgb(24, 25, 32);
			--border: rgb(214, 214, 214);
		}
	}
</style>

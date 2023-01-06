<script>
	import Card from '$lib/card.svelte';
	import Nav from '$lib/index/nav/nav.svelte';
</script>

<div class="root">
	<main>
		<nav>
			<Nav />
		</nav>
		<div>welcome to my website :)</div>
	</main>
</div>

<style>
	.root {
		background-color: var(--background);
		color: var(--foreground);
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Helvetica';
	}

	main {
		display: flex;
		flex-direction: column;
		max-width: 600px;
	}

	nav {
		padding-bottom: 10px;
	}

	/* global styles */

	:global(p, h1, h2, h3, h4, h4, h5, h6) {
		margin: 0;
	}

	:root {
		--background: rgb(14, 14, 14);
		--foreground: white;
		--border: grey;
		--line-color: #49a4ff;
	}

	@media (prefers-color-scheme: light) {
		:root {
			--background: white;
			--foreground: rgb(14, 14, 14);
			--border: rgb(214, 214, 214);
		}
	}
</style>

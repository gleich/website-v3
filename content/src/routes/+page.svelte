<script>
	import Card from '$lib/card.svelte';
	import Nav from '$lib/index/nav/nav.svelte';
</script>

<div class="root">
	<main>
		<nav>
			<Nav />
		</nav>
		<div class="welcome">
			hello and welcome to my website! I'm Matt Gleich, a first year student at RIT (Rochester
			Institute of Technology) studying CS. Currently looking for a position but I'm always up for
			meeting new people! Feel free out over email at <a href="email@mattglei.ch" about="_blank"
				>email@mattglei.ch</a
			>
			or on <a href="https://twitter.com/matt_gleich" about="_blank">twitter</a>!
		</div>
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

	.welcome {
		padding: 20px;
		border: 0.5px var(--border) solid;
	}

	/* global styles */

	:global(p, h1, h2, h3, h4, h4, h5, h6) {
		margin: 0;
	}

	:global(a) {
		color: #49a4ff;
	}

	:root {
		--background: rgb(14, 14, 14);
		--foreground: white;
		--border: rgb(58, 58, 58);
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

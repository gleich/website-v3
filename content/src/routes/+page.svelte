<script lang="ts">
	import Strava from '$lib/index/strava/strava.svelte';
	import Name from '$lib/index/name/name.svelte';
	import type { LoadData } from './+page.server';

	export let data: LoadData;
</script>

<div class="root">
	<main>
		<Name />
		<div class="cards">
			<div class="welcome">
				hello and welcome to my website! I'm Matt Gleich, a first year student at RIT (Rochester
				Institute of Technology) studying CS. I'm not currently looking for a position but I'm
				always up for meeting new people! Feel free out over email at <a
					href="mailto:email@mattglei.ch">email@mattglei.ch</a
				>
				or on
				<a href="https://twitter.com/matt_gleich" target="_blank" rel="noreferrer">twitter</a>.
			</div>
			<Strava data={data.props.rides} />
		</div>
	</main>
</div>

<style>
	.root {
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Helvetica';
		margin-top: 30vh;
		margin-bottom: 100px;
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		max-width: 800px;
	}

	.welcome {
		padding: 20px;
		border: 0.5px var(--border) solid;
		margin: 25px;
		width: 100%;
		box-sizing: border-box;
	}

	.cards {
		width: calc(100% - 40px);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin: 0 20px;
	}

	/* global styles */

	:global(p, h1, h2, h3, h4, h4, h5, h6) {
		margin: 0;
	}

	:global(a) {
		color: #49a4ff;
	}
</style>

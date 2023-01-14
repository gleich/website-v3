<script lang="ts">
	import Strava from '$lib/index/strava/strava.svelte';
	import Name from '$lib/index/name/name.svelte';
	import type { LoadData } from './+page.server';
	import Head from '$lib/head.svelte';

	export let data: LoadData;
</script>

<svelte:head>
	<Head
		title="Matt Gleich"
		description="first year student at RIT studying CS. cyclist, photographer, and student"
	/>
</svelte:head>

<div class="root">
	<main>
		<Name />
		<div class="cards">
			<div class="welcome">
				I'm Matt Gleich, a first year student at <a
					href="https://www.rit.edu/"
					target="_blank"
					rel="noreferrer">RIT</a
				>
				(Rochester Institute of Technology) studying CS. I'm not currently looking for a position but
				I'm always up for meeting new people! Feel free to reach out over email at
				<a href="mailto:email@mattglei.ch">email@mattglei.ch</a>
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
		box-shadow: 0px 0px 10px var(--border);
	}

	.cards {
		width: calc(100% - 40px); /* -40px for side margins */
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

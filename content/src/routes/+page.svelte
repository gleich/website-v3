<script lang="ts">
	import Strava from '$lib/index/strava/strava.svelte';
	import Name from '$lib/index/nav/name.svelte';
	import type { LoadData } from './+page.server';
	import Head from '$lib/head.svelte';
	import Photos from '$lib/index/photos/photos.svelte';
	import Card from '$lib/index/card.svelte';

	export let data: LoadData;
</script>

<svelte:head>
	<Head
		title="Matt Gleich"
		description="second year student at RIT studying CS. cyclist, photographer, and student"
	/>
</svelte:head>

<div class="root">
	<main>
		<Name />
		<div class="cards">
			<Card>
				<p>
					I'm Matt Gleich, a second year student at <a
						href="https://www.rit.edu/"
						target="_blank"
						rel="noreferrer">RIT</a
					>
					(Rochester Institute of Technology) studying CS. Currently, I am looking for a COOP for the
					summer & fall of 2024. Feel free to reach out over email at
					<a href="mailto:email@mattglei.ch">email@mattglei.ch</a>
					or on
					<a href="https://twitter.com/matt_gleich" target="_blank" rel="noreferrer">twitter</a>.
				</p>
			</Card>
			<Strava data={data.props.rides} />
			<Photos />
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
		max-width: 1000px;
	}

	.cards {
		width: calc(100% - 40px); /* -40px for side margins */
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin: 0 20px;
	}
</style>

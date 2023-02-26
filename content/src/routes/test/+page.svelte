<script lang="ts">
	import Graph from '$lib/index/strava/graph.svelte';
	import type { LoadData } from './+page.server';

	export let data: LoadData;
</script>

<main><Graph laps={data.props.rides.map((x) => x.laps)[2]} /></main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>

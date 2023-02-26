<script lang="ts">
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import type { Lap } from './activities';

	export let laps: Lap[];
	const totalMovingTime = laps.reduce((partialSum, a) => partialSum + a.moving_time, 0);
	const data = laps.map((x) => x.average_watts);
	const maxWattage = Math.max(...data);
	const totalWidth = 350;
	const totalHeight = 250;
	const ftp = 201;

	let el: HTMLElement;

	let i = 0;
	onMount(() => {
		d3.select(el)
			.selectAll('div')
			.data(data)
			.enter()
			.append('div')
			.style('height', (d) => {
				return (d / maxWattage) * totalHeight + 'px';
			})
			.style('width', () => {
				const lap = laps[i];
				console.log((lap.moving_time / totalMovingTime) * totalWidth);
				i++;
				return (lap.moving_time / totalMovingTime) * totalWidth - 2 + 'px';
			})
			.style('background-color', (d) => {
				return 'var(--border)';
			});
	});
</script>

<div bind:this={el} class="chart" />

<style>
	.chart :global(div) {
		background-color: #4ea56b;
		text-align: right;
		color: white;

		border: solid 1px var(--background);
	}

	.chart {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		border: solid 1px var(--border);
	}
</style>

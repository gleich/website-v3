<script lang="ts">
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import type { Lap } from './activities';

	export let laps: Lap[];
	const totalMovingTime = laps.reduce((partialSum, a) => partialSum + a.moving_time, 0);
	const data = laps.map((x) => x.average_watts);
	const maxWattage = Math.max(...data);
	$: totalWidth = 0;
	const totalHeight = 240;

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
				i++;
				return (lap.moving_time / totalMovingTime) * totalWidth - 2 + 'px';
			})
			.style('background-color', (d) => {
				return 'var(--border)';
			});
	});
</script>

<div class="container" bind:clientWidth={totalWidth}>
	<div bind:this={el} class="chart" />
</div>

<style>
	.chart :global(div) {
		background-color: #4ea56b;
		text-align: center;
		color: white;
		border: solid 1px var(--background);
		writing-mode: vertical-rl;
		font-size: 0.7rem;
		text-orientation: mixed;
	}

	.chart {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: center;
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 350px;
		height: 250px;
		border: solid 1px var(--border);
	}

	@media (max-width: 400px) {
		.container {
			width: 100%;
		}
	}
</style>

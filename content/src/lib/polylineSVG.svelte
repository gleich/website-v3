<script lang="ts">
	import { decode } from '@mapbox/polyline';
	import { onMount } from 'svelte';

	export let polyline: string;

	let minX = 256,
		minY = 256,
		maxX = 0,
		maxY = 0,
		height = 0,
		width = 0;
	const points: string[] = [];

	const latLongPoints = decode(polyline);

	function latLng2point(point: [number, number]) {
		return {
			x: (point[1] + 180) * (256 / 360),
			y:
				256 / 2 -
				(256 * Math.log(Math.tan(Math.PI / 4 + +((point[0] * Math.PI) / 180 / 2)))) / (2 * Math.PI)
		};
	}

	for (const latLongPoint of latLongPoints) {
		const point = latLng2point(latLongPoint);
		console.log(point);
		minX = Math.min(minX, point.x);
		minY = Math.min(minY, point.y);
		maxX = Math.max(maxX, point.x);
		maxY = Math.max(maxY, point.y);
		points.push(point.x + ',' + point.y);
	}
	height = maxY - minY;
	width = maxX - minX;

	let length = 0;

	onMount(() => {
		let path = document.getElementById('path') as SVGPathElement | null;
		length = path?.getTotalLength() ?? 0;
	});
</script>

<div style={`--length:${length}`}>
	<svg
		height="400"
		width="400"
		viewBox={`${minX} ${minY} ${width} ${height}`}
		preserveAspectRatio="XMinYMin meet"
	>
		<g>
			<path id="path" d={`M${points.join(' ')}`} />
		</g>
	</svg>
</div>

<style>
	path {
		stroke: var(--foreground);
		stroke-width: 0.0005;
		fill: none;
		stroke-dasharray: var(--length);
		stroke-dashoffset: var(--length);
		animation: sign 20s infinite;
	}

	svg {
		width: 150px;
		height: auto;
		padding: 10px;
		border: 0.5px var(--border) solid;
	}

	@keyframes sign {
		to {
			stroke-dashoffset: 0;
		}
	}
</style>

<script lang="ts">
	import PolylineSvg from './polylineSVG.svelte';

	export let polyline: string;
</script>

<div class="container">
	<!-- <PolylineSvg /> -->
</div>

<style>
	.container {
		width: 100%;
		box-sizing: border-box;
		padding: 10px;
		border: 0.05px var(--border) solid;
	}
</style>

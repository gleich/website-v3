<script lang="ts">
	import PolylineSvg from './polylineSVG.svelte';

	export let polyline: string;
</script>

<div class="container">
	<PolylineSvg {polyline} />
</div>

<style>
	.container {
		border-radius: 5px;
		color: black;
		width: 100%;
		height: 200px;
	}
</style>

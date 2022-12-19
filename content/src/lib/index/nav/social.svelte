<script lang="ts">
	export let link: string;
	export let name: string;
	export let filename: string;
</script>

<a href={link} target="_blank" rel="noreferrer" alt={name}>
	<img src="/icons/{filename}.svg" alt={name} />
</a>

<style>
	img {
		width: 25px;
		height: auto;
		filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(298deg) brightness(102%) contrast(102%);
	}

	@media (prefers-color-scheme: light) {
		img {
			filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(82deg) brightness(102%)
				contrast(104%);
		}
	}
</style>

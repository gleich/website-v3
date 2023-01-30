<script lang="ts">
	export let link: string;
	export let name: string;
	export let filename: string;
</script>

<a href={link} target="_blank" rel="noreferrer" title={name}>
	<img src="/icons/{filename}.svg" alt={name} />
</a>

<style>
	img {
		width: 25px;
		height: auto;
		filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(298deg) brightness(102%) contrast(102%);
	}

	img:hover {
		animation: shake 0.1s linear;
	}

	@media (prefers-color-scheme: light) {
		img {
			filter: invert(5%) sepia(4%) saturate(5432%) hue-rotate(195deg) brightness(96%) contrast(88%);
		}
	}
</style>

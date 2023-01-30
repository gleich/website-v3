<script>
	import Card from '../card.svelte';
</script>

<Card>
	<h2>Photos</h2>

	<img src="/photos/nolan.jpg" alt="nolan" loading="lazy" />
</Card>

<style>
	img {
		width: 400px;
		height: auto;
	}
</style>

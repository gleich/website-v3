<script>
	import Card from '../card.svelte';

	const filenames = [
		'spider',
		'hayden',
		'vroom',
		'baseball',
		'acadia',
		'moonlight',
		'lights',
		'nolan'
	];
</script>

<Card>
	<h2>Photos</h2>

	<p>
		I also like to take photos in my free time. Here is some of my favorite photos I've taken over
		the past few years.
	</p>

	{#each filenames as filename}
		<img src={`/photos/${filename}.jpg`} alt="filename" loading="lazy" />
	{/each}
</Card>

<style>
	img {
		max-height: 90vh;
		width: 100%;
		object-fit: scale-down;
		pointer-events: none;
	}
</style>

<script lang="ts">
	import Card from '../card.svelte';

	interface Photo {
		filename: string;
		width: number;
		height: number;
	}

	const photos: Photo[] = [
		{
			filename: 'spider',
			width: 2540,
			height: 1693
		},
		{
			filename: 'hayden',
			width: 4096,
			height: 2731
		},
		{
			filename: 'acadia',
			width: 4096,
			height: 2731
		},
		{
			filename: 'moonlight',
			width: 2730,
			height: 4096
		},
		{
			filename: 'car',
			width: 2705,
			height: 4057
		},
		{
			filename: 'chris',
			width: 2659,
			height: 3989
		},
		{
			filename: 'fox',
			width: 2731,
			height: 4069
		},
		{
			filename: 'mtb',
			width: 2731,
			height: 4069
		}
	];
</script>

<Card>
	<h2>Photos</h2>

	<p>
		I also like to take photos in my free time. Here is some of my favorite photos I've taken over
		the past few years. I mainly shoot with Nikon cameras and my current one is a Nikon Z7II.
	</p>

	{#each photos as photo}
		<img
			src={`/photos/${photo.filename}.webp`}
			alt={photo.filename}
			loading="lazy"
			width={photo.height}
			height={photo.width}
		/>
	{/each}
</Card>

<style>
	img {
		max-height: 90vh;
		height: auto;
		width: 100%;
		object-fit: scale-down;
		pointer-events: none;
	}
</style>

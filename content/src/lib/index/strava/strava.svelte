<script lang="ts">
	import type { Activity } from './activities';
	import PolylineSvg from './polylineSVG.svelte';
	import dayjs from 'dayjs';
	import duration from 'dayjs/plugin/duration';
	import relativeTime from 'dayjs/plugin/relativeTime';

	dayjs.extend(duration);
	dayjs.extend(relativeTime);

	export let data: Activity[];

	function renderDuration(seconds: number): string {
		const movingDuration = dayjs.duration(seconds, 'seconds');
		const minutes = Number(movingDuration.format('m'));
		const minutesName = minutes > 1 ? 'mins' : 'min';
		if (seconds > 3600) {
			const hours = Number(movingDuration.format('H'));
			const hoursName = hours > 1 ? 'hrs' : 'hr';
			return `${hours}${hoursName} & ${minutes}${minutesName}`;
		}
		return `${minutes}${minutesName}`;
	}
</script>

<div class="container">
	{#each data.filter((v) => !v.private && v.map.summary_polyline != '').slice(0, 5) as activity}
		<div class="activity">
			<PolylineSvg polyline={activity.map.summary_polyline} />
			<div class="activity-data">
				<h3>{activity.name}</h3>
				<h5>{dayjs(activity.start_date).fromNow()}</h5>
				<br />
				<p>
					Distance: {((activity.distance * 0.621) / 1000).toPrecision(4)} miles ({(
						activity.distance / 1000
					).toPrecision(4)}
					km)
				</p>
				<p>
					Duration: {renderDuration(activity.moving_time)}
				</p>
				{#if activity.average_watts != 0}
					<p>Average Power: {activity.average_watts} watts</p>
				{/if}
				<p>Average Heartrate: {activity.average_heartrate} bmp</p>
				<p>
					<a
						href={'https://www.strava.com/activities/' + activity.id}
						target="_blank"
						rel="noreferrer">View on Strava</a
					>
				</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.container {
		width: 100%;
		box-sizing: border-box;
		padding: 10px;
		border: 0.05px var(--border) solid;
		display: flex;
		flex-direction: column;
		gap: 10px;
		box-shadow: 0px 0px 10px var(--border);
	}

	.activity {
		display: flex;
		gap: 10px;
	}
</style>

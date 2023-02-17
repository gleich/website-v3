<script lang="ts">
	import type { Activity } from './activities';
	import PolylineSvg from './polylineSVG.svelte';
	import dayjs from 'dayjs';
	import duration from 'dayjs/plugin/duration';
	import relativeTime from 'dayjs/plugin/relativeTime';
	import { onMount } from 'svelte';
	import Card from '../card.svelte';
	import NoMap from './noMap.svelte';

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
			return `${hours} ${hoursName} & ${minutes} ${minutesName}`;
		} else if (seconds === 3600) {
			return '1 hour';
		}
		return `${minutes}${minutesName}`;
	}

	function renderTimeDiff() {
		for (const i in activities) {
			const diff = dayjs.duration(dayjs(activities[i].start_date).diff(dayjs()));
			const yearsDiff = Math.abs(Number(diff.format('Y')));
			const monthsDiff = Math.abs(Number(diff.format('M')));
			const daysDiff = Math.abs(Number(diff.format('D')));
			const hoursDiff = Math.abs(Number(diff.format('H')));
			const minutesDiff = Math.abs(Number(diff.format('m')));
			const secondsDiff = Math.abs(Number(diff.format('s')));
			let display = [];
			if (yearsDiff > 0) {
				display.push(`${yearsDiff} years`);
			}
			if (monthsDiff > 0) {
				display.push(`${monthsDiff} months`);
			}
			if (daysDiff > 0) {
				display.push(`${daysDiff} days`);
			}
			if (hoursDiff > 0) {
				display.push(`${hoursDiff} hours`);
			}
			if (minutesDiff > 0) {
				display.push(`${minutesDiff} minutes`);
			}
			if (secondsDiff > 0) {
				display.push(`${secondsDiff} seconds`);
			}
			diffs[i] = display.join(', ') + ' ago';
		}
	}

	$: activities = data.filter((v) => !v.private).slice(0, 4);
	$: diffs = new Array(4);

	onMount(() => {
		const interval = setInterval(() => {
			renderTimeDiff();
		}, 100);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<Card>
	<h2 class="title">Recent Activities</h2>
	<p>
		Currently I am training for <a href="https://eccc-cycling.com/" target="_blank" rel="noreferrer"
			>ECCC</a
		>
		(Eastern Collegiate Cycling Conference) road racing in the Spring of 2023. I am currently on a medium
		volume training plan ~6-8 hrs/week. You can even see my
		<a href="https://www.trainerroad.com/app/career/mattgleich" target="_blank" rel="noreferrer"
			>training plan</a
		> that I have through trainerroad.
	</p>
	{#each activities as activity, i}
		<div class="activity">
			{#if activity.map.summary_polyline === ''}
				<NoMap />
			{:else}
				<PolylineSvg polyline={activity.map.summary_polyline} />
			{/if}
			<div class="activity-data">
				<h3>
					{activity.sport_type === 'Ride' || activity.sport_type === 'VirtualRide'
						? 'Cycling'
						: activity.sport_type}: {activity.name}
				</h3>
				<h5>{diffs[i]}</h5>
				<br />
				<table>
					<tr>
						<th>Distance</th>
						<td
							>{((activity.distance * 0.621) / 1000).toPrecision(4)} miles ({(
								activity.distance / 1000
							).toPrecision(4)} km)</td
						>
					</tr>
					<tr>
						<th>Duration</th>
						<td>{renderDuration(activity.moving_time)}</td>
					</tr>
					<tr>
						<th>Climbing</th>
						<td
							>{Math.round(activity.total_elevation_gain * 3.281)}ft ({Math.round(
								activity.total_elevation_gain
							)}m)</td
						>
					</tr>
					{#if activity.average_watts != 0}
						<tr>
							<th>Average Power</th>
							<td>{activity.average_watts} watts</td>
						</tr>
					{/if}
					<tr>
						<th>Average Heartrate</th>
						<td>{activity.average_heartrate} bmp</td>
					</tr>
					<tr>
						<td class="blankEntry" />
						<p class="stravaLink">
							<a
								href={'https://www.strava.com/activities/' + activity.id}
								target="_blank"
								rel="noreferrer"
								>View on Strava
							</a>
							<img class="stravaIcon" src="/icons/strava.svg" alt="strava icon" />
						</p>
					</tr>
				</table>
			</div>
		</div>
	{/each}
</Card>

<style>
	.title {
		margin: 5px;
	}

	.activity {
		display: flex;
		gap: 10px;
	}

	h3 {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	th,
	td {
		border: 0.5px solid var(--border);
		padding: 5px;
		font-size: 1rem;
		vertical-align: bottom;
	}

	th {
		text-align: left;
	}

	.blankEntry {
		border: none;
	}

	.stravaLink {
		padding-top: 5px;
		text-align: right;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 5px;
	}

	.stravaIcon {
		width: 17px;
		height: auto;
	}

	@media (max-width: 578px) {
		.activity {
			flex-direction: column;
			border: 0.5px solid var(--border);
			padding: 10px;
		}
	}
</style>

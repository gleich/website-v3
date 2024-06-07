import type { Activity } from '$lib/index/strava/activities';

export interface LoadData {
	props: Props;
	status: number;
}

export interface Props {
	rides: Activity[];
}

export async function load({ fetch }) {
	const res = await fetch('https://api.mattglei.ch/strava/cache', {
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + import.meta.env.VITE_API_TOKEN
		}
	});
	const data = await res.json();
	if (res.ok) {
		return {
			props: {
				rides: data
			}
		};
	}
	return {
		status: res.status,
		error: new Error('Could not fetch the rides')
	};
}

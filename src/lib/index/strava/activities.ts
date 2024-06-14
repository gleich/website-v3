export interface Activity {
	name: string;
	sport_type: string;
	start_date: string;
	map: Map;
	trainer: boolean;
	commute: boolean;
	private: boolean;
	average_speed: number;
	max_speed: number;
	average_temp: number;
	average_cadence: number;
	average_watts: number;
	device_watts: boolean;
	average_heartrate: number;
	total_elevation_gain: number;
	moving_time: number;
	suffer_score: number;
	pr_count: number;
	distance: number;
	id: number;
}

export interface Map {
	summary_polyline: string;
}

export interface Lap {
	moving_time: number;
	distance: number;
	average_watts: number;
	lap_index: number;
}

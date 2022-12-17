package strava

import "time"

type Activity struct {
	Name       string    `json:"name"`
	MovingTime int       `json:"moving_time"`
	Distance   float32   `json:"distance"`
	Elevation  int       `json:"total_elevation_gain"`
	StartDate  time.Time `json:"start_date"`
	Map        struct {
		SummaryPolyline string `json:"summary_polyline"`
	} `json:"map"`
	AverageWatts       int     `json:"average_watts"`
	AverageHeartrate   float32 `json:"average_heartrate"`
	SufferScore        int     `json:"suffer_score"`
	AverageTemperature int     `json:"average_temp"`
	Private            bool    `json:"private"`
}

func LoadActivities()

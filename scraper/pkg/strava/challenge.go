package strava

import (
	"encoding/json"
	"net/http"

	"github.com/gleich/lumber/v2"
)

func handleChallenge(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-type", "application/json")
	data, err := json.Marshal(map[string]string{"hub.challenge": r.URL.Query().Get("hub.challenge")})
	if err != nil {
		lumber.Fatal(err, "Failed to marshal strava challenge data")
	}
	_, err = w.Write(data)
	if err != nil {
		lumber.Fatal(err, "Failed to write JSON data for strava challenge")
	}
	lumber.Success("Responded to strava challenge request")
}

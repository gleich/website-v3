package strava

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	"github.com/gleich/lumber/v2"
	"github.com/gleich/website/scraper/pkg/config"
)

type event struct {
	AspectType     string `json:"aspect_type"`
	EventTime      int    `json:"event_time"`
	ObjectID       int    `json:"object_id"`
	ObjectType     string `json:"object_type"`
	OwnerID        int    `json:"owner_id"`
	SubscriptionID int    `json:"subscription_id"`
}

func handleUpdate(w http.ResponseWriter, r *http.Request) {
	b, err := io.ReadAll(r.Body)
	if err != nil {
		lumber.Fatal(err, "Failed to read body for main strava endpoint")
	}

	lumber.Debug("body", string(b))
	lumber.Debug("headers", r.Header)

	var eventData event
	err = json.Unmarshal(b, &eventData)
	if err != nil {
		lumber.Fatal(err, "Failed to parse body for main strava endpoint")
	}

	if fmt.Sprint(eventData.SubscriptionID) == config.ENV_CONFIG.StravaSubscriptionID {
		lumber.Success("Valid event data received")
	}
}

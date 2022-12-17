package strava

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	"github.com/gleich/lumber/v2"
	"github.com/gleich/website/scraper/pkg/config"
	"github.com/gleich/website/scraper/pkg/util"
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
	// parse body of event
	b, err := io.ReadAll(r.Body)
	if err != nil {
		util.HandleHTTPError(w, err, "Failed to read body for main strava endpoint")
	}
	var eventData event
	err = json.Unmarshal(b, &eventData)
	if err != nil {
		util.HandleHTTPError(w, err, "Failed to parse body for main strava endpoint")
	}

	// check to see if subscription ID matches
	if fmt.Sprint(eventData.SubscriptionID) == config.ENV_CONFIG.StravaSubscriptionID {
		lumber.Success("Valid event data received")

		err = RefreshTokenIfNeeded()
		if err != nil {
			util.HandleHTTPError(w, err, "Failed to refresh access token")
		}

	}
}

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
	b, err := io.ReadAll(r.Body)
	if err != nil {
		util.HandleHTTPError(w, err, "Failed to read body for main strava endpoint")
	}

	lumber.Debug("body:", string(b))
	lumber.Debug("headers:", r.Header)

	var eventData event
	err = json.Unmarshal(b, &eventData)
	if err != nil {
		util.HandleHTTPError(w, err, "Failed to parse body for main strava endpoint")
	}

	if fmt.Sprint(eventData.SubscriptionID) == config.ENV_CONFIG.StravaSubscriptionID {
		lumber.Success("Valid event data received")
		err = RefreshTokenIfNeeded()
		if err != nil {
			util.HandleHTTPError(w, err, "Failed to refresh access token")
		}
		lumber.Debug("ACCESS_TOKEN:", ACCESS_TOKEN)
		lumber.Debug("REFRESH_TOKEN:", REFRESH_TOKEN)
	}
}

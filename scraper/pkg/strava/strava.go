package strava

import (
	"io"
	"net/http"

	"github.com/gleich/lumber/v2"
	"github.com/gleich/website/scraper/pkg/config"
)

func Endpoint(w http.ResponseWriter, r *http.Request) {
	lumber.Info("hit to /strava:", r.URL)
	if r.URL.Query().Get("hub.mode") == "subscribe" && r.URL.Query().Get("hub.verify_token") == config.ENV_CONFIG.StravaVerifyToken {
		handleChallenge(w, r)
	} else {
		b, err := io.ReadAll(r.Body)
		if err != nil {
			lumber.Fatal(err, "Failed to parse request body")
		}
		lumber.Debug("body", string(b))
		lumber.Debug("headers", r.Header)
	}
}

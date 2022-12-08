package strava

import (
	"encoding/json"
	"io"
	"net/http"
	"net/url"
	"sync"
	"time"

	"github.com/gleich/website/scraper/pkg/config"
)

var (
	ACCESS_TOKEN             = ""
	REFRESH_TOKEN            = ""
	token_mutex              = sync.Mutex{}
	REFRESH_TOKEN_EXPIRATION = 0
)

type bodyData struct {
	AccessToken  string `json:"access_token"`
	ExpiresAt    int    `json:"expires_at"`
	RefreshToken string `json:"refresh_token"`
}

func RefreshTokenIfNeeded() error {
	// if token hasn't expired, do nothing
	if time.Now().Unix() <= int64(REFRESH_TOKEN_EXPIRATION) {
		return nil
	}

	// making post request
	refreshToken := ""
	if REFRESH_TOKEN == "" {
		refreshToken = config.ENV_CONFIG.StravaInitialRefreshToken
	} else {
		refreshToken = REFRESH_TOKEN
	}
	queryParams := url.Values{
		"client_id":     {config.ENV_CONFIG.StravaClientID},
		"client_secret": {config.ENV_CONFIG.StravaClientSecret},
		"grant_type":    {"refresh_token"},
		"refresh_token": {refreshToken},
		"code":          {config.ENV_CONFIG.StravaOAUTHCode},
	}
	resp, err := http.Post(
		"https://www.strava.com/oauth/token?"+queryParams.Encode(),
		"application/json",
		nil,
	)
	if err != nil {
		return err
	}

	// parsing json
	b, err := io.ReadAll(resp.Body)
	if err != nil {
		return err
	}
	var data bodyData
	err = json.Unmarshal(b, &data)
	if err != nil {
		return err
	}

	// updating access and refresh token
	token_mutex.Lock()
	defer token_mutex.Unlock()
	ACCESS_TOKEN = data.AccessToken
	REFRESH_TOKEN = data.RefreshToken
	REFRESH_TOKEN_EXPIRATION = data.ExpiresAt

	return nil
}

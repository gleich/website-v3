package config

import (
	"github.com/caarlos0/env/v6"
	"github.com/gleich/lumber/v2"
	"github.com/joho/godotenv"
)

var ENV_CONFIG *ENVConfig

type ENVConfig struct {
	StravaVerifyToken         string `env:"STRAVA_VERIFY_TOKEN"`
	StravaSubscriptionID      string `env:"STRAVA_SUBSCRIPTION_ID"`
	StravaInitialRefreshToken string `env:"STRAVA_INITIAL_REFRESH_TOKEN"`
	StravaClientID            string `env:"STRAVA_CLIENT_ID"`
	StravaClientSecret        string `env:"STRAVA_CLIENT_SECRET"`
	StravaOAUTHCode           string `env:"STRAVA_OAUTH_CODE"`
}

func Load() (ENVConfig, error) {
	err := godotenv.Load()
	if err != nil {
		lumber.Fatal(err, "Failed to load .env file")
	}

	var cfg ENVConfig
	err = env.Parse(&cfg)
	if err != nil {
		return ENVConfig{}, err
	}
	lumber.Success("Loaded environment variables\n")
	return cfg, nil
}

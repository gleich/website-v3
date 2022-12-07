package main

import (
	"log"
	"net/http"

	"github.com/gleich/lumber/v2"
	"github.com/gleich/website/scraper/pkg/config"
	"github.com/gleich/website/scraper/pkg/strava"
	"github.com/gorilla/mux"
)

func main() {
	envConfigLoaded, err := config.Load()
	if err != nil {
		lumber.Fatal(err, "Failed to load environment variables")
	}
	config.ENV_CONFIG = &envConfigLoaded

	// setup mux
	r := mux.NewRouter()
	r.HandleFunc("/strava", strava.Endpoint)
	err = http.ListenAndServe(":80", r)
	if err != nil {
		log.Fatal("Failed to serve log", err)
	}
}

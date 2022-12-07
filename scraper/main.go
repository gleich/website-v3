package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/strava", stravaEndpoint)
	err := http.ListenAndServe(":80", r)
	if err != nil {
		log.Fatal("Failed to serve log", err)
	}
}

func stravaEndpoint(w http.ResponseWriter, r *http.Request) {
	fmt.Println("strava endpoint hit")
}

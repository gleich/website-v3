# website

My personal website and REST API.

## REST API

Built using [diesel](https://diesel.rs/) and [rust](https://www.rust-lang.org/) my REST API serves a caching system for some of the content on my website. It uses a atomic reference counter and mutex lock to store the cached data in a thread safe manor. One thread will update cache and then another thread will manage the endpoint. It runs in a docker container on my personal caprover server.

## Frontend

Written using [SvelteKit](https://kit.svelte.dev/) and uses [Mapbox's API](https://www.mapbox.com/) to display maps of my recent Strava rides.

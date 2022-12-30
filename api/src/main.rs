use dotenv::dotenv;
use rocket::{self, launch, routes, Config};
use tracing::{info, Level};
use tracing_subscriber::FmtSubscriber;

mod auth;
mod strava;

#[launch]
async fn rocket() -> _ {
    let subscriber = FmtSubscriber::builder()
        .with_max_level(Level::INFO)
        .finish();
    tracing::subscriber::set_global_default(subscriber).expect("setting default subscriber failed");
    info!("booted");
    dotenv().expect("Failed to load dotenv");
    strava::event::update()
        .await
        .expect("failed to do initial update on strava");
    rocket::custom(Config::figment().merge(("address", "0.0.0.0"))).mount(
        "/strava",
        routes![
            strava::event::endpoint,
            strava::challenge::endpoint,
            strava::cache::endpoint
        ],
    )
}

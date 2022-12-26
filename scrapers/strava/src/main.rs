use challenge::Parameters;
use dotenv::dotenv;
use event::Event;
use rocket::{self, launch, post, routes, serde::json::Json};
use tracing::{info, Level};
use tracing_subscriber::FmtSubscriber;

mod activities;
mod challenge;
mod event;
mod token;

#[launch]
fn rocket() -> _ {
    let subscriber = FmtSubscriber::builder()
        .with_max_level(Level::INFO)
        .finish();
    tracing::subscriber::set_global_default(subscriber).expect("setting default subscriber failed");
    info!("booted");
    dotenv().expect("Failed to load dotenv");
    rocket::build().mount("/", routes![event::endpoint, challenge::endpoint])
}

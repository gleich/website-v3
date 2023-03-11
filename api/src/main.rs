use dotenv::dotenv;
use rocket::{self, launch, routes, Config};
use tracing::{info, Level};
use tracing_subscriber::FmtSubscriber;

mod auth;
mod notion;
mod strava;

#[tokio::main]
pub async fn main() {
    dotenv().expect("Failed to load dotenv");
    notion::tasks::fetch_tasks()
        .await
        .expect("failed to fetch tasks");
}

// #[launch]
// async fn rocket() -> _ {
//     let subscriber = FmtSubscriber::builder()
//         .with_max_level(Level::INFO)
//         .finish();
//     tracing::subscriber::set_global_default(subscriber).expect("setting default subscriber failed");
//     info!("booted");
//     dotenv().expect("Failed to load dotenv");
//     strava::event::update()
//         .await
//         .expect("failed to do initial update on strava");
//     let mut rocket_config = rocket::custom(Config::figment().merge(("address", "0.0.0.0")));
//     rocket_config = rocket_config.mount(
//         "/strava",
//         routes![
//             strava::event::endpoint,
//             strava::challenge::endpoint,
//             strava::cache::endpoint
//         ],
//     );
//     rocket_config
// }

use std::env;

use challenge::Parameters;
use dotenv::dotenv;
use rocket::{self, launch, post, routes, serde::json::Json};
use tracing::{info, Level};
use tracing_subscriber::FmtSubscriber;

mod challenge;

#[launch]
fn rocket() -> _ {
    let subscriber = FmtSubscriber::builder()
        .with_max_level(Level::INFO)
        .finish();
    tracing::subscriber::set_global_default(subscriber).expect("setting default subscriber failed");
    info!("Booted");
    dotenv().expect("Failed to load dotenv");
    rocket::build().mount("/", routes![endpoint])
}

#[post("/?<hub>")]
pub fn endpoint(hub: Option<Parameters>) -> Json<Option<challenge::Response>> {
    dbg!(&hub);
    match hub {
        Some(v) => {
            let verify_token = env::var("VERIFY_TOKEN").unwrap_or(String::new());
            if v.verify_token != verify_token {
                info!("Received invalid verify token of {}", verify_token);
                return Json(None);
            }
            Json(Some(challenge::Response {
                challenge: v.challenge,
            }))
        }
        None => Json(None),
    }
}

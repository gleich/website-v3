use challenge::Parameters;
use dotenv::dotenv;
use rocket::{self, launch, post, routes, serde::json::Json};

mod challenge;

#[launch]
fn rocket() -> _ {
    dotenv().expect("Failed to load dotenv");
    rocket::build().mount("/", routes![endpoint])
}

#[post("/?<hub>")]
pub fn endpoint(hub: Option<Parameters>) -> Json<Option<challenge::Response>> {
    dbg!(&hub);
    match hub {
        Some(v) => Json(Some(challenge::Response {
            challenge: v.challenge,
        })),
        None => Json(None),
    }
}

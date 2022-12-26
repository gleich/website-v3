use rocket::{post, serde::json::Json};
use serde::Deserialize;

use crate::token::TokenData;

#[derive(Debug, PartialEq, Deserialize)]
pub struct Event {
    pub aspect_type: String,
    pub event_time: u32,
    pub object_id: u32,
    pub object_type: String,
    pub owner_id: u32,
    pub subscription_id: u32,
}

#[post("/", data = "<event>")]
pub fn endpoint(event: Json<Event>) {
    let client = reqwest::blocking::Client::new();
    let mut token_data = TokenData::new().expect("getting token data failed");
    token_data
        .fetch_if_needed(&client)
        .expect("fetching new token data if needed failed");
}

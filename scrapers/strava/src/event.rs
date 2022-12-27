use rocket::{post, serde::json::Json};
use serde::Deserialize;

use crate::{activities, cache, token::TokenData};

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
pub async fn endpoint(event: Json<Event>) {
    let client = reqwest::Client::new();
    let mut token_data = TokenData::new().expect("getting token data failed");
    token_data
        .fetch_if_needed(&client)
        .await
        .expect("fetching new token data if needed failed");
    let recent_activities = activities::fetch_recent(&token_data, &client)
        .await
        .expect("fetching recent activities failed");
    cache::update(recent_activities).expect("updating cache failed");
}

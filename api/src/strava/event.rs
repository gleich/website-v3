use rocket::{post, serde::json::Json};
use serde::Deserialize;

use crate::strava::{activities, cache, token::TokenData};

#[derive(Debug, PartialEq, Deserialize)]
pub struct Event {
    pub aspect_type: String,
    pub event_time: u32,
    pub object_id: u64,
    pub object_type: String,
    pub owner_id: u32,
    pub subscription_id: u32,
}

#[post("/event", data = "<event>")]
pub async fn endpoint(event: Json<Event>) {
    let client = reqwest::Client::new();
    let mut token_data = TokenData::new().expect("getting strava token data failed");
    token_data
        .fetch_if_expired(&client)
        .await
        .expect("fetching new strava token data if expired failed");
    let recent_activities = activities::fetch_recent(&token_data, &client)
        .await
        .expect("fetching strava recent activities failed");
    cache::update(recent_activities).expect("updating strava cache failed");
}

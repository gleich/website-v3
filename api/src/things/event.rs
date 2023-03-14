use rocket::{post, serde::json::Json};
use serde::{Deserialize, Serialize};
use things3::todo::Todo;

use crate::auth;

use super::cache;

#[derive(Debug, Deserialize, Serialize, PartialEq, Default, Clone)]
pub struct Event {
    pub today_todos: Vec<Todo>,
}

#[post("/", data = "<event>")]
pub fn endpoint(_token: auth::Token, event: Json<Event>) {
    cache::update(event.into_inner()).expect("updating cache of things event failed")
}

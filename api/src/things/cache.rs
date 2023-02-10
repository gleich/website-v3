use std::sync::{Arc, Mutex, MutexGuard, PoisonError};

use lazy_static::lazy_static;
use rocket::get;
use rocket::serde::json::Json;

use crate::auth;

use super::event::Event;

lazy_static! {
    static ref DATA: Arc<Mutex<Event>> = Arc::new(Mutex::new(Event::default()));
}

#[get("/cache")]
pub fn endpoint(_token: auth::Token) -> Json<Event> {
    let arc_ref = Arc::clone(&DATA);
    let data = arc_ref.lock().unwrap();
    println!("things cache endpoint hit");
    Json(data.clone())
}

pub fn update<'a>(event: Event) -> Result<(), PoisonError<MutexGuard<'a, Event>>> {
    let mut changer = DATA.lock()?;
    *changer = event;
    Ok(())
}

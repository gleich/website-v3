use rocket::{serde::Serialize, FromForm};

#[derive(Debug, PartialEq, FromForm)]
pub struct Parameters<'r> {
    pub mode: &'r str,
    pub verify_token: &'r str,
    pub challenge: &'r str,
}

#[derive(Debug, Serialize)]
pub struct Response<'r> {
    pub challenge: &'r str,
}

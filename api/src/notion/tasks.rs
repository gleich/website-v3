use std::{env, str::FromStr};

use anyhow::{Context, Result};
use chrono::{DateTime, Utc};
use notion::{
    ids::{AsIdentifier, DatabaseId},
    models::{
        search::{
            DatabaseQuery, DateCondition, Filter, FilterCondition, FilterValue, PropertyCondition,
            SelectCondition,
        },
        Database,
    },
};
use rocket::data;
use serde::{self, Serialize};

use super::raw;

// #[derive(Debug, Clone, Serialize)]
// #[serde(rename_all = "camelCase")]
// pub struct Task {
//     pub name: String,
//     pub created_time: DateTime<Utc>,
//     pub last_edited_time: DateTime<Utc>,
//     pub due_date: Option<DateTime<Utc>>,
//     pub date: Option<DateTime<Utc>>,
//     pub status: String,
//     pub minor_topic: Option<String>,
//     pub major_topic: Option<String>,
// }

pub async fn fetch_tasks() -> Result<()> {
    let client = notion::NotionApi::new(env::var("NOTION_API_KEY")?)
        .context("failed to create notion client")?;
    let filter = PropertyCondition::And(vec![
        PropertyCondition::Date(DateCondition::OnOrBefore(Utc::now())),
        PropertyCondition::Or(vec![
            PropertyCondition::Select(SelectCondition::Equals(String::from("WIP"))),
            PropertyCondition::Select(SelectCondition::Equals(String::from("Not Started"))),
        ]),
    ]);
    println!("{}", serde_json::to_string(&filter)?);
    return Ok(());

    let database = client
        .query_database(
            DatabaseId::from_str("3f9a2ec606f64bc2bb545e6b8eb3e625")?,
            DatabaseQuery {
                sorts: None,
                filter: Some(FilterCondition {
                    all: vec![
                        PropertyCondition::Date(DateCondition::OnOrBefore(Utc::now())),
                        PropertyCondition::Or(vec![
                            PropertyCondition::Select(SelectCondition::Equals(String::from("WIP"))),
                            PropertyCondition::Select(SelectCondition::Equals(String::from(
                                "Not Started",
                            ))),
                        ]),
                    ],
                }),
                paging: None,
                o,
            },
        )
        .await?;
    dbg!(database.results.len());
    Ok(())
}

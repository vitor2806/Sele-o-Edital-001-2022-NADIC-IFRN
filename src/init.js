const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

async function openDb() {
  //Open DB file
  return sqlite.open({
    filename: "./database.sqlite",
    driver: sqlite3.Database
  });
}

async function init() {
  //Connect to db
  const db = await openDb();
  //Migrate data to db
  await db.migrate({ migrationsPath: "./migrations", force: "last" });
}

init();

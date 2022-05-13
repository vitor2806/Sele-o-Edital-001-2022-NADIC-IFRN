import { NextApiRequest, NextApiResponse } from "next";
const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

async function openDb() {
  //Open DB file
  return sqlite.open({
    filename: "./database.sqlite",
    driver: sqlite3.Database
  });
}

export default async function getPolls(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await openDb();
  const polls = await db.all("select * from polls");
  res.status(200).json({ polls });
}

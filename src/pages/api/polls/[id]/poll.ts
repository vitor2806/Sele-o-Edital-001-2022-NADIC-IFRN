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
  const poll = await db.get(`select * from polls where id = ${req.query.id}`);
  const options = await db.all(
    `select * from options where poll_id = ${req.query.id}`
  );

  const votes = await db.all(
    `select option_id, count(option_id) FROM votes WHERE poll_id = ${req.query.id} GROUP BY option_id`
  );
  res.status(200).json({ poll, options, votes });
}

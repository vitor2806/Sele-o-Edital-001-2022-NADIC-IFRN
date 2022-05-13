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

export default async function setVote(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await openDb();
  const vote = req.body["vote-button"];
  const option = await db.get(`select * from options where name = '${vote}'`);
  if (option.name) {
    await db.run(
      `INSERT INTO votes (cpf, poll_id, option_id) VALUES (${req.body.cpf}, ${req.query.id}, ${option.id})`
    );
    res.redirect("/");
  }
}

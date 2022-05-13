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
export default async function createPoll(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await openDb();
  const data = req.body;
  let options = [];

  for (let prop in data) {
    if (prop.includes("option")) {
      options.push(data[prop]);
    }
  }

  if (req.method === "POST") {
    await db.run(`
        INSERT INTO polls (name, expires_at) VALUES ('${data.name}', '${data.expire}')
    `);
    const poll_id = await db.get(`SELECT id FROM polls ORDER BY id DESC`);
    options = options.map(element => `("${element}", ${poll_id.id})`);
    await db.run(
      `INSERT INTO options (name, poll_id) VALUES ${options.join(",")}`
    );
  }

  res.status(200).redirect("/");
}

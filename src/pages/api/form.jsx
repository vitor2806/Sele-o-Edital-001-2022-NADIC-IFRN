const Poll = require("../db/Poll");

export default async function save(req, res) {
  await Poll.create({
    name: req.body.name,
    created_at: Date.now(),
    expires: req.body.expires
  });
  return res.redirect("/");
}

const Database = require("./config");

module.exports = {
  async get() {
    const db = await Database();

    const data = await db.all(`SELECT * FROM polls`);

    await db.close();

    return data.map(poll => {
      return {
        name: poll.name,
        created_at: poll.created_at,
        expire: poll.expire
      };
    });
  },

  async create(newPoll) {
    const db = await Database();

    await db.run(`INSERT INTO polls (
          name,
          created_at,
          expire
      ) VALUES (
          "${newPoll.name}",
          ${newPoll.created_at},
          ${newPoll.expires}
      )`);

    await db.close();
  }
};

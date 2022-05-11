const Database = require("./config");

const Db = {
  async init() {
    const db = await Database();
    await db.exec(`
        CREATE TABLE polls (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            expire DATE,
            created_at DATETIME,
            votes INT
        )
    `);

    await db.run(`
        INSERT INTO polls ( name,
            expire,
            created_at
        ) VALUES (
            "Reitor do Campus",
            "2022-05-20",
            "1652288321529"
        )
    `);

    await db.close();
  }
};

Db.init();

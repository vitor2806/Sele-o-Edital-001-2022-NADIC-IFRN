-- Up 

CREATE TABLE polls (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    created_at DATETIME NOT NULL,
    expires_at DATE NOT NULL
);

CREATE TABLE options (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    poll_id INTEGER REFERENCES polls(id) NOT NULL,
    name TEXT NOT NULL,
    votes INTEGER
);

-- Down

DROP TABLE polls;
DROP TABLE options;
-- Up 

CREATE TABLE polls (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    expires_at DATE NOT NULL
);

CREATE TABLE options (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    poll_id INTEGER REFERENCES polls(id) NOT NULL,
    name TEXT NOT NULL
);

CREATE TABLE votes (
    id INTEGER PRIMARY KEY, 
    cpf INTEGER NOT NULL,
    poll_id INTEGER REFERENCES polls(id) NOT NULL,
    option_id INTEGER REFERENCES options(id) NOT NULL
);

-- Down

DROP TABLE polls;
DROP TABLE options;
DROP TABLE votes
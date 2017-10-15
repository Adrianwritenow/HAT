\c hatDb

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  password TEXT,
  username TEXT,
  email TEXT,
  auth_token TEXT
);

CREATE TABLE snapshots (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id),
  snap_Time TIMESTAMP,
  level TEXT
);

CREATE TABLE symptoms (
  id SERIAL PRIMARY KEY,
  description TEXT,
  levelGrade TEXT
);

CREATE TABLE snapshotSymptoms (
  id SERIAL PRIMARY KEY,
  snapshot_id INTEGER REFERENCES snapshots(id),
  symptom_id INTEGER REFERENCES symptoms(id)
);

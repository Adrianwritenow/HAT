DROP DATABASE IF EXISTS hatDb;
CREATE DATABASE hatDb;

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

INSERT INTO snapshots( user_id, snap_Time, level)VALUES('1','2017-8-13T12:53:33.000Z',73);
INSERT INTO snapshots( user_id, snap_Time, level)VALUES('1','2017-7-13T12:53:33.000Z',63);
INSERT INTO snapshots( user_id, snap_Time, level)VALUES('1','2017-6-13T12:53:33.000Z',85);

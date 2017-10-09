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
  snap_Time TIMESTAMP
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

INSERT INTO symptoms( description, levelGrade)VALUES('Sweating','LOW');
INSERT INTO symptoms( description, levelGrade)VALUES('Nervousnes, Shakiness and Weakness','LOW');
INSERT INTO symptoms( description, levelGrade)VALUES('Extreme Hunger','LOW');
INSERT INTO symptoms( description, levelGrade)VALUES('Slight Nausea','LOW');
INSERT INTO symptoms( description, levelGrade)VALUES('Dizziness','*LOW*');
INSERT INTO symptoms( description, levelGrade)VALUES('Fast Heartbeat and Anxiousnes','LOW');

INSERT INTO symptoms( description, levelGrade)VALUES('Blurred Vision','LOW/HIGH');
INSERT INTO symptoms( description, levelGrade)VALUES('Headache','LOW/HIGH');

INSERT INTO symptoms( description, levelGrade)VALUES('Increased Thirst','*HIGH*');
INSERT INTO symptoms( description, levelGrade)VALUES('Trouble Concentraiting','HIGH');
INSERT INTO symptoms( description, levelGrade)VALUES('Frequent Urination','*HIGH*');
INSERT INTO symptoms( description, levelGrade)VALUES('Fatigue','HIGH');
INSERT INTO symptoms( description, levelGrade)VALUES('Weight Loss','HIGH');

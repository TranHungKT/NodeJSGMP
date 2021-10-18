CREATE TABLE IF NOT EXISTS Users (
  id VARCHAR UNSIGNED PRIMARY KEY,
  login VARCHAR NOT NULL,
  password VARCHAR(255) NOT NULL,
  age INTEGER,
  isDeleted BIT
);

INSERT INTO Users
VALUES ('1','hung@gmail.com','12345678',22, 0)

INSERT INTO Users
VALUES ('2','hung1@gmail.com','12345678',22, 0)
INSERT INTO Users
VALUES ('3','hung2@gmail.com','12345678',22, 0)
INSERT INTO Users
VALUES ('4','hung3@gmail.com','12345678',22, 0)
INSERT INTO Users
VALUES ('5','hung4@gmail.com','12345678',22, 0)
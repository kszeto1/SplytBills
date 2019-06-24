DROP DATABASE IF EXISTS splytBills;

CREATE DATABASE splytBills;

USE splytBills;

-- CREATE TABLE items (
--   id int NOT NULL AUTO_INCREMENT,
--   quantity integer NOT NULL,
--   description varchar(50) NOT NULL,
--   PRIMARY KEY (ID)
-- );

CREATE TABLE debt (
  debt_id INT NOT NULL AUTO_INCREMENT,
  description VARCHAR(20) NOT NULL,
  total INT NOT NULL,
  amountOwed INT NOT NULL,
  borrower VARCHAR(40) NOT NULL,
  PRIMARY KEY (debt_id)
);

CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(40) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE user_debt (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  debt_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE,
  FOREIGN KEY (debt_id) REFERENCES debt (debt_id) ON DELETE CASCADE,
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

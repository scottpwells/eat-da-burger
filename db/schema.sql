### Schema

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE Burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devour BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
###
-- Schema

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
    id int NOT NULL
    AUTO_INCREMENT,
    burgerName varchar
    (50) NOT NULL,
    isDevoured BOOLEAN DEFAULT false,
    PRIMARY KEY
    (id)
);

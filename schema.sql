DROP DATABASE IF EXISTS treats;

CREATE DATABASE treats;

USE treats;

CREATE TABLE donuts (
    id int AUTO_INCREMENT PRIMARY KEY,
    name text,
    filling text,
    qty int

)
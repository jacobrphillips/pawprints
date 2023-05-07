DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS pets CASCADE;


CREATE TABLE users (
    id serial PRIMARY KEY,
    name varchar(50),
    email varchar(50)
);

CREATE TABLE pets (
    id serial PRIMARY KEY,
    name varchar(50),
    type varchar(50),
    breed varchar(50),
    colour varchar(50),
    age integer,
    weight integer,
    gender varchar(10),
    image_url varchar(255)
);
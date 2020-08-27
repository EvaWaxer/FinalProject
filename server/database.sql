CREATE DATABASE Final_Project;

--CREATE EXTENSION pgcrypto;

CREATE TABLE Users
(
    user_id integer NOT NULL,
    password TEXT NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE StudentPersonalInfo
(
    id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(255) NOT NULL,
    school_name VARCHAR(50),
    PRIMARY KEY (id)
);
CREATE TABLE SchoolInfo
(
    id serial PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(255) NOT NULL,
	address_point POINT,
    total_seats int,
	open_seats int
);

/*CREATE TABLE StudentPrefernces
(
    student_id integer NOT NULL,
    school_id integer NOT NULL,
    priority smallint NOT NULL CHECK (priority >= 0),
    sibiling_num smallint NOT NULL CHECK (sibiling_num >= 0),
    distance integer CHECK (distance >=0),
    PRIMARY KEY (student_id),
    CONSTRAINT student_id FOREIGN KEY (student_id)
        REFERENCES  StudentPersonalInfo (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT school_id FOREIGN KEY (student_id)
        REFERENCES SchoolInfo (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);*/

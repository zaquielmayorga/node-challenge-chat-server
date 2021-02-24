CREATE TABLE mentors (
  id       		SERIAL PRIMARY KEY,
  name     		VARCHAR(30) NOT NULL,
  city_years     	INT,
  tech_skills  	VARCHAR(120),
  address    	VARCHAR(120)

);

INSERT INTO mentors (name, city_years, tech_skills, address) VALUES ('John Smith', 10,'javascript', '11 New Road, Glasgow');
INSERT INTO mentors (name, city_years, tech_skills, address) VALUES ('Sue Jones', 5, 'python', '120 Old Street, Glasgow');
INSERT INTO mentors (name, city_years, tech_skills, address) VALUES ('Alice Evans', 8, 'php', '3 High Road, Glasgow');
INSERT INTO mentors (name, city_years, tech_skills, address) VALUES ('Steven King', 10, 'postgresql', '19 Bed Street, Glasgow');
INSERT INTO mentors (name, city_years, tech_skills, address) VALUES ('Becky Brown', 1, 'postgresql', '12, rue des Bouchers, Glasgow');

drop table if exists studens

CREATE TABLE studens (
  id       		SERIAL PRIMARY KEY,
  name     		VARCHAR(30) NOT null unique,
  address    	VARCHAR(120),
  graduated 	boolean not null

);

INSERT INTO studens (name, address, graduated) VALUES ('Becky Brown', 'napoles caracas ', true);
INSERT INTO studens (name, address, graduated) VALUES ('Alfonso', 'Castillejos 382', TRUE);
INSERT INTO studens(name, address, graduated) VALUES ('Pedro', 'New Road 13', FALSE);
INSERT INTO studens (name, address, graduated) VALUES ('Arthur', 'Good Road 12', FALSE);
INSERT INTO studens(name, address, graduated) VALUES ('Sara', 'Parallel 12', TRUE);
INSERT INTO studens(name, address, graduated) VALUES ('Zaquiel', 'Oxford Road 1', TRUE);
INSERT INTO studens (name, address, graduated) VALUES ('Isaac', 'Rutherford Street', FALSE);
INSERT INTO studens(name, address, graduated) VALUES ('Claudia', 'Calle Valecia', FALSE);
INSERT INTO studens(name, address, graduated) VALUES ('Marta', 'Calle Madrid 13', TRUE);
INSERT INTO studens (name, address, graduated) VALUES ('Juan', 'New York Street', TRUE);
INSERT INTO studens (name, address, graduated) VALUES ('Alberto', 'Calle del Rey', FALSE);

select  * from studens where graduated = false 

drop table if exists classes

CREATE TABLE classes (
  id        SERIAL PRIMARY KEY,
  leading_mentor     INT REFERENCES mentors(id),
  topic   VARCHAR(30) unique,
  date     date not null,
  location varchar(30) not null,
  attendees   int references studens(id)
);

INSERT INTO classes(loading_mentor, topic, date, location attendees) VALUES ('1', 'javascrip', '2018-12-20', 'glasgow' );
INSERT INTO classes(loading_mentor, topic, date, location attendees) VALUES ('1', 'javascrip', '2018-12-20', 'glasgow' );
 
drop table if exists classes

CREATE TABLE course (
  id       		SERIAL PRIMARY KEY,
  topic_course	int references classes(topic),
  student_name int references studens(name),

);


create table users (
id serial primary key,
username varchar(20),
password varchar(20),
profile_pic text);


insert into users (username, password, profile_pic) values ('mread', '123', 'https://robohash.org/mac');
insert into users (username, password, profile_pic) values ('rread', '123', 'https://robohash.org/ragnhild');
insert into users (username, password, profile_pic) values ('ntread', '123', 'https://robohash.org/tano');
insert into users (username, password, profile_pic) values ('kread', '123', 'https://robohash.org/kelan');

select * from users;

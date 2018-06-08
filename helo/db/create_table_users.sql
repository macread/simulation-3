create table users (
id serial primary key,
username varchar(20),
password varchar(20),
profile_pic text);

insert into users (username, password, profile_pic) values ('mread', '123', 'pict url 1');
insert into users (username, password, profile_pic) values ('rread', '123', 'pict url 2');
insert into users (username, password, profile_pic) values ('ntread', '123', 'pict url 3');
insert into users (username, password, profile_pic) values ('kread', '123', 'pict url 4');

select * from users;
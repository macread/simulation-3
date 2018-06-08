create table posts(
id serial primary key,
title varchar(45),
img text,
content text,
author_id INTEGER
);

insert into posts (title, img, content, author_id) values ('Macs Post Two', 'https://robohash.org/mac?set=set2', 'This is my first post', 1);
insert into posts (title, img, content, author_id) values ('Ragnhilds Post One', 'https://robohash.org/ragnhild?set=set2', 'This is my first post', 2);
insert into posts (title, img, content, author_id) values ('Tanos Post One', 'https://robohash.org/tano?set=set2', 'This is my first post', 3);
insert into posts (title, img, content, author_id) values ('Tanos Post Two', 'https://robohash.org/tano?set=set2', 'This is my second post', 3);
insert into posts (title, img, content, author_id) values ('Tanos Post Three', 'https://robohash.org/tano?set=set2', 'This is my third post', 3);
insert into posts (title, img, content, author_id) values ('Kelans Post One', 'https://robohash.org/kelan?set=set2', 'This is my first post', 4);


select * from posts;
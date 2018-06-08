SELECT posts.title, users.username, users.profile_pic FROM users
JOIN posts ON posts.author_id = users.id
WHERE users.id <> $1
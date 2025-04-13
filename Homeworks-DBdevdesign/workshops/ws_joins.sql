SELECT m.title, d.first_name, d.last_name FROM movies m
JOIN directors d
ON m.director_id = d.director_id;

SELECT m.title, g.name FROM movies m
JOIN movie_genres mg ON m.movie_id = mg.movie_id
JOIN genres g ON mg.genre_id = g.genre_id
GROUP BY m.title, g.name;

SELECT m.title, a.first_name, a.last_name FROM movies m
JOIN cast_members cm ON m.movie_id = cm.movie_id
JOIN actors a ON cm.actor_id = a.actor_id
GROUP BY m.title, a.first_name, a.last_name
ORDER BY m.title ASC

SELECT m.title, r.review_text FROM movies m
JOIN reviews r
ON m.movie_id = r.movie_id;

SELECT m.title, pc.name FROM movies m
JOIN movie_production_companies mpc ON m.movie_id = mpc.movie_id
JOIN production_companies pc ON mpc.company_id = pc.company_id
GROUP BY m.title, pc.name
ORDER BY m.title ASC;


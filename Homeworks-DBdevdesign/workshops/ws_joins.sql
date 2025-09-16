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

SELECT m.title, ml.city FROM movies m
JOIN movie_locations ml
ON m.movie_id=ml.movie_id;

SELECT a.first_name, a.last_name, aw.name FROM actors a
JOIN actor_awards aa ON a.actor_id=aa.actor_id
JOIN awards aw ON aa.award_id=aw.award_id
GROUP BY a.first_name, a.last_name, aw.name
ORDER BY a.first_name ASC

SELECT m.title, mr.domestic_revenue, mr.international_revenue FROM movies m
JOIN movie_revenues mr ON m.movie_id=mr.movie_id

SELECT u.username, m.title, r.review_text FROM users u
JOIN reviews r ON u.user_id=r.user_id
JOIN movies m ON m.movie_id=r.movie_id
GROUP BY u.username, m.title, r.review_text
ORDER BY u.username ASC

SELECT m.title, COUNT(uw.movie_id) as number_of_watchlists FROM movies m 
JOIN user_watchlist uw ON uw.movie_id=m.movie_id
GROUP BY m.title, uw.movie_id





-- filtering
SELECT * FROM movies WHERE release_date>'31-12-2018' AND release_date<'01-01-2020';
SELECT * FROM actors WHERE nationality='British';
SELECT * FROM movies WHERE rating='PG-13';
SELECT * FROM directors WHERE nationality='American';
SELECT * FROM movies WHERE duration_minutes>'150';
SELECT * FROM actors WHERE last_name='Pitt';
SELECT * FROM movies WHERE budget>'1000000.00';
SELECT * FROM reviews WHERE rating='5';
SELECT * FROM movies WHERE language='English';
SELECT * FROM production_companies WHERE headquarters ILIKE '%California%';
-- joining
SELECT m.title, d.first_name, d.last_name FROM movies m JOIN directors d ON m.director_id=d.director_id;

SELECT a.first_name, a.last_name, m.title FROM cast_members cm
JOIN actors a ON cm.actor_id=a.actor_id
JOIN movies m ON cm.movie_id=m.movie_id
GROUP BY a.first_name, a.last_name, m.title;

SELECT m.title, g.name FROM movie_genres mg
JOIN movies m ON mg.movie_id=m.movie_id
JOIN genres g ON mg.genre_id=g.genre_id
GROUP BY m.title, g.name;

SELECT u.username, m.title, r.review_text FROM reviews r 
JOIN users u ON r.user_id=u.user_id
JOIN movies m ON r.movie_id=m.movie_id
GROUP BY u.username, m.title, r.review_text;

SELECT m.title, ml.country, ml.city FROM movie_locations ml JOIN movies m ON ml.movie_id=m.movie_id;

SELECT m.title, pc.name FROM movie_production_companies mpc
JOIN production_companies pc ON mpc.company_id=pc.company_id
JOIN movies m ON mpc.movie_id=m.movie_id
GROUP BY m.title, pc.name;

SELECT a.first_name, a.last_name, aw.name FROM actor_awards aa
JOIN actors a ON aa.actor_id=a.actor_id
JOIN awards aw ON aa.award_id=aw.award_id
GROUP BY a.first_name, a.last_name, aw.name;

SELECT m.title, aw.name FROM movie_awards ma
JOIN movies m ON ma.movie_id=m.movie_id
JOIN awards aw ON ma.award_id=aw.award_id
GROUP BY m.title, aw.name;

SELECT u.username, m.title FROM user_watchlist uw 
JOIN users u ON uw.user_id=u.user_id
JOIN movies m ON uw.movie_id=m.movie_id
GROUP BY u.username, m.title;

SELECT m.title, mr.domestic_revenue, mr.international_revenue FROM movie_revenues mr JOIN movies m ON mr.movie_id=m.movie_id
-- constrained joining
SELECT m.title, m.rating, d.first_name, d.last_name FROM movies m
JOIN directors d ON m.director_id=d.director_id
WHERE m.rating='R'
GROUP BY m.title, m.rating, d.first_name, d.last_name;

SELECT a.first_name, a.last_name, a.nationality, m.title FROM cast_members cm
JOIN movies m ON cm.movie_id=m.movie_id
JOIN actors a ON cm.actor_id=a.actor_id
WHERE a.nationality='American'
GROUP BY a.first_name, a.last_name, a.nationality, m.title;

SELECT m.title, pc.name, m.budget FROM movie_production_companies mpc
JOIN movies m ON mpc.movie_id=m.movie_id
JOIN production_companies pc ON mpc.company_id=pc.company_id
WHERE m.budget>100000000.00
GROUP BY m.title, pc.name, m.budget;

SELECT m.title, ml.country, ml.city, d.first_name, d.last_name FROM movie_locations ml
JOIN movies m ON ml.movie_id=m.movie_id
JOIN directors d ON m.director_id=d.director_id
WHERE ml.city='Tokyo'
GROUP BY m.title, ml.country, ml.city, d.first_name, d.last_name;

SELECT m.title, g.name, a.first_name, a.last_name FROM movie_genres mg
JOIN movies m ON mg.movie_id=m.movie_id
JOIN genres g ON mg.genre_id=g.genre_id
JOIN cast_members cm ON mg.movie_id=cm.movie_id
JOIN actors a ON cm.actor_id=a.actor_id
WHERE g.name='Horror'
GROUP BY m.title, g.name, a.first_name, a.last_name;

SELECT m.title, m.rating, r.rating, u.username FROM reviews r
JOIN movies m ON r.movie_id = m.movie_id
JOIN users u ON r.user_id = u.user_id
WHERE r.rating=9
GROUP BY m.title, m.rating, r.rating, u.username;

SELECT * FROM movies m
JOIN directors d ON m.director_id=d.director_id
WHERE d.nationality='British'

SELECT m.title, m.duration_minutes, g.name FROM movie_genres mg
JOIN genres g ON mg.genre_id=g.genre_id
JOIN movies m ON mg.movie_id=m.movie_id
WHERE m.duration_minutes>150
GROUP BY m.title, m.duration_minutes, g.name;

SELECT a.first_name, a.last_name, aw.category, aw.award_type FROM actor_awards aa
JOIN actors a ON aa.actor_id=a.actor_id
JOIN awards aw ON aa.award_id=aw.award_id
WHERE aw.award_type = 'Oscar'
GROUP BY a.first_name, a.last_name, aw.category, aw.award_type;













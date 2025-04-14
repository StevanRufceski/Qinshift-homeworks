-- counting
SELECT COUNT(*) as total_movies FROM movies;
SELECT nationality, COUNT(*) as actors_per_nationality FROM actors
GROUP BY nationality;

SELECT director_id, COUNT(*) as movies_per_director FROM movies
GROUP BY director_ID;

SELECT g.name, COUNT(m.movie_id) AS movies_per_genre FROM movie_genres mg
JOIN movies m ON mg.movie_id=m.movie_id
JOIN genres g ON mg.genre_id=g.genre_id
GROUP BY g.name;

SELECT m.title, COUNT(r.review_id) AS reviews_per_movie FROM reviews r
JOIN movies m ON r.movie_id=m.movie_id
GROUP BY m.title;
--finding
SELECT g.name, MAX(m.budget) AS highest_budget_genre FROM movie_genres mg
JOIN genres g ON mg.genre_id=g.genre_id
JOIN movies m ON mg.movie_id=m.movie_id
GROUP BY g.name;
-- calculating
SELECT g.name, TRUNC(AVG(m.duration_minutes), 2) as average_duration FROM movie_genres mg
JOIN movies m ON mg.movie_id=m.movie_id
JOIN genres g ON mg.genre_id=g.genre_id
GROUP BY g.name;

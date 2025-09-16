SELECT * FROM actors WHERE last_name = 'DiCaprio';
SELECT * FROM directors WHERE first_name ILIKE 'M%';
SELECT * FROM actors WHERE nationality = 'Australian';

SELECT * FROM directors d
INNER JOIN movies m
ON d.director_id = m.director_id
WHERE d.nationality = 'American' AND m.rating = 'R';

SELECT * FROM actors WHERE birth_date > '1980-01-01';
SELECT * FROM movies WHERE rating = 'R';
SELECT * FROM movies WHERE plot_summary ILIKE '%deadly%';




SELECT d.first_name||' '||d.last_name||' '||m.title AS concatanation FROM directors d JOIN movies m ON m.director_id=d.director_id;

SELECT upper(g.name) as uppering FROM movie_genres mg JOIN genres g ON g.genre_id=mg.genre_id;

SELECT left(m.title,10) FROM movies m;




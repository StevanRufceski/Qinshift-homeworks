-- Find all genres that have more than 3 movies with a rating of 'R'
SELECT m.title, m.rating, COUNT(m.movie_id) AS movies_per_genre FROM movie_genres mg
JOIN movies m ON mg.movie_id=m.movie_id
JOIN genres g ON mg.genre_id=g.genre_id
WHERE m.rating='R'
GROUP BY m.title, m.rating
HAVING COUNT(m.movie_id) > 1;
-- Find directors who have made movies with total revenue over 500 million and have directed at least 2 movies
SELECT d.first_name, d.last_name, SUM(mr.domestic_revenue)+SUM(mr.international_revenue) total_revenue, COUNT (m.movie_id) as number_of_movies FROM movie_revenues mr
JOIN movies m ON mr.movie_id=m.movie_id
JOIN directors d ON m.director_id=d.director_id
GROUP BY d.first_name, d.last_name
HAVING COUNT (m.movie_id) > 0 AND SUM(mr.domestic_revenue)+SUM(mr.international_revenue) > 500000000;
-- Find actors who have appeared in more than 2 different genres and have won at least 1 award
SELECT a.first_name, a.last_name, COUNT(DISTINCT g.genre_id) total_genres, COUNT(DISTINCT aa.award_id) total_awards  FROM actors a
JOIN actor_awards aa ON a.actor_id=aa.actor_id
JOIN cast_members cm ON cm.actor_id=a.actor_id
JOIN movie_genres mg ON cm.movie_id=mg.movie_id
JOIN genres g ON mg.genre_id=g.genre_id 
GROUP BY a.first_name, a.last_name
HAVING COUNT (DISTINCT g.genre_id) > 0 AND COUNT(DISTINCT aa.award_id) > 0
-- Find movies that have received more than 3 reviews with an average rating above 7
-- Find production companies that have invested more than 100 million in movies released after 2015
-- Find countries where more than 2 movies were filmed with a total budget exceeding 150 million
-- Find genres where the average movie duration is over 120 minutes and at least one movie has won an Oscar
-- Find years where more than 3 movies were released with an average budget over 50 million
-- Find actors who have played lead roles in more than 2 movies with a total revenue exceeding 200 million
-- Create a view that shows top-rated movies. Include: movie title, average rating, review count, director name
CREATE VIEW testview AS
SELECT a.first_name, a.last_name, COUNT(DISTINCT g.genre_id) total_genres, COUNT(DISTINCT aa.award_id) total_awards  FROM actors a
JOIN actor_awards aa ON a.actor_id=aa.actor_id
JOIN cast_members cm ON cm.actor_id=a.actor_id
JOIN movie_genres mg ON cm.movie_id=mg.movie_id
JOIN genres g ON mg.genre_id=g.genre_id 
GROUP BY a.first_name, a.last_name
HAVING COUNT (DISTINCT g.genre_id) > 0 AND COUNT(DISTINCT aa.award_id) > 0
SELECT * FROM testview
-- Create a view for movie financial performance. Include: movie title, budget, total revenue, profit, ROI
-- Create a view for actor filmography. Include: actor name, movie count, genre list, total revenue
-- Create a view for genre statistics. Include: genre name, movie count, average rating, total revenue
-- Create a view for production company performance. Include: company name, movie count, total investment, total revenue
-- FILTERING BY GROUPED DATA
-- Find all genres that have more than 3 movies with a rating of 'R'
SELECT g.name, m.rating, COUNT(m.movie_id) AS movies_per_genre FROM movie_genres mg
JOIN movies m ON m.movie_id=mg.movie_id
JOIN genres g ON g.genre_id=mg.genre_id
WHERE m.rating='R'
GROUP BY g.name, m.rating
HAVING COUNT(m.movie_id) > 1
-- Find directors who have made movies with total revenue over 500 million and have directed at least 2 movies
SELECT d.first_name, d.last_name, SUM(mr.domestic_revenue)+SUM(mr.international_revenue) total_revenue, COUNT (m.movie_id) as number_of_movies FROM movie_revenues mr
JOIN movies m ON m.movie_id=mr.movie_id
JOIN directors d ON d.director_id=m.director_id
GROUP BY d.first_name, d.last_name
HAVING COUNT (m.movie_id) > 0 AND SUM(mr.domestic_revenue)+SUM(mr.international_revenue) > 50000000;
-- Find actors who have appeared in more than 2 different genres and have won at least 1 award
SELECT a.first_name, a.last_name, COUNT(DISTINCT g.genre_id) total_genres, COUNT(DISTINCT aa.award_id) total_awards  FROM actors a
JOIN actor_awards aa ON aa.actor_id=a.actor_id
JOIN cast_members cm ON cm.actor_id=a.actor_id
JOIN movie_genres mg ON mg.movie_id=cm.movie_id
JOIN genres g ON mg.genre_id=g.genre_id 
GROUP BY a.first_name, a.last_name
HAVING COUNT (DISTINCT g.genre_id) > 0 AND COUNT(DISTINCT aa.award_id) > 0
-- Find movies that have received more than 3 reviews with an average rating above 7
SELECT m.title, COUNT(DISTINCT r.review_id) as number_of_rating7_reviews_per_movie FROM reviews r
JOIN movies m ON m.movie_id=r.movie_id
WHERE r.rating > 7
GROUP BY m.title
HAVING COUNT(DISTINCT r.review_id)>1;
-- Find production companies that have invested more than 100 million in movies released after 2015
SELECT pc.name, SUM(mpc.investment_amount) as total_investment_in_movies, COUNT(DISTINCT m.movie_id) AS number_of_movies FROM movie_production_companies mpc
JOIN movies m ON m.movie_id=mpc.movie_id
JOIN production_companies pc ON pc.company_id=mpc.company_id
WHERE m.release_date > '31-12-2018'
GROUP BY pc.name
HAVING SUM(mpc.investment_amount) > 10000000;
-- Find countries where more than 2 movies were filmed with a total budget exceeding 150 million
SELECT ml.country, COUNT(m.movie_id) as number_of_movies, SUM(m.budget) as movies_total_budget FROM movie_locations ml
JOIN movies m ON m.movie_id=ml.movie_id
GROUP BY ml.country
HAVING COUNT(m.movie_id)>2 AND SUM(m.budget)>150000000;
-- Find genres where the average movie duration is over 120 minutes and at least one movie has won an Oscar
SELECT g.name, AVG(m.duration_minutes) AS avg_duration, COUNT(a.award_id) AS number_of_oscars FROM movie_awards ma
JOIN movies m ON m.movie_id=ma.movie_id
JOIN awards a ON a.award_id=ma.award_id
JOIN movie_genres mg ON mg.movie_id=m.movie_id
JOIN genres g ON g.genre_id=mg.genre_id
WHERE a.award_type='Oscar'
GROUP BY g.name
HAVING AVG(m.duration_minutes)>120
ORDER BY g.name ASC;
-- Find years where more than 3 movies were released with an average budget over 50 million
SELECT EXTRACT(YEAR FROM m.release_date) AS year, COUNT(m.movie_id) AS movie_count, AVG(m.budget) AS avg_budget FROM movies m
GROUP BY EXTRACT(YEAR FROM m.release_date)
HAVING COUNT(m.movie_id) > 0 AND AVG(m.budget) > 50000000;
-- Find actors who have played lead roles in more than 2 movies with a total revenue exceeding 200 million
SELECT a.first_name, a.last_name, COUNT(m.movie_id) AS number_of_lead_roles, AVG(mr.domestic_revenue+mr.international_revenue) AS total_revenue FROM cast_members cm
JOIN actors a ON a.actor_id=cm.actor_id
JOIN movies m ON m.movie_id=cm.movie_id
JOIN movie_revenues mr ON mr.movie_id=m.movie_id
WHERE cm.is_lead_role = true
GROUP BY a.first_name, a.last_name
HAVING COUNT(m.movie_id)>2 AND AVG(mr.domestic_revenue+mr.international_revenue)>200000000;

-- VIEWS
-- Create a view that shows top-rated movies. Include: movie title, average rating, review count, director name
CREATE OR REPLACE VIEW rated_movies AS
SELECT m.title, m.rating, COUNT(r.review_id) AS number_of_reviews, d.first_name AS director_name, d.last_name AS director_surname FROM movies m
JOIN directors d ON d.director_id=m.director_id
JOIN reviews r ON r.movie_id=m.movie_id
GROUP BY m.title, m.rating, d.first_name, d.last_name
ORDER BY m.rating ASC
SELECT * FROM rated_movies;
-- Create a view for movie financial performance. Include: movie title, budget, total revenue, profit, ROI
CREATE OR REPLACE VIEW movie_financial_performance AS
SELECT 
m.title, 
m.budget,
mr.domestic_revenue,
mr.international_revenue,
mr.domestic_revenue+mr.international_revenue AS total_revenue,
mpc.investment_amount,
mr.domestic_revenue+mr.international_revenue-mpc.investment_amount AS profit,
TRUNC((mr.domestic_revenue+mr.international_revenue)*100/mpc.investment_amount,2)||'%' AS ROI
FROM movies m
JOIN movie_production_companies mpc ON mpc.movie_id=m.movie_id
JOIN movie_revenues mr ON mr.movie_id=m.movie_id
GROUP BY m.title, m.budget, mr.domestic_revenue, mr.international_revenue, mpc.investment_amount
ORDER BY m.title ASC
SELECT * FROM movie_financial_performance;
-- Create a view for actor filmography. Include: actor name, movie count, genre list, total revenue
CREATE OR REPLACE VIEW actor_filmography AS
SELECT a.first_name, a.last_name, 
COUNT(DISTINCT m.movie_id) AS total_movies, 
COUNT(DISTINCT g.genre_id) AS total_genres,  
SUM(mr.domestic_revenue) AS total_domestic_revenue, 
SUM(mr.international_revenue) AS total_international_revenue, 
SUM(mr.domestic_revenue+mr.international_revenue) AS total_revenue 
FROM actors a
JOIN cast_members cm ON cm.actor_id=a.actor_id
JOIN movies m ON m.movie_ID=cm.movie_id
JOIN movie_revenues mr ON mr.movie_id=m.movie_id
JOIN movie_genres mg ON mg.movie_id=mr.movie_id
JOIN genres g ON g.genre_id=mg.genre_id
GROUP BY a.first_name, a.last_name
ORDER BY a.first_name
SELECT * FROM actor_filmography;
-- Create a view for genre statistics. Include: genre name, movie count, average rating, total revenue
CREATE OR REPLACE VIEW genre_statistics AS
SELECT g.name, 
COUNT(DISTINCT m.movie_id) AS number_of_movies, 
TRUNC(AVG(r.rating),2) AS review_avg_rating, 
SUM(mr.domestic_revenue) AS total_domestic_revenue, 
SUM(mr.international_revenue) AS total_international_revenue, 
SUM(mr.domestic_revenue+mr.international_revenue) AS total_revenue 
FROM genres g
JOIN movie_genres mg ON mg.genre_id=g.genre_id
JOIN movies m ON m.movie_id=mg.movie_id
JOIN movie_revenues mr ON mr.movie_id=m.movie_id
JOIN reviews r ON r.movie_id=m.movie_id
GROUP BY g.name
ORDER BY g.name
SELECT * FROM genre_statistics;
-- Create a view for production company performance. Include: company name, movie count, total investment, total revenue
CREATE OR REPLACE VIEW production_company_performance AS
SELECT pc.name, 
COUNT(DISTINCT m.movie_id) AS number_of_movies, 
SUM(mpc.investment_amount) AS total_investment, 
SUM(mr.domestic_revenue) AS total_domestic_revenue, 
SUM(mr.international_revenue) AS total_international_revenue, 
SUM(mr.domestic_revenue+mr.international_revenue) AS total_revenue 
FROM production_companies pc
JOIN movie_production_companies mpc ON mpc.company_id=pc.company_id
JOIN movies m ON m.movie_id=mpc.movie_id
JOIN movie_revenues mr ON mr.movie_id=m.movie_id
GROUP BY pc.name
ORDER BY pc.name
SELECT * FROM production_company_performance;
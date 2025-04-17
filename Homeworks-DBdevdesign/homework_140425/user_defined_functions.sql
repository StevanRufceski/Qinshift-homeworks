-- WORKSHOP
-- Declare function (calculate_movie_age) to calculate movie age in years
CREATE OR REPLACE FUNCTION calculate_movie_age (m_title VARCHAR(50))
RETURNS TABLE (age INTEGER)
LANGUAGE plpgsql
AS
$$
DECLARE
age INTEGER;
BEGIN
	RETURN
	QUERY
	SELECT EXTRACT(YEAR FROM CURRENT_DATE)::INT-EXTRACT(YEAR FROM m.release_date)::INT AS age FROM movies m
	WHERE m.title = calculate_movie_age.m_title;
END;
$$
SELECT m.title, m.release_date, calculate_movie_age(m.title) AS age FROM movies m
-- Declare function (format_full_name) to format full name (combines first and last name with proper spacing)
CREATE OR REPLACE FUNCTION format_full_name (a_id INTEGER)
RETURNS TABLE (full_name TEXT)
LANGUAGE plpgsql
AS
$$
DECLARE
full_name TEXT;
BEGIN 
	RETURN QUERY
	SELECT a.first_name||' '||a.last_name AS full_name FROM actors a
	WHERE a.actor_id=format_full_name.a_id;
END;
$$
SELECT a.first_name, a.last_name, format_full_name(a.actor_id) AS full_name FROM actors a
-- Declare function to (calculate_profit) to calculate movie profit
CREATE OR REPLACE FUNCTION calculate_profit (m_title VARCHAR(50))
RETURNS TABLE (total_revenue DECIMAL(10,2), profit DECIMAL(10,2))
LANGUAGE plpgsql
AS
$$
DECLARE
profit DECIMAL(10,2);
total_revenue DECIMAL(10,2);
BEGIN
	RETURN
	QUERY
	SELECT mr.domestic_revenue+mr.international_revenue AS total_revenue, mr.domestic_revenue+mr.international_revenue-m.budget AS profit FROM movies m
	JOIN movie_revenues mr ON mr.movie_id=m.movie_id
	WHERE m.title = calculate_profit.m_title
	GROUP BY m.title, m.budget, mr.domestic_revenue, mr.international_revenue; 
END;
$$
SELECT m.title, m.budget, cp.total_revenue, cp.profit FROM movies m
JOIN LATERAL calculate_profit(m.title) cp ON true;
-- HOMEWORK 4
-- Get movies by rating (table-valued function). Usage example: SELECT * FROM get_movies_by_rating('PG-13');
CREATE OR REPLACE FUNCTION get_all_movies_by_rating(rating VARCHAR)
RETURNS TABLE (m_rating VARCHAR, m_title VARCHAR)
LANGUAGE plpgsql
AS
$$
DECLARE
m_rating VARCHAR;
m_title VARCHAR;
BEGIN 
	RETURN QUERY
	SELECT m.rating::VARCHAR AS m_rating, m.title::VARCHAR AS m_title FROM movies m
	WHERE m.rating::VARCHAR=get_all_movies_by_rating.rating
	GROUP BY m.rating, m.title;
END;
$$
SELECT * FROM get_all_movies_by_rating('PG-13')
-- Get director's filmography (table-valued function). Usage example: SELECT * FROM get_director_filmography(1);
CREATE OR REPLACE FUNCTION get_director_filmography(d_id INTEGER)
RETURNS TABLE (movie VARCHAR, director TEXT)
LANGUAGE plpgsql
AS
$$
DECLARE
movie VARCHAR;
director TEXT;
BEGIN
	RETURN QUERY
		SELECT m.title AS movie, d.first_name||' '||d.last_name AS director FROM movies m
		JOIN directors d ON d.director_id=m.director_id
		WHERE m.director_id=get_director_filmography.d_id
		GROUP BY m.title, d.first_name, d.last_name;
END;
$$;
SELECT * FROM get_director_filmography(4);
SELECT * FROM movies m JOIN directors d ON d.director_id=m.director_id;
-- Calculate actor's age. Usage example: SELECT first_name, last_name, birth_date, calculate_actor_age(birth_date) as age FROM actors WHERE birth_date IS NOT NULL;
CREATE OR REPLACE FUNCTION calculate_actor_age(birth_date DATE)
RETURNS INTEGER
LANGUAGE plpgsql
AS
$$
DECLARE
age INTEGER;
BEGIN 
	if birth_date IS NULL then
	RAISE EXCEPTION 'Birth date is null';
	ELSE
	age := EXTRACT(YEAR FROM CURRENT_DATE)-EXTRACT(YEAR FROM birth_date);
	END IF;
	RETURN age;
END;
$$;
SELECT a.first_name, a.last_name, a.birth_date, calculate_actor_age(a.birth_date) as age FROM actors a
-- Check if actor has won awards. Usage example: SELECT first_name, last_name, has_won_awards(actor_id) as has_awards FROM actors;
CREATE OR REPLACE FUNCTION has_won_awards(a_id INTEGER)
RETURNS BOOLEAN
LANGUAGE plpgsql
AS
$$
DECLARE
answer BOOLEAN;
number_of_awards INTEGER;
BEGIN
	SELECT COUNT(*) INTO number_of_awards FROM actor_awards aa
	WHERE aa.actor_id = a_id;
	IF number_of_awards>0 THEN
	answer:=true;
	ELSE 
	answer:=false;
	END IF;
	RETURN answer;
END;
$$;
SELECT a.first_name, a.last_name, has_won_awards(a.actor_id) as has_awards FROM actors a
SELECT a.first_name, a.last_name, has_won_awards(a.actor_id) as has_awards, aw.name FROM actors a
JOIN actor_awards aa ON aa.actor_id=a.actor_id
JOIN awards aw ON aw.award_id=aa.award_id




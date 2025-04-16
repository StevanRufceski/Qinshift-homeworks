CREATE OR REPLACE FUNCTION calculate_movie_age (m_title VARCHAR(50))
RETURNS TABLE (title VARCHAR(50), release_date DATE, age INTEGER)
LANGUAGE plpgsql
AS
$$
DECLARE
age INTEGER;
BEGIN
	RETURN
	QUERY
	SELECT m.title, m.release_date, EXTRACT(YEAR FROM CURRENT_DATE)::INT-EXTRACT(YEAR FROM m.release_date)::INT AS age FROM movies m
	WHERE m.title = calculate_movie_age.m_title;
END;
$$
SELECT * FROM calculate_movie_age('Inception')

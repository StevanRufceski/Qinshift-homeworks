SELECT product_name FROM sales_2023
UNION
SELECT product_name FROM sales_2024;

SELECT product_name FROM sales_2023
UNION ALL
SELECT product_name FROM sales_2024;

SELECT product_name FROM sales_2023
INTERSECT
SELECT product_name FROM sales_2024;

SELECT product_name FROM sales_2023
EXCEPT
SELECT product_name FROM sales_2024;

SELECT product_name FROM sales_2023 WHERE amount > 100
UNION
SELECT product_name FROM sales_2024 WHERE amount > 100;
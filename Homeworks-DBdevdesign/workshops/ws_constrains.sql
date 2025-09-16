CREATE TABLE products (
id SERIAL PRIMARY KEY,
name VARCHAR(50),
price INTEGER CHECK (price>0),
stock INTEGER CHECK (price>0),
discounted_price INTEGER CHECK (discounted_price<price),
weight INTEGER CHECK ((weight>0) AND (weight<100))
);
SELECT * FROM products
INSERT INTO products VALUES (9, 'ime3', 25, 5, 20, 50), (10, 'ime4', 25, 5, 20, 50);

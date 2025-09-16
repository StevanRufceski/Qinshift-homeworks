CREATE TABLE users (
id INTEGER,
username VARCHAR(50),
email VARCHAR (50)
);
CREATE TABLE products (
id INTEGER,
name VARCHAR(50),
price DECIMAL (10,2)
);
INSERT INTO users VALUES
(1, 'username1', 'username1@email.com'),
(2, 'username2', 'username2@email.com');
INSERT INTO products VALUES
(11, 'productName1', 25.63),
(12, 'productName2', 100);
SELECT * FROM users;
SELECT * FROM products;
ALTER TABLE users DROP COLUMN id;
ALTER TABLE users ADD COLUMN id SERIAL PRIMARY KEY;
UPDATE users
SET id=1
WHERE username = 'username1';
UPDATE users
SET id=2
WHERE username = 'username2';
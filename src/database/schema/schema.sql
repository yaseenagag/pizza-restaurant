DROP TABLE IF EXISTS customer;
CREATE TABLE customer(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  username VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone_number VARCHAR(100) NOT NULL,
  payment VARCHAR(50)
);

DROP TABLE IF EXISTS pizza;
CREATE TABLE pizza(
  id SERIAL PRIMARY KEY,
  size VARCHAR(50) NOT NULL,
  crust VARCHAR(50) NOT NULL,
  price MONEY NOT NULL,
  discount_price MONEY NOT NULL
);

DROP TABLE IF EXISTS drink;
CREATE TABLE drink(
  id SERIAL PRIMARY KEY,
  description VARCHAR(50) NOT NULL,
  manufacturer VARCHAR(50) NOT NULL,
  supplier VARCHAR(50) NOT NULL,
  price MONEY NOT NULL
);

DROP TABLE IF EXISTS ingredient;
CREATE TABLE ingredient(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS preference;
CREATE TABLE preference(
  customer_id INTEGER NOT NULL,
  ingredient_id INTEGER NOT NULL
);

DROP TABLE IF EXISTS topping;
CREATE TABLE topping(
  pizza_id INTEGER NOT NULL,
  ingredient_id INTEGER NOT NULL
);
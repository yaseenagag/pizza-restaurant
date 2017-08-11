DROP TABLE IF EXISTS transaction_list;
DROP TABLE IF EXISTS transaction;
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS pizza;
DROP TABLE IF EXISTS drink;
DROP TABLE IF EXISTS ingredient;
DROP TABLE IF EXISTS preference;
DROP TABLE IF EXISTS topping;

CREATE TABLE customer(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  username VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone_number VARCHAR(100) NOT NULL,
  payment VARCHAR(100) NOT NULL
);

CREATE TABLE pizza(
  id SERIAL PRIMARY KEY,
  size VARCHAR(50) NOT NULL,
  crust VARCHAR(50) NOT NULL,
  price MONEY NOT NULL,
  discount_price MONEY NOT NULL
);

CREATE TABLE drink(
  id SERIAL PRIMARY KEY,
  description VARCHAR(50) NOT NULL,
  manufacturer VARCHAR(50) NOT NULL,
  supplier VARCHAR(50) NOT NULL,
  price MONEY NOT NULL
);

CREATE TABLE ingredient(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE preference(
  customer_id INTEGER NOT NULL,
  ingredient_id INTEGER NOT NULL
);

CREATE TABLE topping(
  pizza_id INTEGER NOT NULL,
  ingredient_id INTEGER NOT NULL
);

CREATE TABLE transaction(
  id SERIAL PRIMARY KEY,
  customer_id SERIAL,
  payment_method VARCHAR(100) NOT NULL,
  delivery_date DATE NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customer(id)
);

CREATE TABLE transaction_list (
  pizza_id INT,
  drink_id INT,
  transaction_id SERIAL,
  FOREIGN KEY (pizza_id) REFERENCES pizza(id),
  FOREIGN KEY (drink_id) REFERENCES drink(id),
  FOREIGN KEY (transaction_id) REFERENCES transaction(id)
);

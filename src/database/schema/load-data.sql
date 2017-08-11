-- Customer
INSERT INTO customer (name, username, address, phone_number, payment)
VALUES
('Tamiko Lorant', 'tlorant0', '22756 Morningstar Lane', '86-(577)779-6289', 'check'),
('Timothee Storm', 'tstorm1', '356 Dayton Court', '55-(530)930-3345', 'credit - 0000-0000-0000-0000'),
('Tawsha Orans', 'torans2', '44692 Starling Place', '62-(528)665-8550', 'check'),
('Cacilie Begley', 'cbegley3', '2 Portage Alley', '62-(990)218-7676', 'credit - 0000-0000-0000-0000'),
('Alberik Kittoe', 'akittoe4', '8 Delladonna Center', '86-(671)581-9454', 'cash');

-- Pizza
INSERT INTO pizza (size, crust, price, discount_price)
VALUES
('small', 'thin', 1.00, 0.50),
('small', 'thick', 1.00, 0.50),
('medium', 'thin', 2.00, 1.00),
('small', 'thick', 1.00, 0.50),
('extra-large', 'thin', 4.00, 2.00),
('extra-large', 'thin', 4.00, 2.00),
('small', 'thick', 1.00, 0.50),
('large', 'thick', 3.00, 1.50),
('small', 'thin', 1.00, 0.50),
('medium', 'thin', 2.00, 1.00),
('small', 'thick', 1.00, 0.50),
('large', 'thick', 3.00, 1.50),
('small', 'thin', 1.00, 0.50),
('extra-large', 'thin', 4.00, 2.00),
('extra-large', 'thick', 4.00, 2.00);

-- Drinks
INSERT INTO drink (description, manufacturer, supplier, price)
VALUES
('Coke', 'Coca-Cola', 'Unilever', 1.72),
('Pepsi', 'Pepsi', 'Johnson & Johnson', 3.37),
('Sprite', 'Coca-Cola', 'Unilever', 2.25),
('Fanta', 'Coca-Cola', 'Unilever', 1.95),
('Dr.Pepper', 'Dr.Pepper Snapple Group', 'Johnson & Johnson', 2.67);

-- Ingredients

INSERT INTO ingredient (name)
VALUES
('pepperoni'),
('sausage'),
('mushrooms'),
('onions'),
('pineapple'),
('olives'),
('chicken');

-- Preferences
INSERT INTO preference (customer_id, ingredient_id)
VALUES
(1,2),
(1,5),
(2,5),
(2,4),
(2,3),
(3,5),
(3,1),
(4,7),
(5,1),
(5,6);

-- Toppings
INSERT INTO topping (pizza_id, ingredient_id)
VALUES
(1,6),
(1,7),
(1,2),
(2,4),
(3,5),
(4,5),
(4,2),
(4,6),
(5,3),
(5,6),
(6,6),
(6,2),
(7,1),
(7,7),
(8,7),
(9,3),
(9,5),
(9,6),
(10,3),
(10,1),
(11,7),
(11,2),
(12,3);

-- Transactions
INSERT INTO transaction (payment_method, delivery_date)
VALUES
('cash', '2017-08-10');

-- Transaction List
INSERT INTO transaction_list (pizza_id, drink_id, transaction_id)
VALUES
(1, 2, 1),
(NULL, 1, 1),
(2, NULL, 1);

const db = require('../database.js');

const createPizza = function(pizza){
  return db.query(`
    INSERT INTO
      pizza (name, username, address, phone_number, payment)
    VALUES
      ($1::text, $2::text, $3::text, $4::text, $5::text)
    `,
    [
      pizza.name,
      pizza.username,
      pizza.address,
      pizza.phone_number,
      pizza.payment
    ])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getPizzas = function(){
  return db.many(`
    SELECT * FROM pizzas
    `, [])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getPizza = function(pizzaID){
  return db.one(`
    SELECT * FROM pizzas WHERE id = $1::int
    `,
    [pizzaID]
  )
  .catch(error => {console.log('There is an error with a query'); throw error;});
}

const deletePizza = function(pizzaID){
  return db.query(`
    DELETE FROM pizzas WHERE id = $1::int
    `,
    [pizzaID]
  )
  .catch(error => {console.log('There is an error with a query'); throw error;});
}

const updatePizza = function(pizza, pizzaID){
  return db.query(`
    UPDATE
      pizza
    SET
      name = $1::text, username = $2::text, address = $3::text, phone_number = $4::text, payment = $5::text
    WHERE
     id = $6
    `,
    [
      pizza.name,
      pizza.username,
      pizza.address,
      pizza.phone_number,
      pizza.payment,
      pizzaID
    ])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

module.exports = {
  createPizza,
  getPizzas,
  getPizza,
  updatePizza,
  deletePizza
}

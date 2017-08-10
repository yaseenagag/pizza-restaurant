const db = require('./database.js');

const createPizza = function(pizza){
  return db.query(`
    INSERT INTO
      pizza (size, crust, price, discount_price)
    VALUES
      ($1::text, $2::text, $3::money, $4::money)
    `,
    [
      pizza.size,
      pizza.crust,
      pizza.price,
      pizza.discount_price
    ])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getPizzas = function(){
  return db.many(`
    SELECT * FROM pizza
    `, [])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getPizza = function(pizzaID){
  return db.one(`
    SELECT * FROM pizza WHERE id = $1::int
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
      size = $1::text, crust = $2::text, price = $3::money, discount_price = $4::money
    WHERE
     id = $5
    `,
    [
      pizza.size,
      pizza.crust,
      pizza.price,
      pizza.discount_price,
      pizzaID
    ])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const deletePizza = function(pizzaID){
  return db.query(`
    DELETE FROM pizza WHERE id = $1::int
    `,
    [pizzaID]
  )
  .catch(error => {console.log('There is an error with a query'); throw error;});
}

module.exports = {
  createPizza,
  getPizzas,
  getPizza,
  updatePizza,
  deletePizza
}

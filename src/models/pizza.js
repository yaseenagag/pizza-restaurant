const db = require('../database/pizza.js');

const createPizza = function(pizza) {
  return db.createPizza(pizza);
}

const getPizzas = function() {
  return db.getPizzas();
}

const getPizza = function(pizzaID) {
  return db.getPizza(pizzaID);
}

const updatePizza = function(pizza, pizzaID) {
  return db.updatePizza(pizza, pizzaID);
}

const deletePizza = function(pizzaID) {
  return db.deletePizza(pizzaID);
}

module.exports = {
  createPizza,
  getPizzas,
  getPizza,
  updatePizza,
  deletePizza
}

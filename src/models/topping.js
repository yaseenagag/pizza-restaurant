const db = require('../database/topping.js');

const createTopping = function(topping) {
  return db.createTopping(topping);
}

const getToppings = function() {
  return db.getToppings();
}

const getTopping = function(toppingID) {
  return db.getTopping(toppingID);
}

const updateTopping = function(topping, toppingID) {
  return db.updateTopping(topping, toppingID);
}

const deleteTopping = function(toppingID) {
  return db.deleteTopping(toppingID);
}

module.exports = {
  createTopping,
  getToppings,
  getTopping,
  updateTopping,
  deleteTopping
}

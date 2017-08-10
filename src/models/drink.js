const db = require('../database/drink.js');

const createDrink = function(drink) {
  return db.createDrink(drink);
}

const getDrinks = function() {
  return db.getDrinks();
}

const getDrink = function(drinkID) {
  return db.getDrink(drinkID);
}

const updateDrink = function(drink, drinkID) {
  return db.updateDrink(drink, drinkID);
}

const deleteDrink = function(drinkID) {
  return db.deleteDrink(drinkID);
}

module.exports = {
  createDrink,
  getDrinks,
  getDrink,
  updateDrink,
  deleteDrink
}

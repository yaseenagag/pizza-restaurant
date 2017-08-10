const db = require('../database/ingredient.js');

const createIngredient = function(ingredient) {
  return db.createIngredient(ingredient);
}

const getIngredients = function() {
  return db.getIngredients();
}

const getIngredient = function(ingredientID) {
  return db.getIngredient(ingredientID);
}

const updateIngredient = function(ingredient, ingredientID) {
  return db.updateIngredient(ingredient, ingredientID);
}

const deleteIngredient = function(ingredientID) {
  return db.deleteIngredient(ingredientID);
}

module.exports = {
  createIngredient,
  getIngredients,
  getIngredient,
  updateIngredient,
  deleteIngredient
}

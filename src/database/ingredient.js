const db = require('../database.js');

const createIngredient = function(ingredient){
  return db.query(`
    INSERT INTO
      ingredient (name, username, address, phone_number, payment)
    VALUES
      ($1::text, $2::text, $3::text, $4::text, $5::text)
    `,
    [
      ingredient.name,
      ingredient.username,
      ingredient.address,
      ingredient.phone_number,
      ingredient.payment
    ])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getIngredients = function(){
  return db.many(`
    SELECT * FROM ingredients
    `, [])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getIngredient = function(ingredientID){
  return db.one(`
    SELECT * FROM ingredients WHERE id = $1::int
    `,
    [ingredientID]
  )
  .catch(error => {console.log('There is an error with a query'); throw error;});
}

const updateIngredient = function(ingredient, ingredientID){
  return db.query(`
    UPDATE
      ingredient
    SET
      name = $1::text, username = $2::text, address = $3::text, phone_number = $4::text, payment = $5::text
    WHERE
     id = $6
    `,
    [
      ingredient.name,
      ingredient.username,
      ingredient.address,
      ingredient.phone_number,
      ingredient.payment,
      ingredientID
    ])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const deleteIngredient = function(ingredientID){
  return db.query(`
    DELETE FROM ingredients WHERE id = $1::int
    `,
    [ingredientID]
  )
  .catch(error => {console.log('There is an error with a query'); throw error;});
}

module.exports = {
  createIngredient,
  getIngredients,
  getIngredient,
  updateIngredient,
  deleteIngredient
}

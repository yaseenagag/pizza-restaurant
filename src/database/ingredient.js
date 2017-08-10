const db = require('./database.js');

const createIngredient = function(ingredient){
  return db.query(`
    INSERT INTO
      ingredient (name)
    VALUES
      ($1::text)
    RETURNING
      *
    `,
    [ingredient.name])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getIngredients = function(){
  return db.many(`
    SELECT * FROM ingredient
    `, [])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getIngredient = function(ingredientID){
  return db.one(`
    SELECT * FROM ingredient WHERE id = $1::int
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
      name = $1::text
    WHERE
     id = $2
    `,
    [
      ingredient.name,
      ingredientID
    ])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const deleteIngredient = function(ingredientID){
  return db.query(`
    DELETE FROM ingredient WHERE id = $1::int
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

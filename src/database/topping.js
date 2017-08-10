const db = require('./database.js');

const createTopping = function(topping){
  return db.query(`
    INSERT INTO
      topping (pizza_id, ingredient_id)
    VALUES
      ($1::int, $2::int)
    RETURNING
      *
    `,
    [
      topping.pizza_id,
      topping.ingredient_id
    ])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getToppings = function(){
  return db.query(`
    SELECT * FROM topping
    `, [])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getTopping = function(toppingID){
  return db.query(`
    SELECT * FROM topping WHERE id = $1::int
    `,
    [toppingID])
  .catch(error => {console.log('There is an error with a query'); throw error;});
}

const updateTopping = function(topping, toppingID){
  return db.query(`
    UPDATE
      topping
    SET
      pizza_id = $1::int, ingredient_id = $2::int
    WHERE
     id = $6
    `,
    [
      topping.pizza_id,
      topping.ingredient_id,
      toppingID
    ])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const deleteTopping = function(toppingID){
  return db.query(`
    DELETE FROM topping WHERE id = $1::int
    `,
    [toppingID])
  .catch(error => {console.log('There is an error with a query'); throw error;});
}

module.exports = {
  createTopping,
  getToppings,
  getTopping,
  updateTopping,
  deleteTopping
}

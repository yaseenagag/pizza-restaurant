const db = require('./database.js');

const createDrink = function(drink){
  return db.query(`
    INSERT INTO
      drink (description, manufacturer, supplier, price)
    VALUES
      ($1::text, $2::text, $3::text, $4::money)
    RETURNING
      *
    `,
    [
      drink.description,
      drink.manufacturer,
      drink.supplier,
      drink.price
    ])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getDrinks = function(){
  return db.many(`
    SELECT * FROM drink
    `, [])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getDrink = function(drinkID){
  return db.one(`
    SELECT * FROM drink WHERE id = $1::int
    `,
    [drinkID])
  .catch(error => {console.log('There is an error with a query'); throw error;});
}

const updateDrink = function(drink, drinkID){
  return db.query(`
    UPDATE
      drink
    SET
      description = $1::text, manufacturer = $2::text, supplier = $3::text, price = $4::money
    WHERE
     id = $5
    `,
    [
      drink.description,
      drink.manufacturer,
      drink.supplier,
      drink.price,
      drinkID
    ])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const deleteDrink = function(drinkID){
  return db.query(`
    DELETE FROM drink WHERE id = $1::int
    `,
    [drinkID])
  .catch(error => {console.log('There is an error with a query'); throw error;});
}

module.exports = {
  createDrink,
  getDrinks,
  getDrink,
  updateDrink,
  deleteDrink
}

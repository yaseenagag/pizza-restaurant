const db = require('../database.js');

const createDrink = function(drink){
  return db.query(`
    INSERT INTO
      drink (name, username, address, phone_number, payment)
    VALUES
      ($1::text, $2::text, $3::text, $4::text, $5::text)
    `,
    [
      drink.name,
      drink.username,
      drink.address,
      drink.phone_number,
      drink.payment
    ])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getDrinks = function(){
  return db.many(`
    SELECT * FROM drinks
    `, [])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getDrink = function(drinkID){
  return db.one(`
    SELECT * FROM drinks WHERE id = $1::int
    `,
    [drinkID])
  .catch(error => {console.log('There is an error with a query'); throw error;});
}

const updateDrink = function(drink, drinkID){
  return db.query(`
    UPDATE
      drink
    SET
      name = $1::text, username = $2::text, address = $3::text, phone_number = $4::text, payment = $5::text
    WHERE
     id = $6
    `,
    [
      drink.name,
      drink.username,
      drink.address,
      drink.phone_number,
      drink.payment,
      drinkID
    ])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const deleteDrink = function(drinkID){
  return db.query(`
    DELETE FROM drinks WHERE id = $1::int
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

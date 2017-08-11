const db = require('./database.js');

const createTransactionList = function(transactionList){
  return db.query(`
    INSERT INTO
      transaction_list (pizza_id, drink_id, transaction_id)
    VALUES
      ($1::int, $2::int, $3::int)
    RETURNING
      *
    `,
    [
      transactionList.pizza_id,
      transactionList.drink_id,
      transactionList.transaction_id
    ])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getTransactionLists = function(){
  return db.many(`
    SELECT transaction_list.*, (pizza.price + drink.price) AS othertotal FROM transaction_list
    JOIN pizza ON pizza.id = transaction_list.pizza_id
    JOIN drink ON drink.id = transaction_list.drink_id
    `, [])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getTransactionList = function(transactionListID){
  return db.one(`
    SELECT transaction_list.*, (pizza.price + drink.price) AS total FROM transaction_list
    JOIN pizza ON pizza.id = transaction_list.pizza_id
    JOIN drink ON drink.id = transaction_list.drink_id
    WHERE id = $1::int
    `,
    [transactionListID]
  )
  .catch(error => {console.log('There is an error with a query'); throw error;});
}

const updateTransactionList = function(transactionList, transactionListID){
  return db.query(`
    UPDATE
      transaction_list
    SET
      pizza_id = $1::int, drink_id = $2::int, transaction_id = $3::int
    WHERE
     id = $4
    `,
    [
      transactionList.pizza_id,
      transactionList.drink_id,
      transactionList.transaction_id,
      transactionListID
    ])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const deleteTransactionList = function(transactionListID){
  return db.query(`
    DELETE FROM transaction_list WHERE id = $1::int
    `,
    [transactionListID]
  )
  .catch(error => {console.log('There is an error with a query'); throw error;});
}

module.exports = {
  createTransactionList,
  getTransactionLists,
  getTransactionList,
  updateTransactionList,
  deleteTransactionList
}

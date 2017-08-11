const db = require('./database.js');

const createTransaction = function(transaction){
  return db.query(`
    INSERT INTO
      transaction (customer_id, total_price, payment_method, delivery_date)
    VALUES
      ($1::int, $2::int, $3::text, $4::date)
    RETURNING
      *
    `,
    [
      transaction.customer_id,
      transaction.total_price,
      transaction.payment_method,
      transaction.delivery_date
    ])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getTransactions = function(){
  return db.many(`
    SELECT transaction.*, (pizza.price + drink.price) AS total FROM transaction
    JOIN transaction_list ON transaction.id = transaction_list.transaction_id
    JOIN pizza ON pizza.id = transaction_list.pizza_id
    JOIN drink ON drink.id = transaction_list.drink_id
    `, [])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getTransaction = function(transactionID){
  return db.one(`
    SELECT transaction.*, (pizza.price + drink.price) AS total FROM transaction
    JOIN transaction_list ON transaction.id = transaction_list.transaction_id
    JOIN pizza ON pizza.id = transaction_list.pizza_id
    JOIN drink ON drink.id = transaction_list.drink_id
    WHERE id = $1::int
    `,
    [transactionID]
  )
  .catch(error => {console.log('There is an error with a query'); throw error;});
}

const updateTransaction = function(transaction, transactionID){
  return db.query(`
    UPDATE
      transaction
    SET
      customer_id = $1::int, total_price = $2::int, payment_method = $3::text, $4::date
    WHERE
     id = $5
    `,
    [
      transaction.customer_id,
      transaction.total_price,
      transaction.payment_method,
      transaction.delivery_date,
      transactionID
    ])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const deleteTransaction = function(transactionID){
  return db.query(`
    DELETE FROM transaction WHERE id = $1::int
    `,
    [transactionID]
  )
  .catch(error => {console.log('There is an error with a query'); throw error;});
}

module.exports = {
  createTransaction,
  getTransactions,
  getTransaction,
  updateTransaction,
  deleteTransaction
}

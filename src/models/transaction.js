const db = require('../database/transaction.js');

const createTransaction = function(transaction) {
  return db.createTransaction(transaction);
}

const getTransactions = function() {
  return db.getTransactions();
}

const getTransaction = function(transactionID) {
  return db.getTransaction(transactionID);
}

const updateTransaction = function(transaction, transactionID) {
  return db.updateTransaction(transaction, transactionID);
}

const deleteTransaction = function(transactionID) {
  return db.deleteTransaction(transactionID);
}

module.exports = {
  createTransaction,
  getTransactions,
  getTransaction,
  updateTransaction,
  deleteTransaction
}

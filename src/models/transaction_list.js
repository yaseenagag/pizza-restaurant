const db = require('../database/transaction_list.js');

const createTransactionList = function(transactionList) {
  return db.createTransactionList(transactionList);
}

const getTransactionLists = function() {
  return db.getTransactionLists();
}

const getTransactionList = function(transactionListID) {
  return db.getTransactionList(transactionListID);
}

const updateTransactionList = function(transactionList, transactionListID) {
  return db.updateTransactionList(transactionList, transactionListID);
}

const deleteTransactionList = function(transactionListID) {
  return db.deleteTransactionList(transactionListID);
}

module.exports = {
  createTransactionList,
  getTransactionLists,
  getTransactionList,
  updateTransactionList,
  deleteTransactionList
}

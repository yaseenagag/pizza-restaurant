const dbTransaction = require('../../models/transaction.js');
const router = require('express').Router();
const renderError = require('../utils.js');

router.post('/', (request, response, next) => {
  dbTransaction.createTransaction(request.body)
  .then(function(transaction) {
    if (transaction) return response.redirect(`/transactions/${transaction[0].id}`);
    next();
  })
  .catch( error => renderError(error, response));
});

router.get('/', (request, response, next) => {
  dbTransaction.getTransactions()
  .then(function(transaction) {
    if (transaction) return response.json(transaction);
    next();
  })
  .catch( error => renderError(error, response));
});

router.get('/:transactionid', (request, response, next) => {
  const transactionID = request.params.transactionid;
  if (!transactionID || !/^\d+$/.test(transactionID)) return next();
  dbTransaction.getTransaction(transactionID)
  .then(function(transaction) {
    if (transaction) return response.json(transaction);
    next();
  })
  .catch( error => renderError(error, response));
});

router.patch('/:transactionid', (request, response, next) => {
  const transactionID = request.params.transactionid;
  dbTransaction.updateTransaction(request.body, transactionID)
  .then(function(transaction) {
    if (transaction) return response.redirect(`/transactions/${transactionID}`);
    next();
  })
  .catch( error => renderError(error, response));
});

router.delete('/:transactionid', (request, response, next) => {
  const transactionID = request.params.transactionid;
  dbTransaction.deleteTransaction(transactionID)
  .then(function(transaction) {
    if (transaction) return response.redirect(`/transactions/${transactionID}`);
    next();
  })
  .catch( error => renderError(error, response));
});

module.exports = router;

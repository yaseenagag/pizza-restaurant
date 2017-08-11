const dbTransactionList = require('../../models/transaction_list.js');
const router = require('express').Router();
const renderError = require('../utils.js');

router.post('/', (request, response, next) => {
  dbTransactionList.createTransactionList(request.body)
  .then(function(transactionList) {
    if (transactionList) return response.redirect(`/transactionlists/${transactionList[0].id}`);
    next();
  })
  .catch( error => renderError(error, response));
});

router.get('/', (request, response, next) => {
  dbTransactionList.getTransactionLists()
  .then(function(transactionList) {
    if (transactionList) return response.json(transactionList);
    next();
  })
  .catch( error => renderError(error, response));
});

router.get('/:transactionlistid', (request, response, next) => {
  const transactionListID = request.params.transactionlistid;
  if (!transactionListID || !/^\d+$/.test(transactionListID)) return next();
  dbTransactionList.getTransactionList(transactionListID)
  .then(function(transactionList) {
    if (transactionList) return response.json(transactionList);
    next();
  })
  .catch( error => renderError(error, response));
});

router.patch('/:transactionlistid', (request, response, next) => {
  const transactionlistID = request.params.transactionlistid;
  dbTransactionList.updateTransactionList(request.body, transactionListID)
  .then(function(transactionList) {
    if (transactionList) return response.redirect(`/transactionlists/${transactionListID}`);
    next();
  })
  .catch( error => renderError(error, response));
});

router.delete('/:transactionlistid', (request, response, next) => {
  const transactionListID = request.params.transactionlistid;
  dbTransactionList.deleteTransactionList(transactionListID)
  .then(function(transactionList) {
    if (transactionList) return response.redirect(`/transactionlists/${transactionListID}`);
    next();
  })
  .catch( error => renderError(error, response));
});

module.exports = router;

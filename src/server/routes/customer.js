const dbCustomer = require('../../models/customer.js');
const router = require('express').Router();
const renderError = require('../utils.js');

router.post('/', (request, response, next) => {
  dbCustomer.createCustomer(request.body)
  .then(function(customer) {
    if (customer) return response.redirect(`/customers/${customer[0].id}`);
    next();
  })
  .catch( error => renderError(error, response));
});

router.get('/', (request, response, next) => {
  dbCustomer.getCustomers()
  .then(function(customer) {
    if (customer) return response.json(customer);
    next();
  })
  .catch( error => renderError(error, response));
});

router.get('/:customerid', (request, response, next) => {
  const customerID = request.params.customerid;
  if (!customerID || !/^\d+$/.test(customerID)) return next();
  dbCustomer.getCustomer(customerID)
  .then(function(customer) {
    if (customer) return response.json(customer);
    next();
  })
  .catch( error => renderError(error, response));
});

router.patch('/', (request, response, next) => {
  dbCustomer.updateCustomer(request.body)
  .then(function(customer) {
    if (customer) return response.redirect(`/customers/${customer[0].id}`);
    next();
  })
  .catch( error => renderError(error, response));
});

router.delete('/', (request, response, next) => {
  dbCustomer.deleteCustomer()
  .then(function(customer) {
    if (customer) return response.redirect(`/customers`);
    next();
  })
  .catch( error => renderError(error, response));
});

module.exports = router;

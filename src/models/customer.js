const db = require('../database/customer.js');

const createCustomer = function(customer) {
  return db.createCustomer(customer);
}

const getCustomers = function() {
  return db.getCustomers();
}

const getCustomer = function(customerID) {
  return db.getCustomer(customerID);
}

const updateCustomer = function(customer, customerID) {
  return updateCustomer(customer, customerID);
}

const deleteCustomer = function(customerID) {
  return deleteCustomer(customerID);
}

module.exports = {
  createCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer
}

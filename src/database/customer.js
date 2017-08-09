const db = require('../database.js');

const createCustomer = function(customer){
  return db.query(`
    INSERT INTO
      customer (name, username, address, phone_number, payment)
    VALUES
      ($1::text, $2::text, $3::text, $4::text, $5::text)
    `,
    [
      customer.name,
      customer.username,
      customer.address,
      customer.phone_number,
      customer.payment
    ])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getCustomers = function(){
  return db.many(`
    SELECT * FROM customers
    `, [])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getCustomer = function(customerID){
  return db.one(`
    SELECT * FROM customers WHERE id = $1::int
    `,
    [customerID])
  .catch(error => {console.log('There is an error with a query'); throw error;});
}

const updateCustomer = function(customer, customerID){
  return db.query(`
    UPDATE
      customer
    SET
      name = $1::text, username = $2::text, address = $3::text, phone_number = $4::text, payment = $5::text
    WHERE
     id = $6
    `,
    [
      customer.name,
      customer.username,
      customer.address,
      customer.phone_number,
      customer.payment,
      customerID
    ])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const deleteCustomer = function(customerID){
  return db.query(`
    DELETE FROM customers WHERE id = $1::int
    `,
    [customerID])
  .catch(error => {console.log('There is an error with a query'); throw error;});
}

module.exports = {
  createCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer
}

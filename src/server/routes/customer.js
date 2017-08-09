const dbCustomer = require('../../database/customer.js');
const router = express.Router();

router.get('/customers', (request, response) => {
  dbCustomer.getAllCustomers();
});

router.get('/customers/:id', (request, response) => {
  dbCustomer.getCustomer();
});

router.post('/customers', (request, response) => {
  dbCustomer.createCustomer();
});

router.delete('/customers', (request, response) => {
  dbCustomer.deleteCustomer();
});

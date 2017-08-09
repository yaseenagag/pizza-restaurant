const db = require('../../database/database.js');
const router = express.Router();

router.get('/customers', (request, response) => {
  db.getAllCustomers()
})

router.get('/customers/:id', (request, response) => {
  db.getCustomer()
})

router.post('/customers', (request, response) => {
  db.createCustomer()
})

router.put('/customers', (request, response) => {
  db.updateCustomer()
})

router.delete('/customers', (request, response) => {
  db.deleteCustomer()
})

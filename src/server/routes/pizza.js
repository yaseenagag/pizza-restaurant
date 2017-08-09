const db = require('../../database/database.js');
const router = express.Router();

router.get('/pizzas', (request, response) => {
  db.getAllPizzas()
})

router.get('/pizzas/:id', (request, response) => {
  db.getPizza()
})

router.post('/pizzas', (request, response) => {
  db.createPizza()
})

router.put('/pizzas', (request, response) => {
  db.updatePizza()
})

router.delete('/pizzas', (request, response) => {
  db.deletePizza()
})

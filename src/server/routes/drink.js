const db = require('../../database/database.js');
const router = express.Router();

router.get('/drinks', (request, response) => {
  db.getAllDrinks()
})

router.get('/drinks/:id', (request, response) => {
  db.getDrink()
})

router.post('/drinks', (request, response) => {
  db.createDrink()
})

router.put('/drinks', (request, response) => {
  db.updateDrink()
})

router.delete('/drinks', (request, response) => {
  db.deleteDrink()
})

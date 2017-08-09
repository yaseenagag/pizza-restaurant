const db = require('../../database/database.js')
const router = express.Router()

router.get('/drinks', (request, response) => {
  db.getDrinks()
})

router.get('/drinks/:id', (request, response) => {
  db.getDrink()
})

router.post('/drinks', (request, response) => {
  db.createDrink()
})

router.delete('/drinks', (request, response) => {
  db.deleteDrink()
})

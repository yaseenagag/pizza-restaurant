const db = require('../../database/database.js');
const router = express.Router();

router.get('/ingredients', (request, response) => {
  db.getAllIngredients()
})

router.get('/ingredients/:id', (request, response) => {
  db.getIngredient()
})

router.post('/ingredients', (request, response) => {
  db.createIngredient()
})

router.put('/ingredients', (request, response) => {
  db.updateIngredient()
})

router.delete('/ingredients', (request, response) => {
  db.deleteIngredient()
})

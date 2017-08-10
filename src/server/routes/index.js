const router = require('express').Router();
const customer = require('./customer.js');
const drink = require('./drink.js');
const ingredient = require('./ingredient.js');
const pizza = require('./pizza.js');

router.use('/customers', customer);
router.use('/drinks', drink);
router.use('/ingredients', ingredient);
router.use('/pizzas', pizza);

module.exports = router;

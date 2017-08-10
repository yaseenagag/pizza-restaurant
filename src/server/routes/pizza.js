const dbPizza = require('../../models/pizza.js');
const router = require('express').Router();
const renderError = require('../utils.js');

router.post('/', (request, response, next) => {
  dbPizza.createPizza(request.body)
  .then(function(pizza) {
    if (pizza) return response.redirect(`/pizzas/${pizza[0].id}`);
    next();
  })
  .catch( error => renderError(error, response));
});

router.get('/', (request, response, next) => {
  dbPizza.getPizzas()
  .then(function(pizza) {
    if (pizza) return response.json(pizza);
    next();
  })
  .catch( error => renderError(error, response));
});

router.get('/:pizzaid', (request, response, next) => {
  const pizzaID = request.params.pizzaid;
  if (!pizzaID || !/^\d+$/.test(pizzaID)) return next();
  dbPizza.getPizza(pizzaID)
  .then(function(pizza) {
    if (pizza) return response.json(pizza);
    next();
  })
  .catch( error => renderError(error, response));
});

router.patch('/:pizzaid', (request, response, next) => {
  const pizzaID = request.params.pizzaid;
  dbPizza.updatePizza(request.body, pizzaID)
  .then(function(pizza) {
    if (pizza) return response.redirect(`/pizzas/${pizzaID}`);
    next();
  })
  .catch( error => renderError(error, response));
});

router.delete('/:pizzaid', (request, response, next) => {
  const pizzaID = request.params.pizzaid;
  dbPizza.deletePizza(pizzaID)
  .then(function(pizza) {
    if (pizza) return response.redirect(`/pizzas/${pizzaID}`);
    next();
  })
  .catch( error => renderError(error, response));
});

module.exports = router;

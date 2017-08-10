const dbDrink = require('../../models/drink.js');
const router = require('express').Router();
const renderError = require('../utils.js');

router.post('/', (request, response, next) => {
  dbDrink.createDrink(request.body)
  .then(function(drink) {
    if (drink) return response.redirect(`/drinks/${drink[0].id}`);
    next();
  })
  .catch( error => renderError(error, response));
});

router.get('/', (request, response, next) => {
  dbDrink.getDrinks()
  .then(function(drink) {
    if (drink) return response.json(drink);
    next();
  })
  .catch( error => renderError(error, response));
});

router.get('/:drinkid', (request, response, next) => {
  const drinkID = request.params.drinkid;
  if (!drinkID || !/^\d+$/.test(drinkID)) return next();
  dbDrink.getDrink(drinkID)
  .then(function(drink) {
    if (drink) return response.json(drink);
    next();
  })
  .catch( error => renderError(error, response));
});

router.patch('/', (request, response, next) => {
  dbDrink.updateDrink(request.body)
  .then(function(drink) {
    if (drink) return response.redirect(`/drinks/${drink[0].id}`);
    next();
  })
  .catch( error => renderError(error, response));
});

router.delete('/', (request, response, next) => {
  dbDrink.deleteDrink()
  .then(function(drink) {
    if (drink) return response.redirect(`/drinks`);
    next();
  })
  .catch( error => renderError(error, response));
});

module.exports = router;

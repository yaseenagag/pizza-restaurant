const dbTopping = require('../../models/topping.js');
const router = require('express').Router();
const renderError = require('../utils.js');

router.post('/', (request, response, next) => {
  dbTopping.createTopping(request.body)
  .then(function(topping) {
    if (topping) return response.redirect(`/toppings/${topping[0].id}`);
    next();
  })
  .catch( error => renderError(error, response));
});

router.get('/', (request, response, next) => {
  dbTopping.getToppings()
  .then(function(topping) {
    if (topping) return response.json(topping);
    next();
  })
  .catch( error => renderError(error, response));
});

router.get('/:toppingid', (request, response, next) => {
  const toppingID = request.params.toppingid;
  if (!toppingID || !/^\d+$/.test(toppingID)) return next();
  dbTopping.getTopping(toppingID)
  .then(function(topping) {
    if (topping) return response.json(topping);
    next();
  })
  .catch( error => renderError(error, response));
});

router.patch('/:toppingid', (request, response, next) => {
  const toppingID = request.params.toppingid;
  dbTopping.updateTopping(request.body, toppingID)
  .then(function(topping) {
    if (topping) return response.redirect(`/toppings/${toppingID}`);
    next();
  })
  .catch( error => renderError(error, response));
});

router.delete('/:toppingid', (request, response, next) => {
  const toppingID = request.params.toppingid;
  dbTopping.deleteTopping(toppingID)
  .then(function(topping) {
    if (topping) return response.redirect(`/toppings/${toppingID}`);
    next();
  })
  .catch( error => renderError(error, response));
});

module.exports = router;

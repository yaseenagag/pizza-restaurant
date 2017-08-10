const dbIngredient = require('../../models/ingredient.js');
const router = require('express').Router();
const renderError = require('../utils.js');

router.post('/', (request, response, next) => {
  dbIngredient.createIngredient(request.body)
  .then(function(ingredient) {
    if (ingredient) return response.redirect(`/ingredients/${ingredient[0].id}`);
    next();
  })
  .catch( error => renderError(error, response));
});

router.get('/', (request, response, next) => {
  dbIngredient.getIngredients()
  .then(function(ingredient) {
    if (ingredient) return response.json(ingredient);
    next();
  })
  .catch( error => renderError(error, response));
});

router.get('/:ingredientid', (request, response, next) => {
  const ingredientID = request.params.ingredientid;
  if (!ingredientID || !/^\d+$/.test(ingredientID)) return next();
  dbIngredient.getIngredient(ingredientID)
  .then(function(ingredient) {
    if (ingredient) return response.json(ingredient);
    next();
  })
  .catch( error => renderError(error, response));
});

router.patch('/:ingredientid', (request, response, next) => {
  const ingredientID = request.params.ingredientid;
  dbIngredient.updateIngredient(request.body, ingredientID)
  .then(function(ingredient) {
    if (ingredient) return response.redirect(`/ingredients/${ingredientID}`);
    next();
  })
  .catch( error => renderError(error, response));
});

router.delete('/:ingredientid', (request, response, next) => {
  const ingredientID = request.params.ingredientid;
  dbIngredient.deleteIngredient(ingredientID)
  .then(function(ingredient) {
    if (ingredient) return response.redirect(`/ingredients/${ingredientID}`);
    next();
  })
  .catch( error => renderError(error, response));
});

module.exports = router;

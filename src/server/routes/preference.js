const dbPreference = require('../../models/preference.js');
const router = require('express').Router();
const renderError = require('../utils.js');

router.post('/', (request, response, next) => {
  dbPreference.createPreference(request.body)
  .then(function(preference) {
    if (preference) return response.redirect(`/preferences/${preference[0].id}`);
    next();
  })
  .catch( error => renderError(error, response));
});

router.get('/', (request, response, next) => {
  dbPreference.getPreferences()
  .then(function(preference) {
    if (preference) return response.json(preference);
    next();
  })
  .catch( error => renderError(error, response));
});

router.get('/:preferenceid', (request, response, next) => {
  const preferenceID = request.params.preferenceid;
  if (!preferenceID || !/^\d+$/.test(preferenceID)) return next();
  dbPreference.getPreference(preferenceID)
  .then(function(preference) {
    if (preference) return response.json(preference);
    next();
  })
  .catch( error => renderError(error, response));
});

router.patch('/:preferenceid', (request, response, next) => {
  const preferenceID = request.params.preferenceid;
  dbPreference.updatePreference(request.body, preferenceID)
  .then(function(preference) {
    if (preference) return response.redirect(`/preferences/${preferenceID}`);
    next();
  })
  .catch( error => renderError(error, response));
});

router.delete('/:preferenceid', (request, response, next) => {
  const preferenceID = request.params.preferenceid;
  dbPreference.deletePreference(preferenceID)
  .then(function(preference) {
    if (preference) return response.redirect(`/preferences/${preferenceID}`);
    next();
  })
  .catch( error => renderError(error, response));
});

module.exports = router;

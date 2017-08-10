const db = require('../database/preference.js');

const createPreference = function(preference) {
  return db.createPreference(preference);
}

const getPreferences = function() {
  return db.getPreferences();
}

const getPreference = function(preferenceID) {
  return db.getPreference(preferenceID);
}

const updatePreference = function(preference, preferenceID) {
  return db.updatePreference(preference, preferenceID);
}

const deletePreference = function(preferenceID) {
  return db.deletePreference(preferenceID);
}

module.exports = {
  createPreference,
  getPreferences,
  getPreference,
  updatePreference,
  deletePreference
}

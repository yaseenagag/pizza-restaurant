const db = require('./database.js');

const createPreference = function(preference){
  return db.query(`
    INSERT INTO
      preference (customer_id, ingredient_id)
    VALUES
      ($1::int, $2::int)
    RETURNING
      *
    `,
    [
      preference.customer_id,
      preference.ingredient_id
    ])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getPreferences = function(){
  return db.query(`
    SELECT * FROM preference
    `, [])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const getPreference = function(preferenceID){
  return db.query(`
    SELECT * FROM preference WHERE id = $1::int
    `,
    [preferenceID])
  .catch(error => {console.log('There is an error with a query'); throw error;});
}

const updatePreference = function(preference, preferenceID){
  return db.query(`
    UPDATE
      preference
    SET
      customer_id = $1::int, ingredient_id = $2::int
    WHERE
     id = $6
    `,
    [
      preference.customer_id,
      preference.ingredient_id,
      preferenceID
    ])
    .catch(error => {console.log('There is an error with a query'); throw error;});
}

const deletePreference = function(preferenceID){
  return db.query(`
    DELETE FROM preference WHERE id = $1::int
    `,
    [preferenceID])
  .catch(error => {console.log('There is an error with a query'); throw error;});
}

module.exports = {
  createPreference,
  getPreferences,
  getPreference,
  updatePreference,
  deletePreference
}

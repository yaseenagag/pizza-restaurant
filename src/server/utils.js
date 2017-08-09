const renderError = function(error, response) {
  response.send(`ERROR: $(error.message)`)
}

module.exports = renderError;

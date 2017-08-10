const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./server/routes/index.js');
const {renderError} = require('./server/utils.js')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Connecting to http://localhost:${port}`);
});

//One line initiliazation

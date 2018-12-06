const express = require('express');
const app = express();
const controller = require('./controllers/controller');

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/', (req, res) => {
  controller(req, res);
});

app.locals.name  = require(__dirname + '/package.json').name;

module.exports = app;

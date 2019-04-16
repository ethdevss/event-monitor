var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');

var monitor = require('./api/monitor/index.js');

var cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send({status: 500, message: 'internal error', type: 'internal'});
});

app.use(cors());

app.use('/monitor', monitor);

module.exports = app;

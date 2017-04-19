process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('passport');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(3000);

module.exports = app;

console.log('Server is running at http://localhost:3000');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
app.listen(3000);
module.exports = app;

var mongoose = require('mongoose');
var uri = 'mongodb://localhost/practice';
var db = mongoose.connect(uri);

console.log('Server is running at http://localhost:3000');

var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var sass = require('node-sass-middleware');
var validator = require('express-validator');
var session = require('express-session');
var redisStore = require('connect-redis')(session);
var config = require('./config');
var passport = require('passport');

module.exports = function () {

    var app = express();

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else {
        app.use(compression);
    }

    app.use(session({
        secret: config.sessionSecret,
        resave: false,
        saveUninitialized: true
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    app.use(validator());

    app.use(sass({
        src: './sass',
        dest: './public/css',
        outputStyle: 'compressed',
        prefix: '/css',
        indentedSyntax :true
    }));


    app.set('views','./app/views');
    app.set('view engine', 'jade');

    app.use(express.static('./public'));
    require('../app/routes/index.routes')(app);
    require('../app/routes/user.routes')(app);
    return app;
}
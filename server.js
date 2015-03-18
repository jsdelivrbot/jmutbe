
//Declarations and dependancies
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/dbModule.js');

//Configs of middleware =======================================
mongoose.connect(configDB.url); //connect to DB

require('./config/passport')(passport); //pass passport for configuration

//Logs requests to console
app.use(morgan('dev'));

//Config of cookieParser
app.use(cookieParser());

//Configuration that allows usage of BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Partial config of passport
app.use(session({ secret: 'ilovepolishvodka' })); //session secret
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Load Routes =================================================
require('./app/routes.js')(app,passport); // Loads routes and passport


//Launch ======================================================

//The listener
app.listen(port);
console.log('Magic happens on port ' + port);




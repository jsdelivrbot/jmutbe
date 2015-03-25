
//Declarations and dependancies
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/dbModule.js');

//Configs of middleware =======================================
mongoose.connect(configDB.url); //connect to DB

//Logs requests to console
app.use(morgan('dev'));


//Configuration that allows usage of BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(flash());

//The middleware shows express where all the static files are to be delivered.
app.use(express.static(__dirname + '/FrontEnd'))

//Load Routes =================================================
require('./app/routes.js')(app); // Loads routes and passport


//Launch ======================================================

//The listener
app.listen(port);
console.log('Magic happens on port ' + port);




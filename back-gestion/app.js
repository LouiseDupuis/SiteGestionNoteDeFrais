var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
 

 // [SH] Bring in the data model
require('./models/db');

require('./models/user.model');
require('./config/passport');

var app = express();

var bluebird = require('bluebird');

/* var index = require('./routes/index');
var users = require('./routes/users'); */


var api = require('./routes/api.route');

var passport = require('passport');




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(logger('dev'));
/* app.use(express.json());
app.use(express.urlencoded({ extended: false })); */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var corsOptions = {
  origin: '*',
  credentials: true };

app.use(cors(corsOptions));

//allow connection with a different port 

/* app.use(function(res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
}); */

// j'ai eu des problèmes de CORS, je teste donc différentes méthodes : 
/* var permitCrossDomainRequests = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  // some browsers send a pre-flight OPTIONS request to check if CORS is enabled so you have to also respond to that
  if ('OPTIONS' === req.method) {
    res.send(200);
  }
  else {
    next();
  }
  }; */


  //app.use(permitCrossDomainRequests);


// add mongoose support 

var mongoose = require('mongoose')
mongoose.Promise = bluebird
mongoose.connect('mongodb://127.0.0.1:27017/todoapp', { useNewUrlParser: true})
.then(()=> { console.log(`Succesfully Connected to the
Mongodb Database  at URL : mongodb://127.0.0.1:27017/todoapp`)})
.catch(()=> { console.log(`Error Connecting to the Mongodb 
Database at URL : mongodb://127.0.0.1:27017/todoapp`)})


// initialisation de passport 
app.use(passport.initialize());

// use routes

/* app.use('/', index);
app.use('/users', users); */

//Use the API routes for all routes matching /api

app.use('/api', api);



// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.post('/', function (res) {
  res.send('Got a POST request');
});


module.exports = app;



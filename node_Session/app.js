var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');



var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var userpage = require('./routes/userpage');
var signup = require('./routes/signup');
var tags = require('./routes/tags');
var seminars = require('./routes/seminars');
var addSeminar = require('./routes/addSeminar');
var members = require('./routes/members');
var chart = require('./routes/chart');
var top = require('./routes/top');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var session_opt = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { maxage: 60 * 60 * 1000 }
}
app.use(session(session_opt));


app.use('/', index);
app.use('/users', users);
app.use('/login', login);
app.use('/userpage', userpage);
app.use('/signup', signup);
app.use('/tags', tags);
app.use('/seminars', seminars);
app.use('/addSeminar', addSeminar);
app.use('/members', members);
app.use('/chart', chart);
app.use('/top', top);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
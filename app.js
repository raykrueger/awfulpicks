var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),

    routes = require('./routes/index'),
    
    app = express();


// Setup jade to work with express
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// Add our favicon to express
app.use(favicon(__dirname + '/public/favicon.ico'));


// Setup development logging
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cookieParser());


// Pull static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Add our routes
app.use('/', routes);


// Send 404 errors to the error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// Print stack traces on errors if we're in development
if (app.get('env') === 'development') {
    app.use(function(err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// Don't print stack traces on production (or any other environment)
app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

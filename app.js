/*
A sound aggregator.
Loïc Fontaine - http://github.com/lfont - MIT Licensed
*/

var express   = require('express'),
    ejsLocals = require('ejs-locals'),
    routes    = require('./routes');

var app = module.exports = express();


// configuration

app.configure(function () {
  app.engine('ejs', ejsLocals);

  app.set('view engine', 'ejs');
  app.set('views', __dirname + '/views');

  app.use(express.favicon());
  app.use(express.bodyParser());
  app.use(app.router);
});

app.configure('development', function () {
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function () {
  app.use(express.static(__dirname + '/public-build'));
  app.use(express.errorHandler());
});


// error handler

app.use(function (err, req, res, next) {
  // we may use properties of the error object
  // here and next(err) appropriately, or if
  // we possibly recovered from the error, simply next().
  res.status(err.status || 500);
  res.render('error/500', {
    title: 'Internal Error',
    error: err
  });
});


// routes

app.use(function (req, res) {
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('error/404', {
      title: 'Not Found',
      url: req.url
    });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

routes.register(app);

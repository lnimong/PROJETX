var http = require('http'),
    app  = require('./app');

var server = http.createServer(app);

server.listen(process.env.PORT, function () {
  console.log('Express server listening on port %d in %s mode',
              process.env.PORT, app.settings.env);
});

// PRODUCTS // 
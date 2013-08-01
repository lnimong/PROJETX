var http = require('http'),
    app  = require('./app'),
    serverpush = require('./serverpush/server-events');

var server = http.createServer(app);

serverpush.listen(server);

server.listen(process.env.PORT, function () {
  console.log('Express server listening on port %d in %s mode',
              process.env.PORT, app.settings.env);
});

// PRODUCTS // 
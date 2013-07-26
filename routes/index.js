var home = require('./home');

exports.register = function (app) {
  /* views */
  app.get('/', home.index);
  app.get('/catalog', home.index);
  app.get('/product/:id', home.index);
};

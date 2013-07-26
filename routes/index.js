var home = require('./home');

exports.register = function (app) {
  /* views */
  app.get('/', home.index);
};

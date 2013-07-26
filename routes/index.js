var home = require('./home');
var cart = require('./api/cart');
var products = require('./api/products');

exports.register = function (app) {
  /* views */
  app.get('/', home.index);

  /* api */
  app.get('/api/products/', products.all);
  app.get('/api/products/:id', products.product);

  app.post('api/cart/', cart.addToCart);
};

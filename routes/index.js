var home = require('./home');
var cart = require('./api/cart');
var products = require('./api/products');
var stock = require('./api/stock-manager');

exports.register = function (app) {
  /* views */
  app.get('/', home.index);
  app.get('/catalog', home.index);
  app.get('/product/:id', home.index);

  /* api */
  app.get('/api/products', products.all);
  app.get('/api/products/:id', products.product);

  app.post('/api/cart', cart.addToCart);
  app.put('/api/stock', stock.setQuantity);

};

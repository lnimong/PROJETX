define(function () {
  'use strict';

  function CartSrv ($http, $window) {

    this.addToCart = function (product) {
      return $http
        .post('/api/cart', { modelId: product.modelId })
        .error(function (data, status, headers, config) {
          $window.alert('Oups: ' + status);
        });
    };
  }

  CartSrv.$inject = [ '$http', '$window' ];

  return CartSrv;
});

define(function () {
  'use strict';

  function CartSrv ($http) {
    this.addToCart = function (product, size) {
      return $http
        .post('/api/cart', { modelId: product.modelId, size: size })
        .error(function (data, status) {
          deferred.reject(status);
        });
    };
  }

  CartSrv.$inject = [ '$http' ];

  return CartSrv;
});

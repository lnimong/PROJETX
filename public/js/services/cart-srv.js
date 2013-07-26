define(function () {
  'use strict';

  function CartSrv ($http, $q) {
    this.addToCart = function (product, size) {
      var deferred = $q.defer();

      $http
        .post('/api/cart', { id: product.id, size: size })
        .success(function (data, status) {
          deferred.resolve();
        })
        .error(function (data, status) {
          deferred.reject(status);
        });

      return deferred.promise;
    };
  }

  CartSrv.$inject = [ '$http', '$q' ];

  return CartSrv;
});

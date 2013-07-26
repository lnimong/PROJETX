define(function () {
  'use strict';

  function ProductSrv ($http, $q) {
    this.getProduct = function (id) {
      var deferred = $q.defer();

      $http
        .get('/api/products/' + id)
        .success(function (data, status) {
          deferred.resolve(data.product);
        })
        .error(function (data, status) {
          deferred.reject(status);
        });

      return deferred.promise;
    };

    this.getProducts = function (callback) {
      $http
        .get('/api/products/')
        .success(function (data, status, headers, config) {
          callback(data);
        })
        .error(function (data, status, headers, config) {

        });
  	};
	}

  ProductSrv.$inject = [ '$http', '$q' ];

  return ProductSrv;
});

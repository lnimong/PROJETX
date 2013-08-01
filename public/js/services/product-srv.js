define(function () {
  'use strict';

  function ProductSrv ($window, $http) {

    this.getProduct = function (id) {
      return $http
        .get('/api/products/' + id)
        .error(function (data, status, headers, config) {
          $window.alert('Oups: ' + status);
        })
        .then(function (response) {
          return response.data[0];
        });
    };

    this.getProducts = function () {
      return $http
        .get('/api/products/')
        .error(function (data, status, headers, config) {
          $window.alert('Oups: ' + status);
        })
        .then(function (response) {
          return response.data;
        });
    };
	}

  ProductSrv.$inject = [ '$window', '$http' ];

  return ProductSrv;
});

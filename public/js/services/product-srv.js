define(["socketio"], function (socketio) {
  'use strict';

  function ProductSrv ($window, $http) {

    var socket = socketio.connect().socket;

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

    this.subscribeToAvailability = function (product) {
      
      socket.of('availability').on('productAvailable:'+product.id, function (product) {
        $rootScope.$broadcast('productSrv:productAvailable', product);
        $rootScope.$apply();
      });
    }
	}

  ProductSrv.$inject = [ '$window', '$http' ];

  return ProductSrv;
});

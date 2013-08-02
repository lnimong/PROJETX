define([
  'socketio'
], function (socketio) {
  'use strict';

  function ProductSrv ($rootScope, $window, $http) {
    var availabilitySocket = socketio.connect().socket.of('availability');

    this.getProduct = function (id) {
      var _this = this;

      return $http
        .get('/api/products/' + id)
        .error(function (data, status, headers, config) {
          $window.alert('Oups: ' + status);
        })
        .then(function (response) {
          var product = response.data[0];
          return _this.getProductStock(product.id, 0, 0)
            .then(function (stock) {
              product.stock = stock.stock;
              product.modelId = stock.modelId;
              return product;
            });
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

    this.getProductStock = function (id, size, color) {
      return $http
        .get('/api/products/' + id + '/stock', { params: { size: size, color: color } })
        .error(function (data, status, headers, config) {
          $window.alert('Oups: ' + status);
        })
        .then(function (response) {
          return response.data;
        });
    };

    this.subscribeToAvailability = function (product) {
      availabilitySocket.on('productAvailable:' + product.modelId, function (product) {
        $rootScope.$broadcast('productSrv:productAvailable', product);
        $rootScope.$apply();
      });
    };
	}

  ProductSrv.$inject = [ '$rootScope', '$window', '$http' ];

  return ProductSrv;
});

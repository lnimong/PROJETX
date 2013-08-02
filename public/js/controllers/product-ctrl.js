define(function () {
  'use strict';

  function ProductCtrl ($scope, $routeParams, $q, productSrv, cartSrv) {
    $scope.product = productSrv.getProduct($routeParams.id);
    $scope.selectedSize = null;
    $scope.selectedColor = null;

    $scope.$watch('product', function (newProduct, oldProduct) {
      if (newProduct) {
        $scope.selectedSize = newProduct.sizes.length ? newProduct.sizes[0] : '';
        $scope.selectedColor = newProduct.colors.length ? newProduct.colors[0] : '';
      }
    });

    $scope.addToCart = function () {
      if (!$scope.productForm.$valid) {
        return;
      }

      cartSrv.addToCart($scope.product.$$v);
    };

    $scope.subscribeToAvailability = function () {
      productSrv.subscribeToAvailability($scope.product.$$v);
    };

    $scope.refreshStock = function () {
      productSrv.getProductStock($scope.product.$$v.id, $scope.selectedSize, $scope.selectedColor)
        .then(function (stock) {
          $scope.product.$$v.stock = stock.stock;
          $scope.product.$$v.modelId = stock.modelId;
        });
    };
  }

  ProductCtrl.$inject = [ '$scope', '$routeParams', '$q', 'productSrv', 'cartSrv' ];

  return ProductCtrl;
});

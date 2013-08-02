define(function () {
  'use strict';

  function ProductCtrl ($scope, $routeParams, $q, productSrv, cartSrv) {
    $scope.product = productSrv.getProduct($routeParams.id);
    $scope.selectedSize = null;

    $scope.$watch('product', function (newProduct, oldProduct) {
      if (newProduct) {
        $scope.selectedSize = newProduct.sizes.length ? newProduct.sizes[0] : '';
      }
    });

    $scope.addToCart = function () {
      if (!$scope.productForm.$valid) {
        return;
      }

      cartSrv.addToCart($scope.product.$$v, $scope.selectedSize);
    };

    $scope.subscribeToAvailability = function () {
      productSrv.subscribeToAvailability($scope.product.$$v);
    };
  }

  ProductCtrl.$inject = [ '$scope', '$routeParams', '$q', 'productSrv', 'cartSrv' ];

  return ProductCtrl;
});

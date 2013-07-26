define(function () {
  'use strict';

  function ProductCtrl ($scope, $routeParams, productSrv, cartSrv) {
    function loadProduct (id) {
      productSrv.getProduct(id).then(function (product) {
        $scope.product = product;
      }, function (error) {
        // TODO: handle error
      });
    }

    $scope.product = null;
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

      cartSrv.addToCart($scope.product, $scope.selectedSize).then(function () {
        // ok
      }, function (error) {
        // TODO: handle error
      });
    };

    loadProduct($routeParams.id);
  }

  ProductCtrl.$inject = [ '$scope', '$routeParams', 'productSrv', 'cartSrv' ];

  return ProductCtrl;
});

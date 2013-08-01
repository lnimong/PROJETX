define(function () {
  'use strict';

  function CatalogCtrl ($scope, productSrv) {
    $scope.products = productSrv.getProducts();
  }

  CatalogCtrl.$inject = [ '$scope', 'productSrv' ];

  return CatalogCtrl;
});

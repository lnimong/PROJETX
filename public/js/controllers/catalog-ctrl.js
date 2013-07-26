define(function () {
  'use strict';

  function CatalogCtrl ($scope, productSrv) {
  		productSrv.getProducts(function(products) {
  			$scope.products = products;
  		})		
  }

  CatalogCtrl.$inject = [ '$scope', 'productSrv' ];

  return CatalogCtrl;
});

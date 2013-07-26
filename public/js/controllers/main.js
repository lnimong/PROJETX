define([
  'angular',
  './catalog-ctrl',
  './product-ctrl',
  './suggested-products-ctrl',
  'services'
], function (angular,
             CatalogCtrl,
             ProductCtrl,
             SuggestedProductsCtrl) {
  'use strict';

  return angular.module('projectX.controllers', [ 'projectX.services' ])
                .controller('CatalogCtrl', CatalogCtrl)
                .controller('ProductCtrl', ProductCtrl)
                .controller('SuggestedProductsCtrl', SuggestedProductsCtrl);
});

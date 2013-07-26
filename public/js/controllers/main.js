define([
  'angular',
  './catalog-ctrl',
  './product-ctrl'
], function (angular,
             CatalogCtrl,
             ProductCtrl) {
  'use strict';

  return angular.module('projectX.controllers', [])
                .controller('CatalogCtrl', CatalogCtrl)
                .controller('ProductCtrl', ProductCtrl);
});

define([
  'angular',
  './catalog-ctrl',
  './product-ctrl',
  'services'
], function (angular,
             CatalogCtrl,
             ProductCtrl) {
  'use strict';

  return angular.module('projectX.controllers', [ 'projectX.services' ])
                .controller('CatalogCtrl', CatalogCtrl)
                .controller('ProductCtrl', ProductCtrl);
});

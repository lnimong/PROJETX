define([
  'angular',
  './catalog-ctrl',
  './product-ctrl',
  './suggested-products-ctrl',
  './notifications-ctrl',
  'services'
], function (angular,
             CatalogCtrl,
             ProductCtrl,
             SuggestedProductsCtrl,
             NotificationsCtrl) {
  'use strict';

  return angular.module('projectX.controllers', [ 'projectX.services' ])
                .controller('CatalogCtrl', CatalogCtrl)
                .controller('ProductCtrl', ProductCtrl)
                .controller('SuggestedProductsCtrl', SuggestedProductsCtrl)
                .controller('NotificationsCtrl', NotificationsCtrl);
});

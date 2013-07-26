define([
  'angular',
  './product-srv'
], function (angular,
             ProductSrv) {
  'use strict';

  return angular.module('projectX.services', [])
                .service('productSrv', ProductSrv);
});

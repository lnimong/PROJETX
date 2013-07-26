define([
  'angular',
  './product-srv',
  './cart-srv'
], function (angular,
             ProductSrv,
             CartSrv) {
  'use strict';

  return angular.module('projectX.services', [])
                .service('productSrv', ProductSrv)
                .service('cartSrv', CartSrv);
});

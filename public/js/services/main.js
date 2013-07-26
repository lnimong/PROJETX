define([
  'angular',
  './product-srv',
  './cart-srv',
  './suggestion-srv'
], function (angular,
             ProductSrv,
             CartSrv,
             SuggestionSrv) {
  'use strict';

  return angular.module('projectX.services', [])
                .service('productSrv', ProductSrv)
                .service('cartSrv', CartSrv)
                .service('suggestionSrv', SuggestionSrv);
});

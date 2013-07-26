define(function () {
  'use strict';

  function SuggestedProductsCtrl ($scope) {
    $scope.products = null;

    $scope.$on('suggestionSrv:suggestedProducts', function (event, products) {
      $scope.products = products;
    });
  }

  SuggestedProductsCtrl.$inject = [ '$scope' ];

  return SuggestedProductsCtrl;
});

define(function () {
  'use strict';

  function SuggestedProductsCtrl ($scope) {
    $scope.canBeVisible = false;
    $scope.productGroups = null;
    $scope.interval = 5000;

    $scope.$on('suggestionSrv:suggestedProducts', function (event, products) {
      var i, len;

      $scope.canBeVisible = true;
      $scope.productGroups = []; // Multiple groups of products

      for (i = 0, len = products.length; i < len; i++) {
        if (i % 3 === 0) {
          // Push a new group. Each group has at most 3 products.
          $scope.productGroups.push({ products: [] });
        }

        // Push the current product in the current group.
        $scope.productGroups[$scope.productGroups.length - 1]
              .products.push(products[i]);
      }
    });
  }

  SuggestedProductsCtrl.$inject = [ '$scope' ];

  return SuggestedProductsCtrl;
});

define(function () {
  'use strict';

  function NotificationsCtrl ($scope) {
    $scope.notifications = [];

    $scope.$on('productSrv:productAvailable', function (event, product) {
      $scope.notifications.push({
        url: '/product/' + product.id,
        message: 'Le produit ' + product.name + ' est à nouveau disponible'
      });
    });

    $scope.clear = function () {
      $scope.notifications.length = 0;
    };
  }

  NotificationsCtrl.$inject = [ '$scope' ];

  return NotificationsCtrl;
});

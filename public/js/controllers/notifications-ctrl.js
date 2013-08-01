define(function () {
  'use strict';

  function NotificationsCtrl ($scope) {
    $scope.notifications = [];
  }

  NotificationsCtrl.$inject = [ '$scope' ];

  return NotificationsCtrl;
});

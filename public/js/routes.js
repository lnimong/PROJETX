define([
  'app'
], function (app) {
  'use strict';

  return app.config([
    '$locationProvider',
    '$routeProvider',
    function ($locationProvider, $routeProvider) {
      function redirect (path) {
        window.location.href = path;
      }

      $locationProvider.html5Mode(true);
      $routeProvider.when('/catalog', { templateUrl: 'partials/catalog.html', controller: 'CatalogCtrl' })
                    .when('/product/:id', { templateUrl: 'partials/product.html', controller: 'ProductCtrl' })
                    .when('/logout', { redirectTo: redirect.bind(this, '/logout') })
                    .otherwise({ redirectTo: '/catalog' });
    }
  ]);
});

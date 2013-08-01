define([
  'angular',
  'text!partials/catalog.html',
  'text!partials/product.html',
  'text!partials/suggested-products.html',
  'text!partials/notifications.html'
], function (angular,
             catalogTemplate,
             productTemplate,
             suggestedProductsTemplate,
             notificationsTemplate) {
  'use strict';

  var partialsTemplatesModule = angular.module('projectX.templates.partials', []);

  partialsTemplatesModule.run(['$templateCache', function ($templateCache) {
    $templateCache.put('partials/catalog.html', catalogTemplate);
    $templateCache.put('partials/product.html', productTemplate);
    $templateCache.put('partials/suggested-products.html', suggestedProductsTemplate);
    $templateCache.put('partials/notifications.html', notificationsTemplate);
  }]);

  return partialsTemplatesModule;
});

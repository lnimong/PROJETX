define([
  'angular',
  'text!partials/catalog.html',
  'text!partials/product.html',
  'text!partials/suggested-products.html'
], function (angular,
             catalogTemplate,
             productTemplate,
             suggestedProductsTemplate) {
  'use strict';

  var partialsTemplatesModule = angular.module('projectX.templates.partials', []);

  partialsTemplatesModule.run(['$templateCache', function ($templateCache) {
    $templateCache.put('partials/catalog.html', catalogTemplate);
    $templateCache.put('partials/product.html', productTemplate);
    $templateCache.put('partials/suggested-products.html', suggestedProductsTemplate);
  }]);

  return partialsTemplatesModule;
});

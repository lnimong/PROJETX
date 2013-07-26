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

  var partialsTemplateModule = angular.module('projectX.templates.partials', []);

  partialsTemplateModule.run(['$templateCache', function ($templateCache) {
    $templateCache.put('partials/catalog.html', catalogTemplate);
    $templateCache.put('partials/product.html', productTemplate);
    $templateCache.put('partials/suggested-products.html', suggestedProductsTemplate);
  }]);

  return partialsTemplateModule;
});

define([
  'angular',
  'text!partials/catalog.html',
  'text!partials/product.html'
], function (angular,
             catalogTemplate,
             productTemplate) {
  'use strict';

  var partialsTemplateModule = angular.module('projectX.templates.partials', []);

  partialsTemplateModule.run(['$templateCache', function ($templateCache) {
    $templateCache.put('partials/catalog.html', catalogTemplate);
    $templateCache.put('partials/product.html', productTemplate);
  }]);

  return partialsTemplateModule;
});

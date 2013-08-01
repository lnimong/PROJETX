define([
  'angular',
  'text!angular-ui-bootstrap-template/carousel/carousel.html',
  'text!angular-ui-bootstrap-template/carousel/slide.html'
], function (angular,
             carouselTemplate,
             slideTemplate) {
  'use strict';

  var angularUiTemplatesModule = angular.module('projectX.templates.angular-ui-template', []);

  angularUiTemplatesModule.run(['$templateCache', function ($templateCache) {
    $templateCache.put('template/carousel/carousel.html', carouselTemplate);
    $templateCache.put('template/carousel/slide.html', slideTemplate);
  }]);

  return angularUiTemplatesModule;
});

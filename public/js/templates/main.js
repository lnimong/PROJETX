define([
  'angular',
  './partials-tpls',
  './angular-ui-bootstrap-tpls',
  'angular-ui-bootstrap-collapse',
  'angular-ui-bootstrap-carousel'
], function (angular,
             partialsTemplates,
             angularUiBootstrapTemplates) {
  'use strict';

  return angular.module('projectX.templates', [
    'ui.bootstrap.collapse',
    'ui.bootstrap.carousel',
    partialsTemplates.name,
    angularUiBootstrapTemplates.name
  ]);
});

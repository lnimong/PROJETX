define([
  'angular',
  './partials-tpls',
  './angular-ui-bootstrap-tpls',
  'angular-ui-bootstrap-collapse',
  'angular-ui-bootstrap-carousel',
  'angular-ui-bootstrap-dropdownToggle'
], function (angular,
             partialsTemplates,
             angularUiBootstrapTemplates) {
  'use strict';

  return angular.module('projectX.templates', [
    'ui.bootstrap.collapse',
    'ui.bootstrap.carousel',
    'ui.bootstrap.dropdownToggle',
    partialsTemplates.name,
    angularUiBootstrapTemplates.name
  ]);
});

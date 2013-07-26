define([
  'angular',
  './partials-tpls',
  'angular-ui-bootstrap-collapse'
], function (angular,
             partialsTemplates) {
  'use strict';

  return angular.module('projectX.templates', [
    'ui.bootstrap.collapse',
    partialsTemplates.name
  ]);
});

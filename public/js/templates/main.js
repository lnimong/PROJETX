define([
  'angular',
  './partials-tpls'
], function (angular,
             partialsTemplates) {
  'use strict';

  return angular.module('projectX.templates', [
    partialsTemplates.name
  ]);
});

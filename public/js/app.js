define([
  'angular',
  'controllers',
  'services'
], function (angular) {
  'use strict';

  var projectX = angular.module('projectX', [
    'projectX.controllers',
    'projectX.services'
  ]);

  projectX.run([ 'suggestionSrv', function (suggestionSrv) {
  	suggestionSrv.start();
  }]);

  return projectX;
});

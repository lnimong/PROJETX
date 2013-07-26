require.config({
  paths: {
    'partials': '../partials',
    'text': '../components/requirejs-text/text',
    'jquery': '../components/jquery/jquery',
    'angular': '../components/angular-unstable/angular'
  },
  shim: {
    angular: {
      deps: [ 'jquery' ], // replace jqLite by jquery
      exports: 'angular'
    }
  },
  packages: [
    'controllers',
    'templates'
  ]
});


require([
  'angular',
  'app',
  'templates',
  'routes'
], function (angular, app, templates) {
  'use strict';

  var doc = angular.element(document);
  doc.ready(function () {
    var html = doc.find('html');
    angular.bootstrap(html, [ app.name, templates.name ]);
    // Because of RequireJS we need to bootstrap the app app manually
    // and Angular Scenario runner won't be able to communicate with our app
    // unless we explicitely mark the container as app holder
    // More info: https://groups.google.com/forum/#!msg/angular/yslVnZh9Yjk/MLi3VGXZLeMJ
    html.addClass('ng-app');
  });
});

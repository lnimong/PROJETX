require.config({
  paths: {
    'partials': '../partials',
    'socketio': '/socket.io/socket.io',
    'text': '../components/requirejs-text/text',
    'jquery': '../components/jquery/jquery',
    'angular': '../components/angular-unstable/angular',
    'angular-ui-bootstrap-template': '../components/angular-ui-bootstrap/template',
    'angular-ui-bootstrap-dropdownToggle': '../components/angular-ui-bootstrap/src/dropdownToggle/dropdownToggle',
    'angular-ui-bootstrap-transition': '../components/angular-ui-bootstrap/src/transition/transition',
    'angular-ui-bootstrap-collapse': '../components/angular-ui-bootstrap/src/collapse/collapse',
    'angular-ui-bootstrap-carousel': '../components/angular-ui-bootstrap/src/carousel/carousel'
  },
  shim: {
    angular: {
      deps: [ 'jquery' ], // replace jqLite by jquery
      exports: 'angular'
    },
    'angular-ui-bootstrap-transition': {
      deps: [ 'angular' ]
    },
    'angular-ui-bootstrap-dropdownToggle': {
      deps: [ 'angular' ]
    },
    'angular-ui-bootstrap-collapse': {
      deps: [ 'angular-ui-bootstrap-transition' ]
    },
    'angular-ui-bootstrap-carousel': {
      deps: [ 'angular-ui-bootstrap-transition' ]
    }
  },
  packages: [
    'controllers',
    'services',
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

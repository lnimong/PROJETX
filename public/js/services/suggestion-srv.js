define([
	'socketio'
], function (socketio) {
  'use strict';

  function SuggestionSrv ($rootScope) {
  	var socket = socketio.connect().socket;

  	this.start = function () {
  		socket.of('suggestions').on('products', function (products) {
  			$rootScope.$broadcast('suggestionSrv:suggestedProducts', products);
  			$rootScope.$apply();
  		});
  	}
  }

  SuggestionSrv.$inject = [ '$rootScope' ];

  return SuggestionSrv;
});

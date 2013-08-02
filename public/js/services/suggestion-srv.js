define([
	'socketio'
], function (socketio) {
  'use strict';

  function SuggestionSrv ($rootScope) {
    var suggestionsSocket = socketio.connect().socket.of('suggestions');

    this.start = function () {
      suggestionsSocket.on('products', function (products) {
        $rootScope.$broadcast('suggestionSrv:suggestedProducts', products);
        $rootScope.$apply();
      });
    };
  }

  SuggestionSrv.$inject = [ '$rootScope' ];

  return SuggestionSrv;
});

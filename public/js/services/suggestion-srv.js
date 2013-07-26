define(function () {
  'use strict';

  function SuggestionSrv ($rootScope) {
    function publishSuggestedProducts (products) {
      $rootScope.$broadcoast('suggestionSrv:suggestedProducts', products);
    }
  }

  SuggestionSrv.$inject = [ '$rootScope' ];

  return SuggestionSrv;
});

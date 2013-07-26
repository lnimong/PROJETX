define(function () {
  'use strict';

  	function ProductSrv ($http) {

	  	this.getProducts = function (callback) {
		    $http({method: 'GET', url: '/api/products/'}).
		    success(function(data, status, headers, config) {
		    	callback(data);
		    }).
		    error(function(data, status, headers, config) {

		    });
	  	}

	}

  ProductSrv.$inject = [ '$http' ];



  return ProductSrv;
});

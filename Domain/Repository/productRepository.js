

	exports.getAllProducts = function () {
		return [ {'product':{  'name':'t-shirt bleu', 'description': '', 'imageUrl':'http://ecx.images-amazon.com/images/I/41o8ASd%2B%2B%2BL._SX342_.jpg', 'price':50, 'id':1} }, 
    	{'product':{ 'name':'pantalon', 'imageUrl':'http://ecx.images-amazon.com/images/I/41o8ASd%2B%2B%2BL._SX342_.jpg', 'price':50, 'id':2}}, 
    	{'product':{ 'name':'chaussure marron', 'imageUrl':'http://ecx.images-amazon.com/images/I/41o8ASd%2B%2B%2BL._SX342_.jpg', 'price':33.5, 'id':3}}];
	};

	exports.getProduct = function (id) {
		return {'product':{ 'name':'t-shirt bleu', 'imageUrl':'http://ecx.images-amazon.com/images/I/41o8ASd%2B%2B%2BL._SX342_.jpg', 'price':50, 'id':1, 'sizes':['M','L', 'XL']}};
	};

	exports.getSuggestions = function () {
		return [ {'product':{  'name':'t-shirt bleu', 'description': '', 'imageUrl':'http://ecx.images-amazon.com/images/I/41o8ASd%2B%2B%2BL._SX342_.jpg', 'price':50, 'id':1} }, 
    	{'product':{ 'name':'pantalon', 'imageUrl':'http://ecx.images-amazon.com/images/I/41o8ASd%2B%2B%2BL._SX342_.jpg', 'price':50, 'id':2}}, 
    	{'product':{ 'name':'chaussure marron', 'imageUrl':'http://ecx.images-amazon.com/images/I/41o8ASd%2B%2B%2BL._SX342_.jpg', 'price':33.5, 'id':3}}];
	};
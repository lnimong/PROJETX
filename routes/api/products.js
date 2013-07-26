var productRepository = require('../../domain/repository/productRepository');

exports.all = function(req, res){
    productRepository.getAllProducts(function (err, data)
    	{
    		res.send(data);
    	});
};

exports.product = function(req, res){
    res.send(productRepository.getProduct(req.id));
};

exports.suggestions = function(req, res){
    res.send(productRepository.getSuggestions());
};

var productRepository = require('../../domain/repository/productRepository');

exports.all = function(req, res){
    productRepository.getAllProducts(function (err, data)
    	{
    		res.send(data);
    	});
};

exports.product = function(req, res){
    productRepository.getProduct(req.params.id, function (err, data)
	{
		res.send(data);
	});
};

exports.productStock = function(req, res){
    productRepository.getProductStock(req.params.id, req.params.color, req.params.size, req.params.sex, function (err, data)
	{
		res.send(data);
	});
};

exports.suggestions = function(req, res){
    res.send(productRepository.getSuggestions());
};

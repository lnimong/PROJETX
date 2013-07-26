var productRepository = require('../../domain/repository/productRepository');

exports.all = function(req, res){
    res.send(productRepository.getAllProducts());
};

exports.product = function(req, res){
    res.send(productRepository.getProduct(req.id));
};

exports.suggestions = function(req, res){
    res.send(productRepository.getSuggestions());
};

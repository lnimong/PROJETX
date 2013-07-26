
exports.all = function(req, res){
    res.send(
    	[{ "t-shirt bleu", "http://g-ecx.images-amazon.com/images/G/08/apparel/rcxgs/tile._V211468500_.gif", 50, 1}, 
    	{ "pantalon", "http://g-ecx.images-amazon.com/images/G/08/apparel/rcxgs/tile._V211468500_.gif", 50, 2}, 
    	{ "chaussure marron", "http://g-ecx.images-amazon.com/images/G/08/apparel/rcxgs/tile._V211468500_.gif", 33.5, 3}]);
};

exports.product = function(req, res){
    res.send({ 't-shirt bleu", "http://g-ecx.images-amazon.com/images/G/08/apparel/rcxgs/tile._V211468500_.gif', 50, 1, 'L'});
};

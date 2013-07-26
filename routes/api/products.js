
exports.all = function(req, res){
    res.send(
    	[ {'product':{  'name':'t-shirt bleu', 'urlImage':'http://g-ecx.images-amazon.com/images/G/08/apparel/rcxgs/tile._V211468500_.gif', 'price':50, 'id':1} }, 
    	{'product':{ 'name':'pantalon', 'urlImage':'http://g-ecx.images-amazon.com/images/G/08/apparel/rcxgs/tile._V211468500_.gif', 'price':50, 'id':2}}, 
    	{'product':{ 'name':'chaussure marron', 'urlImage':'http://g-ecx.images-amazon.com/images/G/08/apparel/rcxgs/tile._V211468500_.gif', 'price':33.5, 'id':3}}]);
};

exports.product = function(req, res){
    res.send({'product':{ 'name':'t-shirt bleu', 'urlImage':'http://g-ecx.images-amazon.com/images/G/08/apparel/rcxgs/tile._V211468500_.gif', 'price':50, 'id':1, 'sizes':['M','L', 'XL']}});
};

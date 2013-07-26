var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase('http://localhost:7474');

	exports.getAllProducts = function (onResults) {
            db.query('START product=node(*) MATCH (product)-[:DE_MODELE]->() RETURN DISTINCT product.id as id, product.name as name, product.description as description, product.price as price, product.imageUrl as imageUrl', {}, onResults);
	};

    exports.getProduct = function (id, onResults) {
            db.query("START product=node:node_auto_index(id='" + id + "') MATCH (product)-[:DE_MODELE]->(modele)-[?:DE_TAILLE]->(taille),(product)-[:DE_MODELE]->(modele)-[?:DE_COULEUR]->(couleur) RETURN DISTINCT product.id as id, product.name as name, product.description as description, collect(taille.name) as sizes, product.imageUrl as imageUrl", 
                {'id': id}, onResults);
    };

	exports.getSuggestions = function () { 
		return [
			{ 'name':'t-shirt bleu', 'description': '', 'imageUrl':'http://ecx.images-amazon.com/images/I/41o8ASd%2B%2B%2BL._SX342_.jpg', 'price':50, 'id':1} , 
    		{ 'name':'pantalon', 'imageUrl':'http://ecx.images-amazon.com/images/I/41o8ASd%2B%2B%2BL._SX342_.jpg', 'price':50, 'id':2}, 
    		{ 'name':'chaussure marron', 'imageUrl':'http://ecx.images-amazon.com/images/I/41o8ASd%2B%2B%2BL._SX342_.jpg', 'price':33.5, 'id':3}
		];
	};



/*var log = function (next) {    // ...this is what actually persists.

	return function(err, node){
    	if (err) {
        	console.log('Error saving new node to database:', err);
    	} else {
        	console.log('Node saved to database with id:', node.id);
    	}
    	next(node);
	}

};

exports.getAllProducts = db.query('START product=node(*)
MATCH (product)-[:DE_MODELE]->()
RETURN product.name as name, product.description as description, 
product.price as price, product.imageUrl as imageUrl', {}, log(function(node){
}));*/
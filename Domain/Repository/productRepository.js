var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase('http://localhost:7474');

exports.getAllProducts = function (onResults) {
            db.query('START product=node(*) MATCH (product)-[:DE_MODELE]->() RETURN DISTINCT product.id as id, product.name as name, product.description as description, product.price as price, product.imageUrl as imageUrl', {}, onResults);
};

exports.getProduct = function (id, onResults) {
            db.query("START product=node:node_auto_index(id={id}) MATCH (product)-[:DE_MODELE]->(modele)-[?:DE_TAILLE]->(taille),(product)-[:DE_MODELE]->(modele)-[?:DE_COULEUR]->(couleur) RETURN DISTINCT product.id as id, product.name as name, product.description as description, collect(taille.name) as sizes, product.imageUrl as imageUrl, product.price as price", 
                {id: id}, onResults);
};

exports.getProductStock = function (id, color, size, onResults) {
            db.query("START product=node:node_auto_index(id={id})"+ 
                "MATCH (product)-[:DE_MODELE]->(modele)-[?:DE_TAILLE]->(taille),(product)-[:DE_MODELE]->(modele)-[?:DE_COULEUR]->(couleur)"+
                "WHERE couleur.name={color} and taille.name={size} RETURN DISTINCT modele.mid as modelId, modele.stock as stock", {id:id, color:color, size:size}, onResults);
};

exports.getSuggestions = function (modelId, onResults) { 
        db.query("START model=node:node_auto_index(mid={id}) "+ 
                  "MATCH (genre)-[:CONVIENT_A]-(model)<-[:DE_MODELE]-(produit) " +
                                             "-[:EST_UN]->(template) " + 
                                             "-[:S_ASSOCIE_AVEC]-(complement) " +
                                             "<-[:EST_UN]-(comp_produit) " +
                                             "-[:DE_MODELE]->(comp_model) " +
                                             "-[:CONVIENT_A]->(produit_sex) " +
                  "WHERE produit_sex.sex = genre.sex " +
                  "RETURN DISTINCT comp_produit.name as name, comp_produit.description as description, " +
                                   "comp_produit.imageUrl as imageUrl, comp_produit.price as price, " +
                                   "comp_produit.id as id;", {id:modelId}, onResults);
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

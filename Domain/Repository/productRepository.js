var neo4j = require('neo4j');
var fs = require('fs');
var path = require('path');
var db = new neo4j.GraphDatabase('http://localhost:7474');

var getAllProductsQuery = fs.readFileSync(__dirname +"/CypherQueries/getAllProductsQuery.cql", "UTF8");

	exports.getAllProducts = function (onResults) {
            db.query(getAllProductsQuery, {}, onResults);
	};

    exports.getProduct = function (id, onResults) {
            db.query("START product=node:node_auto_index(id={id}) MATCH (product)-[:DE_MODELE]->(modele)-[?:DE_TAILLE]->(taille),(product)-[:DE_MODELE]->(modele)-[?:DE_COULEUR]->(couleur) RETURN DISTINCT product.id as id, product.name as name, product.description as description, collect(taille.name) as sizes, product.imageUrl as imageUrl, product.price as price", 
                {id: id}, onResults);
    };

 exports.getProductStock = function (id, color, size, sex, onResults) {
            return { 'modelId': 5, 'stock':0 };
    };

	exports.getSuggestions = function (id, onResults) { 
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
                                   "comp_produit.id as id;", {id:id}, onResults);
	};

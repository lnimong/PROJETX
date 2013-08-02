var neo4j = require('neo4j');
var fs = require('fs');
var path = require('path');
var db = new neo4j.GraphDatabase('http://localhost:7474');

var getAllProductsQuery = fs.readFileSync(__dirname +"/CypherQueries/getAllProductsQuery.cql", "UTF8");
var getProduct = fs.readFileSync(__dirname +"/CypherQueries/getProduct.cql", "UTF8");

exports.getAllProducts = function (onResults) {
            db.query(getAllProductsQuery, {}, onResults);
};

exports.getProduct = function (id, onResults) {
            db.query(getProduct, {id: id}, onResults);
};

exports.getProductStock = function (id, color, size, onResults) {
    onResults(null, { modelId: 5, stock: 1 });
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

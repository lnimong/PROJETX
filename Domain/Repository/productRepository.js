var neo4j = require('neo4j');
var fs = require('fs');
var path = require('path');
var db = new neo4j.GraphDatabase('http://localhost:7474');

var getAllProductsQuery = fs.readFileSync(__dirname +"/CypherQueries/getAllProductsQuery.cql", "UTF8");
var getProduct = fs.readFileSync(__dirname +"/CypherQueries/getProduct.cql", "UTF8");
var getSuggestions = fs.readFileSync(__dirname +"/CypherQueries/getSuggestions.cql", "UTF8");

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
        db.query(getSuggestions, {mid:modelId}, onResults);
};

var evPublisher = require('pubsub-js');
var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase('http://localhost:7474');

exports.addToCart = function (mid, size, callback) {
	callback(null);
	console.log('produit ajouté');
} 
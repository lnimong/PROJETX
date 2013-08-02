var evPublisher = require('pubsub-js');
var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase('http://localhost:7474');

exports.resetStock  = function (mid, stock, callback) {
	
	db.query("START m=node:node_auto_index(mid={mid}) SET m.stock = {stock} RETURN m.mid as mid, m.stock as stock", {'stock' : stock, 'mid' : mid}, function (err, data) {
		
		if(err) {
			callback({
				message : 'la requête de diminution de la quantité a échoué pour ce modèle : ' + mid
			});
			return;
		}	
		callback(null, {
			mid : mid,
			stock : stock
		});
	});
}

exports.decreaseModelQuantity = function (mid, callback) {

	db.query("START m=node:node_auto_index(mid={mid}) RETURN DISTINCT m.stock as stock", {'mid': mid}, function(err, data) {
		
		if(err) {
			callback({ 
				message : 'une erreur est survenue lors de la récupération de ce modèle : ' + mid ,
				meo4jError : err
			});
			return;
		}

		var newStock = data[0].stock;
		if(newStock > 0) {
			newStock --;
			exports.resetStock(mid, newStock, callback);
		}
		else {
			callback({
				message : 'les stocks  sont déjà épuisés pour ce modèle : ' + mid
			});
			return //ERR
		}
	});
} 

exports.increaseModelQuantity = function (mid, callback) {

	db.query("START m=node:node_auto_index(mid={mid}) RETURN DISTINCT m.stock as stock", {'mid': mid}, function(err, data) {
	
		if(err) {
			callback({ 
				message : 'une erreur est survenue lors de la récupération de ce modèle : ' + mid ,
				meo4jError : err
			});
			return;
		}
		var newStock = data[0].stock + 1;
		exports.resetStock(mid, newStock, callback);
	});
} 


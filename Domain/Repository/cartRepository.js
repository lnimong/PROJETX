var evPublisher = require('pubsub-js');

exports.addToCart = function (productId, size, callback) {

	callback(null);
	console.log('produit ajouté');
	evPublisher.publish('productAdded');
} 
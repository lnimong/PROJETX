var evPublisher = require('pubsub-js');

exports.addToCart = function (modelId, size, callback) {
	callback(null);
	console.log('produit ajouté');
	evPublisher.publish('productAdded', { modelId : modelId });
} 
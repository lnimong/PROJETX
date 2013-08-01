var evPublisher = require('pubsub-js');

exports.setQuantity = function (req, res) {

	evPublisher.publish('productAvailable', {
		id : req.body.id,
		modelId : req.body.modelId
	});
}
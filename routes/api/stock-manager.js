var evPublisher = require('pubsub-js');

exports.setQuantity = function (req, res) {

	evPublisher.publish('productAvailable', {
		modelId : req.body.modelId
	});
	res.send('ok');
}
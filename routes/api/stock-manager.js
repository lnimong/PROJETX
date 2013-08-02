var evPublisher = require('pubsub-js');
var stockRepository =  require('../../domain/repository/stockRepository')


exports.setQuantity = function (req, res) {


	evPublisher.publish('productAvailable', {
		modelId : req.body.modelId
	});
	res.send('ok');
}
var sio = require('socket.io');
var evPublisher = require('pubsub-js');

exports.subscribeToProduct = function(req, res) {

	var io = sio.listen(server);

	io.of('suggestions').on('connection', function (socket) {

		evPublisher.subscribe( 'productAvailable', function () {
			socket.emit('productAvailable', productsRepository.getProduct(req.body.id));
		});
	});
}

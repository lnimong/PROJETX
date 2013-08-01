var sio = require('socket.io');
var evPublisher = require('pubsub-js');
var productsRepository = require('../domain/repository/productRepository');

exports.listen = function (server) {

	var io = sio.listen(server);

	io.of('suggestions').on('connection', function (socket) {

		evPublisher.subscribe( 'productAdded', function (msg, data) {
			socket.emit('products', productsRepository.getSuggestions(data.id));
		});

	});
}
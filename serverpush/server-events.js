var sio = require('socket.io');
var evPublisher = require('pubsub-js');
var productsRepository = require('../domain/repository/productRepository');

exports.listen = function (server) {
	var io = sio.listen(server);

	io.of('suggestions').on('connection', function (socket) {
		evPublisher.subscribe('productAdded', function (msg, product) {
			socket.emit('products', productsRepository.getSuggestions(product.id));
		});
	});

	io.of('availability').on('connection', function (socket) {
		evPublisher.subscribe('productAvailable', function (msg, product) {
			socket.emit('productAvailable:'+product.id, product);
		});
	});
}
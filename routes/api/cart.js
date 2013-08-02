var cartRepository = require('../../domain/repository/cartRepository');
var stockRepository = require('../../domain/repository/stockRepository');
var evPublisher = require('pubsub-js');

exports.addToCart = function(req, res) {
	var mid = req.body.modelId;
	
 	stockRepository.decreaseModelQuantity(mid, function (decrErr, data) {
 		if (decrErr) {
			res.send({
				success : false,
				error : decrErr
			});
			return;
		}

		cartRepository.addToCart(mid, function (addErr) {
			if (addErr) {
				stockRepository.increaseModelQuantity(mid, function() {
					res.send({
						success : false,
						error : addErr
					});
				});
				return;
			}

			evPublisher.publish('productAdded', { modelId : mid });
			res.send({
				success : true
			});
		});

 	});
};

var cartRepository = require('../../domain/repository/cartRepository');
var stockRepository = require('../../domain/repository/stockRepository');

exports.addToCart = function(req, res) {

	var mid = req.body.id;
	
 	stockRepository.decreaseModelQuantity(mid, function(decrErr, data) {

 		if(err) {
			res.send({
				success : false,
				error : err
			});
			return;
		}


		cartRepository.addToCart(mid, function(addErr) {
			if(err) {
				stockRepository.increaseModelQuantity(mid, function() {
					res.send({
						success : false,
						error : addErr
					});
				});
				return;
			}

			evPublisher.publish('productAdded', { id : mid });
			res.send({
				success : true
			});
		});

 	})
};
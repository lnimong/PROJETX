var cartRepository = require('../../domain/repository/cartRepository');

exports.addToCart = function(req, res) {

	cartRepository.addToCart(req.body.id, req.body.size, function(err) {
		if(err) {
			res.send({
				success : false
			});
			return;
		}

		res.send({
			success : true
		});
	});
};
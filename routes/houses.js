var express = require('express');
var router = express.Router();

var House = require('../models/house');

//Do Crud Things:

router.get('/', (req, res) => {
	House.find({}, (err, houses) => {
		if(err) {
			res.status(400).send(err);
		} else {
			res.send(houses);
		}
	});
});

router.post('/', (req, res) => {
	var house = new House(req.body);

	house.save((err, savedHouse) => {
		if(err) {
			res.status(400).send(err);
		} else {
			res.send(savedHouse);
		}
	});
});


// router.get('/:category', (req, res) => {
// 	Card.find({category: req.params.category}, (err, cards) => {
// 		if(err) {
// 			res.status(400).send(err);
// 		} else {
// 			res.send(cards);
// 		}
// 	})

// })

module.exports = router;
var express = require('express');
var router = express.Router();

var Dog = require('../models/dog');

//Do Crud Things:

router.get('/', (req, res) => {
	Dog.find({}, (err, dogs) => {
		if(err) {
			res.status(400).send(err);
		} else {
			res.send(dogs);
		}
	});
});

router.post('/', (req, res) => {
	var dog = new Dog(req.body);

	dog.save((err, savedDog) => {
		if(err) {
			res.status(400).send(err);
		} else {
			res.send(savedDog);
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
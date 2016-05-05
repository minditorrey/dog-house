var express = require('express');
var router = express.Router();

var Dog = require('../models/dog');

//Do Crud Things:



router.route('/')
	.get((req, res) => {
		Dog.find({}, (err, dogs) => {
			res.status(err ? 400 : 200).send(err || dogs);
		});
	})

	.post((req, res) => {
		var dog = new Dog(req.body);
		dog.save((err, savedDog) => {
		res.status(err ? 400 : 200).send(err || dog);
		});	
	});

router.route('/:id')
	.delete((req, res) => {
		var dog = (req.body)
		Dog.findByIdAndRemove(req.params.id, (err, dog) => {
			res.status(err ? 400 : 200).send(err);
		})
	})
	.put((req, res) => {
		Dog.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, dog) => {
			res.status(err ? 400 : 200).send(err || dog)
		})
	})
	

// Dog
// 	.find({})
// 	.sort({color: black})
// 	.exec((err, dogs) => {
// 		res.status(err ? 400 : 200).send(err || dogs);
// 	})

router.route('/weightSort')
	.get((req, res) => {
		Dog
			.find({age: {$gte: 8}})
			.sort('-age')
			.exec((err, dogs) => {
				res.status(err ? 400 : 200).send(err || dogs);
			});
	})


		

module.exports = router;
var express = require('express');
var router = express.Router();

var House = require('../models/house');
var Dog = require('../models/dog');

//Do Crud Things:

router.route('/')
	.get((req, res) => {
		House.find({}, (err, houses) => {
			res.status(err ? 400 : 200).send(err || houses);
		});
	})

	.post((req, res) => {
		var house = new House(req.body);
		house.save((err, savedHouse) => {
			res.status(err ? 400 : 200).send(err || house);
		})
	})

router.route('/:id')
	.delete((req, res) => {
		var house = (req.body)
		House.findByIdAndRemove(req.params.id, (err, house) => {
			res.status(err ? 400 : 200).send(err);
		})
	})
	.put((req, res) => {
		House.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, house) => {
			res.status(err ? 400 : 200).send(err || house)
		})
	})

// House
// 	.find({})
// 	.sort({available: available})
// 	.exec((err, houses) => {
// 		res.status(err ? 400 : 200).send(err || houses);
	// })
router.route('/priceSort')
	.get((req, res) => {
		House
			.find({price: {$lte: 35}})
			.sort('-price')
			.exec((err, houses) => {
				res.status(err ? 400 : 200).send(err || houses);
			})
	})

router.put('/:houseName/dogs/:dogName', (req, res) => {
	var houseId = req.params.houseId;
	var dogId = req.params.dogId;

		Dog.findOne({name: req.params.dogName}, (err, dog) => {
			var thisDog = dog;
	House.findOne({name: req.params.houseName}, (err, house) => {
	// House.findById(houseId, (err, house) => {
		console.log(house)
		console.log("DOGE", dog)
		house.dogs.push(dog._id);
		var thisHouse = house;
		if(err) return res.status(400).send(err);

		console.log(house.dogs);
		house.save((err, savedHouse) => {
			res.status(err ? 400 : 200).send(err || savedHouse);
		});
		})
	})
	});
// })


module.exports = router;

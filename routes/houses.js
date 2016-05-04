var express = require('express');
var router = express.Router();

var House = require('../models/house');

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




module.exports = router;
var express = require('express');
var router = express.Router();

var House = require('../models/house');
var Dog = require('../models/dog');

//Do Crud Things:

router.route('/')
	.get((req, res) => {
		House
		.find({ availability: 'unavailable'})
		.exec((err, unavailableHouses) => {
			res.status(err ? 400 : 200).send(err || unavailableHouses);
		})
	})

module.exports = router;
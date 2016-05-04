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





module.exports = router;
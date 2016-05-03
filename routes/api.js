'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/dogs', require('./dogs'));
router.use('/houses', require('./houses'));

module.exports = router;
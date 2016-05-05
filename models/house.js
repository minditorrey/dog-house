'use strict';

var mongoose = require('mongoose');

var houseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: {type: String, required: true},
    size: { type: String, required: true },
    price: { type: Number, required: true },
    availability: { type: String, required: true },
    dogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dog' }]
});

var House = mongoose.model('House', houseSchema);

module.exports = House;
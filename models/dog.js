'use strict';

var mongoose = require('mongoose');

var dogSchema = new mongoose.Schema({
    name: { type: String, required: true },
    owner: { type: String, required: true },
    ownerPhone: { type: String, required: true },
    age: { type: String, required: true },
    breed: { type: String, required: true },
    color: { type: String, required: true },
    weight: { type: String, required: true },
    houses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'House' }]
});

var Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;


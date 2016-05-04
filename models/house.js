var mongoose = require('mongoose');

var House = mongoose.model('House', {
    name: String,
    location: String,
    size: String,
    price: Number,
    availability: String
});

module.exports = House;
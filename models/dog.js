var mongoose = require('mongoose');

var Dog = mongoose.model('Dog', {
    name: String,
    owner: String,
    age: String,
    breed: String,
    color: String,
    weight: String
});

module.exports = Dog;
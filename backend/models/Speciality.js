var mongoose = require('mongoose');

var specialitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    description: {
        type: String,
        maxlength: 5000
    }
})

mongoose.model('Speciality', specialitySchema)
var mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const { default: validator } = require('validator');

var patientSchema = new mongoose.Schema({
    phone: {
        type: String,
        unique: true,
        required: [true, 'Please provide your phone number']
    },
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    age: {
        type: String,
        unique: true,
        required: [true, 'Please provide your age']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please enter your email'],
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid Email']
    },
    authyId: {
        type: String,
        unique: true
    },
    token: {
        type: String,
        index: {
            unique: true,
            partialFilterExpression: { token: { $exists: true } }
        }
    },
    profile_image: {
        type: String
    }
},
    { timestamps: true }
)

mongoose.model('Patient', patientSchema);
var mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const { default: validator } = require('validator');

var doctorSchema = new mongoose.Schema({
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
        required: [true, 'Please provide your age']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please enter your email'],
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid Email']
    },
    speciality: [{
        type: String,
        required: [true, 'Please choose your speciality']
       
    }],
    description: {
        type: String,
        required: [true, 'Please enter your description']
       
    },
    degree: [{
        type: String,
        required: [true, 'Please choose your degree']
       
    }],
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

mongoose.model('Doctor', doctorSchema);
require('../models/Speciality');

var mongoose = require('mongoose');

const Speciality = mongoose.model('Speciality');

// ADD SPECIALITY
exports.specialityAdd = function (req, res) {
    const name = req.body.name;
    Speciality.findOne({ name: name }).exec(function (err, speciality) {
        if (err) {
            console.log('Error : Add Speciality', err);
            res.status(500).json({ error: "Insertion failed. Please try again later." });
            return;
        }
        else if (speciality) {
            console.log(speciality);
            return res.status(500).json({ error: "Speciality already added. Please add another." })
        }
        speciality = new Speciality({ name: req.body.name });

        speciality.set('price', req.body.price);
        speciality.set('description', req.body.description);
        speciality.save(function (err) {
            if (err) {
                console.log('Error in saving speciality in database', err);
                res.status(500).json({ error: "Insertion failed. Please try again." });
                return;
            }
            else {
                 console.log('Speciality added to database successfully', speciality);
                 res.status(200).json({
                    message: "Success"
                });
                return;
            }
        });
    });
};

// DELETE SPECIALITY
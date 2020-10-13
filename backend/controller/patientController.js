require('../models/Patients');
require('../models/Speciality');

var mongoose = require('mongoose');

const Patient = mongoose.model('Patient');
const Speciality = mongoose.model('Speciality');


// PATIENT DASHBOARD CONTROLLERS //
exports.patientDashboard = function (req, res) {
    const id = req.userId;
    Patient.findById({ _id: id }, function (err, patient) {
        if (err) {
            return res.status(500).json({
                error: "Error Occured. Please try after sometime."
            });
        } else {
            Speciality.find(function (err, speciality) {
                if (speciality) {
                    return res.status(200).json({
                        speciality
                    })
                } else {
                    return res.status(500).json({
                        error: "Something went wrong. Please try after sometime."
                    });
                }
            });
        }
    })
}
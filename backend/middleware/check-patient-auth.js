const jwt = require("jsonwebtoken");
require('../models/Patients');

const { JWT_KEY } = require("../config");
var mongoose = require('mongoose');
const Patient = mongoose.model('Patient');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization) {
        const token = authorization.split(' ')[1];
        if (!token) {
            return res.status(403).json({
                error: 'You are not logged in. Please login.'
            });
        } else {
            jwt.verify(token, JWT_KEY, async (err, payload) => {
                if (err) {
                    console.log(err);
                    return res.status(403).json({
                        error: 'You are not logged in. Please login.'
                    });
                } else {
                    const { id } = payload;
                    Patient.findOne({ _id: id, token: token }, function (err, patient) {
                        if (err) {
                            return res.status(500).json({
                                error : "Error occured. Please try after sometime."
                            })
                        } else if (!patient) {
                            return res.status(500).json({
                                message : "Access denied. Please Login."
                            })
                        } else {
                            req.userId = patient._id;
                            req.token = token;
                            console.log("Token Verified.")
                            next();
                        }
                    });

                }
            })
        }
    } else {
        return res.status(403).json({
            error: 'You are not logged in. Please login.'
        })
    }
}
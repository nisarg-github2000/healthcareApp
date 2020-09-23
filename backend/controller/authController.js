require('../models/Patients');

var mongoose = require('mongoose');
const Patient = mongoose.model('Patient');

const jwt = require("jsonwebtoken");
var config = require('../config');
var authy = require('authy')(config.API_KEY);

const JWTtoken = (id) => jwt.sign({ id: id }, config.JWT_KEY);

// Login Patient // 
exports.patientLogin = function (req, res) {
    Patient.findOne({ phone: req.body.phone })
        .exec(function (err, patient) {
            if (err) {
                console.log('Error in patient login.', err)
                res.status(500).json({ error: "Cannot login. Try after some time." })
                return;
            }
            else if (!patient) {
                console.log('Patient Not available')
                res.status(200).json({
                    noPatient: true
                });
                return;
            }
            else {
                console.log('Patient available :' + patient);
                const authy_Id = patient.authyId;
                authy.request_sms(authy_Id, { force: true }, function (smsErr, smsRes) {
                    if (smsErr) {
                        console.log('ERROR in sending OTP', smsErr);
                        res.status(500).json({ error: "Cannot login. Try after some time." });
                        return;
                    } else {
                        console.log("One-time-password sent :", smsRes);
                        console.log(authy_Id);
                        res.status(200).json({
                            message: "OTP sent on the registered phone.",
                            authy_Id: authy_Id
                        });
                        return;
                    }
                });
            }
        });
};

// Register Patient //
exports.patientRegister = function (req, res) {
    const phone = req.body.phone;
    Patient.findOne({ phone: phone }).exec(function (err, patient) {
        if (err) {
            console.log('Error : User Registration', err);
            res.status(500).json({ error: "Registration failed. Please try again later." });
            return;
        }
        else if (patient) {
            console.log(patient);
            return res.status(500).json({ error: "User already registered. Please login." })
        }
        patient = new Patient({ phone: req.body.phone });

        patient.set('name', req.body.name);
        patient.set('email', req.body.email);
        patient.set('age', req.body.age);
        patient.save(function (err) {
            if (err) {
                console.log('Error in saving patient details in database', err);
                res.status(500).json({ error: "Registration failed. Please try again." });
                return;
            }
            else {
                console.log('Patient added to database successfully', patient);
                var str = patient.phone;
                var rs = str.split("-");
                var code = rs[0];
                var phoneNo = rs[1];
                authy.register_user(patient.email, phoneNo, code, function (regErr, regRes) {
                    if (regErr) {
                        console.log('Error in registering user on Authy -> Deleting Patient document', regErr);
                        Patient.deleteOne({ phone: req.body.phone }).exec(function (deleteErr, deleteRes) {
                            if (deleteErr) {
                                console.log('ERROR in patient document delete', deleteErr);
                                res.status(500).json({ error: "Registration failed. Please try again." });
                                return;
                            }
                            console.log('Patient Deleted from database', deleteRes)
                        });
                        res.status(500).json({ error: "Registration failed. Please try again." });
                        return;
                    }
                    else {
                        console.log(" User added to Authy and AuhtyId generated :", regRes);
                        var authyId = regRes.user.id;
                        patient.set('authyId', authyId);
                        patient.save(function (saveAuthyIdErr) {
                            if (saveAuthyIdErr) {
                                console.log('Error saving authyId in database', saveAuthyIdErr);
                            } else {
                                console.log('AuthyId added to patient database, Sending OTP to :', patient);
                                authy.request_sms(patient.authyId, { force: true }, function (smsErr, smsRes) {
                                    if (smsErr) {
                                        console.log('Error in sending OTP to mobile device', smsErr);
                                    }
                                    console.log("One-time-password sent :", smsRes);
                                    res.status(200).json({
                                        message: "User registered. OTP sent successfully",
                                        patient: {
                                            authy_Id: patient.authyId
                                        },
                                    });
                                    return;
                                });
                            }
                        });
                    }
                });
            }
        });
    });
};

// Verify OTP : Patient//
exports.patientVerify = function (req, res) {
    Patient.findOne({ authyId: req.body.authy_Id }, function (err, patient) {
        if (patient) {
            var Id = patient.authyId;
            var OTP = req.body.otp;
            authy.verify(Id, OTP, function (verifyErr, verifyRes) {
                if (verifyErr) {
                    console.log('Error in OTP Verification', verifyErr);
                    return res.status(500).json({ error: "OTP verification failed. Please try again." });
                } else {
                    console.log("OTP Verified", verifyRes);
                    const jwtToken = JWTtoken(patient._id);
                    console.log(jwtToken);
                    patient.set('token', jwtToken);
                    patient.save(function (err) {
                        if (err) {
                            console.log(err)
                            return res.status(500).json({ error: "Something went wrong. Please try again." });
                        } else {
                            return res.status(200).json({
                                message: "OTP verified. Login successfull",
                                jwtToken
                            });
                        }
                    })
                }
            });
        }
        else {
            console.log('Error in finding patient with Authy ID :', req.body.authy_Id, err);
            res.status(500).json({ error: "Login failed. Please try again." });
            return;
        }
    });
};

//Resend OTP : Patient//
exports.patientResend = function (req, res) {
    Patient.findOne({ authyId: req.body.authy_Id }, function (err, patient) {
        if (patient) {
            authy.request_sms(req.body.authy_Id, { force: true }, function (smsErr, smsRes) {
                if (smsErr) {
                    console.log('Error in sending OTP to mobile device', smsErr);
                    res.status(500).json({
                        error: "Cannot send OTP at the moment."
                    });
                } else {
                    console.log("One-time-password sent :", smsRes);
                    res.status(200).json({
                        message: "OTP sent successfully."
                    });
                    return;
                }
            });
        }
    })
}

//Logout : Patient//
exports.patientLogout = function (req, res) {
    Patient.findOne({ _id: req.userId, token: req.token }, function (err, patient) {
        if (err) {
            return res.status(500).json({ error: "Please try after sometime." })
        }
        patient.updateOne({ $unset: { "token": "" } }, async function (err) {
            if (err) {
                return res.status(500).json({ error: "Please try after sometime." })
            } else {
                req.userId = "";
                req.token = "";
                // console.log(req.token)
                await res.status(200).json({
                    message: "User logged out successfully."
                })
            }
        });
    })
}
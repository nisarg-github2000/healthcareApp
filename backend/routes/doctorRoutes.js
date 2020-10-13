const express = require('express')
const router = express.Router();

const doctorToken = require('../middleware/check-doctor-auth');

const {
    doctorLogin,
    doctorRegister,
    doctorVerify,
    doctorResend,
    doctorLogout
} = require('../controller/authController');

// AUTH - ROUTES //
router.route('/doctor/login').post(doctorLogin);
router.route('/doctor/register').post(doctorRegister);
router.route('/doctor/verify_otp').post(doctorVerify);
router.route('/doctor/resend_otp').post(doctorResend);
router.route('/doctor/logout').post(doctorToken, doctorLogout);

module.exports = router;
const express = require('express')
const router = express.Router();

const patientToken = require('../middleware/check-patient-auth');

const {
    patientLogin,
    patientRegister,
    patientVerify,
    patientResend,
    patientLogout
} = require('../controller/authController');

const {
    patientDashboard
} = require('../controller/patientController');

// AUTH - ROUTES //
router.route('/patient/login').post(patientLogin);
router.route('/patient/register').post(patientRegister);
router.route('/patient/verify_otp').post(patientVerify);
router.route('/patient/resend_otp').post(patientResend);
router.route('/patient/logout').post(patientToken, patientLogout);

// DASHBOARD ROUTES //

// DOCTORS TAB //
// PROFILE TAB //
// REMEDIES TAB //
// CONSULTS TAB //
router.route('/patient/consults').get(patientToken,patientDashboard);

module.exports = router;
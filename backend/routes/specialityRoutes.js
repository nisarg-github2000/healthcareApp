const express = require('express')
const router = express.Router();

const {
    specialityAdd,
    specialityDelete
} = require('../controller/specialityController');

// SPEC - ROUTES //
router.route('/speciality/add').post(specialityAdd);
/*router.route('/speciality/delete').post(specialityDelete);*/

module.exports = router;
const express = require('express');
const registrationController = require('../../controller/registrationController');
const emailVerificationController = require('../../controller/emailVerificationController');
const loginController = require('../../controller/loginController');
const verificationController = require('../../controller/verificationController');
const router = express.Router();

router.post('/registration', registrationController)
router.post('/verification', emailVerificationController)
router.post('/login', loginController)
router.get('/emailverification/:id', verificationController)

module.exports = router;
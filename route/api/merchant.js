const express = require('express');
const becomeMerchant = require('../../controller/merchantController');
const router = express.Router();

router.post('/becomemerchant', becomeMerchant)

module.exports = router;
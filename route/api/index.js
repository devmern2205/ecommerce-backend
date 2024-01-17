const express = require('express');
const router = express.Router();
const authRouter = require('./authentication')

const authApiRoute = process.env.BASE_AUTH_URL
router.use(authApiRoute, authRouter)

module.exports = router;
const express = require('express');
const router = express.Router();
const authRouter = require('./authentication')
const categoryRouter = require('./category')


router.use('/authentication', authRouter);
router.use('/category', categoryRouter)

module.exports = router;
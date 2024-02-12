const express = require('express');
const {secureProduct,createProductController, createvariantController} = require('../../controller/productController');
const router = express.Router();

router.post("/createproduct",secureProduct,  createProductController);
router.post("/createvariant", createvariantController)

module.exports = router;
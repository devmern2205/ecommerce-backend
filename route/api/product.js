const express = require('express');
const {secureProduct,createProduct} = require('../../controller/productController');
const router = express.Router();

router.post("/createproduct",secureProduct,  createProduct)

module.exports = router;
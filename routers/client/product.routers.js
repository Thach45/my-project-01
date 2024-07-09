//Cấu hình routers cho product
const express = require('express');
const router = express.Router();

//Cấu hình controller
const productController = require("../../controllers/client/products.controller")
router.get('/',productController.index);
router.get('/:slug',productController.detail);

module.exports = router;
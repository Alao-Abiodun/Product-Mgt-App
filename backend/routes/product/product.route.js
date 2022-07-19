const router = require('express').Router();
const productController = require('../../controllers/product/product.controller');

router.get('/createProduct', productController.createProduct)

module.exports.productRouter = router;
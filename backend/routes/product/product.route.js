const router = require("express").Router();
const productController = require("../../controllers/product/product.controller");
const uploadImage = require("../../utils/libs/multer-for-image");

router.post(
  "/upload",
  uploadImage.single("image"),
  productController.uploadProduct
);

module.exports.productRouter = router;

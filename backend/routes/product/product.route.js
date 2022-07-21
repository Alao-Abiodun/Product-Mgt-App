const router = require("express").Router();
const productController = require("../../controllers/product/product.controller");
const uploadImage = require("../../utils/libs/multer-for-image");

router.post(
  "/upload",
  uploadImage.single("image"),
  productController.uploadProduct
);

router.get("/fetch", productController.fetchProducts);

router.get(
  "/fetchProductComment/:productId",
  productController.fetchProductComments
);

module.exports.productRouter = router;

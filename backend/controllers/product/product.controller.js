const Product = require("../../models/product.model");
const Comment = require("../../models/comment.model");
const { successResMsg, errorResMsg } = require("../../utils/libs/response");
const AppError = require("../../utils/libs/appError");
const catchAsync = require("../../utils/libs/catchAsync");
const { cloudinaryUploadMethod } = require("../../utils/libs/cloudinaryUpload");

exports.uploadProduct = async (req, res, next) => {
  try {
    const { user, name, address } = req.body;
    const { path } = req.file;
    const newPath = await cloudinaryUploadMethod(path);
    const imageUrl = newPath.res;
    const newProduct = await Product.create({
      user,
      name,
      address,
      image: imageUrl,
    });
    const dataInfo = {
      message: "Product uploaded successfully",
      newProduct,
    };
    return successResMsg(res, 201, dataInfo);
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
};

exports.fetchProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    const dataInfo = {
      message: "products found successfully",
      products,
    };
    return successResMsg(res, 200, dataInfo);
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
};

// fetch all comments for a product
exports.fetchProductComments = catchAsync(async (req, res) => {
  try {
    const comments = await Comment.find({
      product: req.params.productId,
    }).select(["comment", "-_id"]);
    const dataInfo = {
      message: "comments found successfully",
      comments,
    };
    return successResMsg(res, 200, dataInfo);
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
});

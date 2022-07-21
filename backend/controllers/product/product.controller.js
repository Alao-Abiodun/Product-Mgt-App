const Product = require("../../models/product.model");
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

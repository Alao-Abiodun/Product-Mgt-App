const Product = require("../../models/product.model");
const { successResMsg, errorResMsg } = require("../../utils/libs/response");
const AppError = require("../../utils/libs/appError");
const catchAsync = require("../../utils/libs/catchAsync");
const { cloudinaryUploadMethod } = require("../../utils/libs/cloudinaryUpload");

exports.createProduct = catchAsync(async (req, res, next) => {
  try {
    const { user, name, geo_details, comment } = req.body;
    const newPath = await cloudinaryUploadMethod(req.file);
    const image = newPath.res;
    const newProduct = await Product.create({
      user,
      name,
      geo_details,
      comment,
      image,
    });
    const dataInfo = {
      message: "Product created successfully",
      newProduct,
    };
    return successResMsg(res, 201, dataInfo);
  } catch (error) {
    return next(new AppError(error.message, error.statusCode));
  }
});

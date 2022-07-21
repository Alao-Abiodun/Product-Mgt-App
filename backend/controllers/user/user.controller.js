const Product = require("../../models/user.model");
const { successResMsg, errorResMsg } = require("../../utils/libs/response");
const AppError = require("../../utils/libs/appError");
const catchAsync = require("../../utils/libs/catchAsync");

exports.viewProductBySpecifiedLocation = catchAsync(async (req, res) => {
  try {
    // fetch all products from the database based on their user location
    const products = await Product.find({
      address: req.params.location,
    });
    // if no products are found, return an error message
    if (!products) {
      return errorResMsg(res, 404, "No products found");
    }
    // if products are found, return them in the response
    return successResMsg(res, 200, products);
  } catch (error) {}
});

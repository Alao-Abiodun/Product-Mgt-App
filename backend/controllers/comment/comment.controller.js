const Comment = require("../../models/comment.model");
const Product = require("../../models/product.model");
const { successResMsg, errorResMsg } = require("../../utils/libs/response");
const AppError = require("../../utils/libs/appError");
const catchAsync = require("../../utils/libs/catchAsync");

exports.commentOnAProduct = catchAsync(async (req, res) => {
  try {
    const { user, product, comment } = req.body;
    const newComment = await Comment.create({
      user,
      product,
      comment,
    });
    // update only the comments field in the product document
    await Product.findByIdAndUpdate(
      product,
      { $push: { comment: newComment._id } },
      { new: true }
    );
    const dataInfo = {
      message: "comment added successfully",
      newComment,
    };
    return successResMsg(res, 200, dataInfo);
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
});

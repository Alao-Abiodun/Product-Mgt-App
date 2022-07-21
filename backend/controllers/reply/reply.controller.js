const Reply = require("../../models/reply.model");
const Comment = require("../../models/comment.model");
const { successResMsg, errorResMsg } = require("../../utils/libs/response");
const AppError = require("../../utils/libs/appError");
const catchAsync = require("../../utils/libs/catchAsync");

exports.replyOnAComment = catchAsync(async (req, res) => {
  try {
    const { user, comment } = req.query;
    const { reply } = req.body;
    const newReply = await Reply.create({
      user,
      comment,
      reply,
    });
    // update only the replies field in the comment document
    await Comment.findByIdAndUpdate(
      comment,
      { $push: { replies: newReply._id } },
      { new: true }
    );
    const dataInfo = {
      message: "reply added successfully",
      newReply,
    };
    return successResMsg(res, 200, dataInfo);
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
});

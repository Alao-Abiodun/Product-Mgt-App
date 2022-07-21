const router = require("express").Router();
const commentController = require("../../controllers/comment/comment.controller");

router.post("/add", commentController.commentOnAProduct);

module.exports.commentRouter = router;

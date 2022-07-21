const router = require("express").Router();
const replyController = require("../../controllers/reply/reply.controller");

router.post("/addReplyToAComment", replyController.replyOnAComment);

module.exports.ReplyRouter = router;

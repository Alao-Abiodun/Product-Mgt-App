const router = require('express').Router();
const userController = require('../../controllers/user/user.controller');

router.get('/viewProductSpecifiedLocation', userController.viewProductBySpecifiedLocation)

module.exports.userRouter = router;
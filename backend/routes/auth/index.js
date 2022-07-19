const router = require("express").Router();
const authController = require("../../controllers/auth.controller");

const {
  userSignUpSchema,
  loginSchema,
} = require("../../utils/validations/auth");
const { validateSchema } = require("../../utils/validations");

router.post(
  "/signup",
  validateSchema(userSignUpSchema),
  authController.createUser
);
router.post("/login", validateSchema(loginSchema), authController.login);

module.exports.authRouter = router;

const User = require("../models/user.model");
const { signAccessToken } = require("../utils/libs/jwt-helper");
const { successResMsg, errorResMsg } = require("../utils/libs/response");
const AppError = require("../utils/libs/appError");
const catchAsync = require("../utils/libs/catchAsync");

const URL = (process.env.NODE_ENV = "development"
  ? process.env.FRONT_END_DEV_URL
  : process.env.FRONT_END_LIVE_URL);

const { ACCESS_TOKEN_SECRET_EXPIRES_IN } = process.env;

const createSendToken = (user, statusCode, res) => {
  const token = signAccessToken({
    id: user._id,
    email: user.email,
  });

  const cookieOptions = {
    expires: new Date(
      Date.now() + ACCESS_TOKEN_SECRET_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    secure: false,
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  user.password = undefined;

  // res.cookie("jwt", token, cookieOptions);

  const dataInfo = { token, user };
  return successResMsg(res, 200, dataInfo);
};

exports.createUser = async (req, res, next) => {
  try {
    const { userName, email, phoneNumber, address, password } = req.body;
    console.log(userName);
    const newUser = await User.create({
      userName,
      email,
      phoneNumber,
      address,
      password,
    });

    const dataInfo = {
      message: "User Signup successfully",
    };

    return successResMsg(res, 201, dataInfo);
  } catch (error) {
    return next(new AppError(error.message, error.statusCode));
  }
};

exports.login = async (req, res, next) => {
  try {
    let user;

    const { email, password } = req.body;
    // Check if email and password exists
    if (!email || !password) {
      return next(new AppError("Please provide email and password!", 400));
    }

    // Check if the user exists and password correct
    user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new AppError("Invalid email or password", 401));
    }

    // Check if password is correct
    const isPasswordCorrect = await user.correctPassword(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return next(new AppError("Invalid email or password", 401));
    }

    // If all true, send token to user
    createSendToken(user, 200, res);
  } catch (error) {
    return next(new AppError(error.message, error.statusCode));
  }
};

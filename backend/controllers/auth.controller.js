const User = require('../models/user.model');
const { signAccessToken } = require("../utils/libs/jwt-helper");
const { successResMsg, errorResMsg } = require("../utils/libs/response");
const AppError = require("../utils/libs/appError");
const catchAsync = require("../utils/libs/catchAsync");
const { cloudinaryUploadMethod } = require("../utils/libs/cloudinaryUpload");

const URL = process.env.NODE_ENV = 'development' ? process.env.FRONT_END_DEV_URL : process.env.FRONT_END_LIVE_URL

const { ACCESS_TOKEN_SECRET_EXPIRES_IN } = process.env;

const createSendToken = (user, statusCode, res) => {
    const token = signAccessToken({
      id: user._id,
      email: user.email,
    });
  
    const cookieOptions = {
      expires: new Date(
        Date.now() + FIXERS_ACCESS_TOKEN_SECRET_EXPIRES_IN * 24 * 60 * 60 * 1000
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

  exports.login = catchAsync(async (req, res) => {
    try {
        
    } catch (error) {
        
    }
  })

  exports.createUser = catchAsync(async(req, res) => {
    try {
        
    } catch (error) {
        
    }
  })
  
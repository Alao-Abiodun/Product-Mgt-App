const Joi = require("joi");

const userSignUpSchema = Joi.object({
  userName: Joi.string().required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string()
    .regex(/^[+][0-9]{11}/)
    .min(12)
    .max(14),
  address: Joi.string().required(),
  password: Joi.string()
    // regex for 8 characters, special characters, numbers and upper and lower case letters
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?.!@$%^&*-]).{8,}$/)
    .min(8)
    .max(20)
    .required(),
});

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(8).max(20).required(),
});

module.exports = {
  userSignUpSchema,
  loginSchema,
};

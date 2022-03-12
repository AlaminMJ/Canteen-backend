import joi from "joi";
import bcrypt from "bcrypt";
import { jwtSign } from "../services/jwt";

import { User } from "../models";
const userController = {};

// register
userController.register = async (req, res, next) => {
  // validate data
  const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required().error(new Error("password nai")),
    roll: joi.string().required().lowercase(),
  });

  try {
    const { error } = await loginSchema.validateAsync(req.body);
    if (error) {
      return next(error);
    }
    const { email, password, roll } = req.body;
    const exist = await User.exists({ email });
    if (exist) {
      return next(new Error("user alrady exist"));
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const userdata = new User({ email, roll, password: hashpassword });
    const { _id } = await userdata.save();
    const token = await jwtSign({ _id });
    return res.status(201).json({ token });
  } catch (error) {
    return next(error);
  }
};

// login
userController.logIn = async (req, res, next) => {
  // validate data
  const LogInSchema = joi.object({
    email: joi.string().required(),
    password: joi.string().min(6).required(),
  });
  const { error } = LogInSchema.validate(req.body);
  if (error) {
    return next(error);
  }
  try {
    const { password, _id } = await User.findOne({ email: req.body.email });
    const ismatch = await bcrypt.compare(req.body.password, password);
    if (!ismatch) {
      return next(new Error("unvalid user"));
    }
    const token = await jwtSign({ _id });
    return res.status(200).json({ token });
  } catch (error) {
    return next(error);
  }
};
// logout
userController.logout = async (req, res, next) => {};
userController.me = async (req, res, next) => {
  console.log(req.user);
  res.send(req.user)
};
export default userController;

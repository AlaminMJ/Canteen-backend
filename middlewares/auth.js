import { jwtVerify } from "../services/jwt";
import { User } from "../models";
const auth = async (req, res, next) => {
  let token = req.headers.authorization;

  const data = await jwtVerify(token);
  try {
    const result = await User.findById(data._id);
    console.log(result._id === req.params.id);
        if (result._id === req.params.id) {
      return next();
    } else {
      return next(new Error("haha"));
    }
  } catch (error) {
    return next(error);
  }
};

export default auth;

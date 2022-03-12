import { jwtVerify } from "../services/jwt";

const auth = async (req, res, next) => {
  let token;
  if (req.headers.authoraize || req.headers.authoraize.startWith("bareer")) {
    token = req.headers.authoraize.splite(" ")[1];
  }
  if (token) {
    const data = jwtVerify(token);
    req.user.id = data._id;
    next();
  } else {
    return next(new Error("unvalid token"));
  }
};

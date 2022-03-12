import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

const jwtSign = async (payload, expire = "1d") => {
  const token = await jwt.sign(payload, JWT_SECRET, { expiresIn: expire });
  return token;
};
const jwtVerify = async () => {
  jwt.verify(token, JWT_SECRET);
};

export { jwtSign, jwtVerify };

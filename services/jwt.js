import jwt from "jsonwebtoken";

const jwtSign = async () => {
  const token = jwt.sign(payload, JWTSECRET);
};
const jwtVerify = async () => {
  jwt.verify(token, JWTSECRET);
};

export { jwtSign, jwtVerify };

require("dotenv").config();
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env;

const generateToken = (payload) => {
  let token = jwt.sign(payload, JWT_SECRET_KEY);
  return token;
};

function verifyToken(token) {
  return new Promise((Resolve, Reject) =>
    jwt.verify(token, JWT_SECRET_KEY, (err, decode) => {
      if (err) {
        Reject(err);
      }
      Resolve(decode);
    })
  );
}

module.exports = {
  generateToken,
  verifyToken,
};
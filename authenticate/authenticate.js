const { verifyToken } = require("../library/jwt");

const authenticate = (req, res, next) => {
  var { authorization } = req.headers;
  if (authorization) {
    var token = authorization.includes("Bearer ");
    if (token) {
      var splitToken = authorization.split("Bearer ");
      var authtoken = splitToken[1];
      verifyToken(authtoken)
        .then((result) => {
            next();
        })
        .catch((err) => {
          return res
            .status(401)
            .send({ message: "Unauthorized",data: [],code: 401 });
        });
    } else {
      return res
        .status(401)
        .send({ message: "Unauthorized", data: [], code: 401 });
    }
  } else {
    return res
      .status(401)
      .send({ message: "Token Missing", data: [], code: 401 });
  }
};

module.exports = authenticate;

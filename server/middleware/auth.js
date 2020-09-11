const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../model");
const User = db.user;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Admin Role!"
      });
      return;
    });
  });
};


const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
};
module.exports = authJwt;

/*const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  const token = req.header("token");
  console.log("auth" + token);

  if (!token) return res.status(401).json({ message: "Auth Error" });
  try {
    const decoded = jwt.verify(token, "randomString");
    req.user = decoded.user;
    console.log("auth" + req.user.email);
    next();
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Invalid Token" });
  }
};*/
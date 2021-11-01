const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  if(req.headers.token){
    const headersToken = req.headers.token;

    const token = headersToken.split(" ")[1];

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (!err && user) {
          req.user = user;
          next();
        } else {
          res.status(403).json("Token is not valid!");
        }
      });
    } else {
      res.status(401).json("Unauthenticated!");
    }
  } else {
    res.status(403).json("Unauthenticated user");
  }
}

function verifyTokenAndAuthorization(req, res, next) {
    verifyToken(req, res, () => {
        if(req.params.id === req.user.id || req.user.isAdmin){
            next();
        } else {
            res.status(403).json("You are not authorized!");
        }
    });
}

function verifyTokenAndAdmin(req, res, next) {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not authorized!");
    }
  });
}

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};

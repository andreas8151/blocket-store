const jwt = require("jsonwebtoken");
require("dotenv").config();

function checkCookie(req, res, next) {
  const authToken = req.cookies.authToken;

  if (!authToken) {
    res.status(401).send("Authentication failed: missing token");
    return;
  }

  try {
    const decodedToken = jwt.verify(authToken, process.env.secret);
    req.userId = decodedToken.userId;
    res.status(200);
    next();
  } catch (err) {
    res.status(401).send("Authentication failed: invalid token");
    return;
  }
}

module.exports = { checkCookie };

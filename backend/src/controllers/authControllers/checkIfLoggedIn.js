const jwt = require("jsonwebtoken");
require("dotenv").config();

function checkIfLoggedIn(req, res) {
  const authToken = req.cookies.authToken;

  if (!authToken) {
    res.status(401).send("Authentication failed: missing token");
    return;
  }

  try {
    const decodedToken = jwt.verify(authToken, process.env.secret);
    req.userId = decodedToken.userId;
    res.sendStatus(200);
  } catch (err) {
    res.status(401).send("Authentication failed: invalid token");
    return;
  }
}
module.exports = { checkIfLoggedIn };

const pool = require("../../server");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validateUser } = require("./validation/validation");
require("dotenv").config();

function login(req, res) {
  const { error, value } = validateUser(req.body);

  const { secret } = process.env;

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const { username, password } = value;

  const sql = "SELECT password, ID FROM users WHERE username=?";

  pool.execute(sql, [username], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error in server: " + err });
      return;
    }
    if (result.length > 0) {
      const userId = result[0].ID;
      const cryptoPassword = result[0].password;
      const isPasswordMatch = bcrypt.compareSync(password, cryptoPassword);

      if (isPasswordMatch) {
        const authToken = jwt.sign({ userId }, secret, { expiresIn: "1h" });

        res.cookie("authToken", authToken, {
          maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
          sameSite: "none",
          secure: true,
          httpOnly: true,
        });
        res.status(200).send("login success!");
      } else {
        res.status(401).send("Invalid login credentials");
      }
    } else {
      res.status(404).send("User not found");
    }
  });
}

module.exports = { login };

const pool = require("../../server");
const bcrypt = require("bcrypt");
const { validateUser } = require("./validation/validation");

function register(req, res) {
  const { error, value } = validateUser(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const { username, password } = value;

  const cryptoPassword = bcrypt.hashSync(password, 10);

  const sql = "INSERT INTO users (username, password) VALUES (?, ?)";

  pool.execute(sql, [username, cryptoPassword], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Error in server: " + err });
      return;
    }
    res.status(201).send("register success");
  });
}

module.exports = { register };

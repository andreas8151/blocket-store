const express = require("express");
const {
  checkIfLoggedIn,
} = require("../../controllers/authControllers/checkIfLoggedIn");
const authRoutes = express.Router();
const { login } = require("../../controllers/authControllers/login");
const { register } = require("../../controllers/authControllers/register");
checkIfLoggedIn;

authRoutes.post("/login", login);
authRoutes.post("/register", register);
authRoutes.get("/loggedInValidation", checkIfLoggedIn);

module.exports = { authRoutes };

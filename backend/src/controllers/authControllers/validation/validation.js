// Validation package
const joi = require("joi");

// Schema
const authSchema = joi.object({
  username: joi.string().regex(/^\S+$/).min(3).max(30).required(),
  password: joi.string().regex(/^\S+$/).min(3).max(30).required(),
});

// Validation functions
function validateUser({ username, password }) {
  const result = authSchema.validate({
    username,
    password,
  });

  return result;
}

module.exports = { validateUser };

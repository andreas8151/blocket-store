const express = require("express");
const friendRoutes = express.Router();

const { addFriend } = require("../../controllers/friendControllers/addFriend");
const {
  getFriends,
} = require("../../controllers/friendControllers/getFriends");

friendRoutes.get("/getFriends", getFriends);
friendRoutes.post("/addFriend", addFriend);

module.exports = { friendRoutes };

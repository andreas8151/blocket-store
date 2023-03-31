const express = require("express");
const friendRoutes = express.Router();

const { addFriend } = require("../../controllers/friendControllers/addFriend");
const {
  getFriends,
} = require("../../controllers/friendControllers/getFriends");
const {
  getFriendsContent,
} = require("../../controllers/friendControllers/getFriendsContent");
getFriendsContent;

friendRoutes.get("/getFriends", getFriends);
friendRoutes.post("/addFriend", addFriend);
friendRoutes.get("/getFriendsContent", getFriendsContent);

module.exports = { friendRoutes };

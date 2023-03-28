const express = require("express");

const multer = require("multer");
const path = require("path");
const contentRoute = express.Router();
const {
  uploadContent,
} = require("../../controllers/contentControllers/uploadContent");
const {
  getContent,
} = require("../../controllers/contentControllers/getContent");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../images"),
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});

contentRoute.post("/upload", upload.single("image"), uploadContent);
contentRoute.get("/get", getContent);

module.exports = { contentRoute };

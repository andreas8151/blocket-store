//express create
const express = require("express");
const app = express();
const port = 5050;
//mysql
const mysql = require("mysql2");
//env
require("dotenv").config();
//cors
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
const path = require("path");
const imagesDirectory = path.join(__dirname, "../src/images");

// Serve the images directory as a static directory
app.use("/images", express.static(imagesDirectory));

//cookie
const cookieParser = require("cookie-parser");

//middleware
app.use(express.json());
app.use(cookieParser());

const { checkCookie } = require("./middleware/checkCookie");

const dataBase = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
};

const pool = mysql.createPool(dataBase);
module.exports = pool;

const { authRoutes } = require("./routes/authRoute/authRoute");
const { friendRoutes } = require("./routes/friendRoute/friendsRoute");
const { contentRoute } = require("./routes/contentRoute/contentRoute");

app.use("/auth", authRoutes);
app.use("/friend", checkCookie, friendRoutes);
app.use("/content", checkCookie, contentRoute);

app.listen(port);

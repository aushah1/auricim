const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/auth.routes.js");
const cookieParser = require("cookie-parser");
const movieRouter = require("./routes/media.routes.js");
const identifyUser = require("./middlewares/auth.middleware.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/media", identifyUser, movieRouter);

module.exports = app;

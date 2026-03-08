const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/auth.routes.js");
const cookieParser = require("cookie-parser");
const movieRouter = require("./routes/media.routes.js");
const identifyUser = require("./middlewares/auth.middleware.js");
const favouriteRouter = require("./routes/favourite.routes.js");
const watchHistoryRouter = require("./routes/watchHistory.routes.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/media", identifyUser, movieRouter);
app.use("/api/favourites", identifyUser, favouriteRouter);
app.use("/api/watch-history", identifyUser, watchHistoryRouter);

module.exports = app;

const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/auth.routes.js");
const cookieParser = require("cookie-parser");
const movieRouter = require("./routes/media.routes.js");
const favouriteRouter = require("./routes/favourite.routes.js");
const watchHistoryRouter = require("./routes/watchHistory.routes.js");
const identifyUser = require("./middlewares/auth.middleware.js");
const isBanned = require("./middlewares/isBanned.middleware.js");
const adminRouter = require("./routes/admin.routes.js");
const isAdmin = require("./middlewares/isAdmin.middleware.js");

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/media", identifyUser, isBanned, movieRouter);
app.use("/api/favourites", identifyUser, isBanned, favouriteRouter);
app.use("/api/watch-history", identifyUser, isBanned, watchHistoryRouter);
app.use("/api/admin", identifyUser , isBanned , isAdmin , adminRouter);

module.exports = app;

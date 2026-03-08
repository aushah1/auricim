const { Router } = require("express");
const watchHistoryController = require("../controllers/watchHistory.controller");
const identifyUser = require("../middlewares/auth.middleware.js");

const watchHistoryRouter = Router();

// /api/watch-history

watchHistoryRouter.get(
  "/",
  identifyUser,
  watchHistoryController.getWatchHistoryController,
);
watchHistoryRouter.post(
  "/add/:id",
  identifyUser,
  watchHistoryController.addToWatchHistoryController,
);

module.exports = watchHistoryRouter;

const { Router } = require("express");

const favouriteController = require("../controllers/favourite.controller");
const identifyUser = require("../middlewares/auth.middleware");

const favouriteRouter = Router();
// /api/favourites

favouriteRouter.get("/", favouriteController.getFavouritesController);
favouriteRouter.post("/add/:id", favouriteController.addToFavouritesController);
favouriteRouter.post(
  "/remove/:id",
  favouriteController.removeFromFavouritesController,
);

module.exports = favouriteRouter;
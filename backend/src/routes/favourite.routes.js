const {Router} = require("express");

const favouriteController = require("../controllers/favourite.controller");
const identifyUser = require("../middlewares/auth.middleware");

const favouriteRouter = Router();
// /api/favourites

favouriteRouter.get("/", identifyUser , favouriteController.getFavouritesController);
favouriteRouter.post("/add/:id", identifyUser, favouriteController.addToFavouritesController);
favouriteRouter.post("/remove/:id", identifyUser, favouriteController.removeFromFavouritesController);

module.exports = favouriteRouter;
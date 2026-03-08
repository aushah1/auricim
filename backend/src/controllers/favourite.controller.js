const FavouriteModel = require("../models/favourite.model");

async function getFavouritesController(req, res) {
  try {
    const favourites = await FavouriteModel.find({ user: req.user.id });
    res.status(200).json({
      message: "Favourites fetched successfully",
      favourites,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch favourites", error });
  }
}

async function addToFavouritesController(req, res) {
  try {
    const mediaId = req.params.id;
    const { mediaType, title, posterPath } = req.body;

    const existing = await FavouriteModel.findOne({
      user: req.user.id,
      mediaId,
      mediaType,
    });

    if (existing) {
      return res.status(400).json({ message: "Already in favourites" });
    }

    const favourite = await FavouriteModel.create({
      user: req.user.id,
      mediaId,
      mediaType,
      title,
      posterPath,
    });

    res.status(201).json({
      message: "Added to favourites successfully",
      favourite,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to add favourite", error });
  }
}

async function removeFromFavouritesController(req, res) {
  try {
    const { id: mediaId } = req.params;
    const { mediaType } = req.body;

    const deleted = await FavouriteModel.findOneAndDelete({
      user: req.user.id,
      mediaId,
      mediaType,
    });

    if (!deleted) {
      return res.status(404).json({ message: "Favourite not found" });
    }

    res.status(200).json({
      message: "Removed from favourites successfully",
      favourite: deleted,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to remove favourite", error });
  }
}

module.exports = {
  addToFavouritesController,
  getFavouritesController,
  removeFromFavouritesController,
};

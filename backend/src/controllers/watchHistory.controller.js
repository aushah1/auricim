const watchHistoryModel = require("../models/watchHistory.model");

async function getWatchHistoryController(req, res) {
  const userId = req.user.id;

  try {
    const watchHistory = await watchHistoryModel
      .find({ user: userId })
      .sort({ watchedAt: -1 });
    res.status(200).json({
      message: "Watch history fetched successfully",
      watchHistory,
    });
  } catch (error) {
    console.error("Error fetching watch history:", error);
  }
}

async function addToWatchHistoryController(req, res) {
  const userId = req.user.id;
  const  mediaId  = req.params.id;
  const { title, mediaType, posterPath } = req.body;

  try {
    const watchHistoryEntry = await watchHistoryModel.create({
      user: userId,
      mediaId,
      mediaType,
      title,
      posterPath,
    });

    res.status(201).json({
      message: "Media added to watch history successfully",
      watchHistoryEntry,
    });
  } catch (error) {
    console.error("Error adding to watch history:", error);
  }
}

module.exports = {
  getWatchHistoryController,
  addToWatchHistoryController,
};

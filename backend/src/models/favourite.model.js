const mongoose = require("mongoose");

const favouriteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    mediaId: {
      type: Number, 
      required: true,
    },
    mediaType: {
      type: String,
      enum: ["movie", "tv"], 
      required: true,
    },
    title: {
      type: String, 
    },
    posterPath: {
      type: String, 
    },
    addedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const Favourite = mongoose.model("Favourite", favouriteSchema);
module.exports = Favourite;

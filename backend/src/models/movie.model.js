const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  releaseDate: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  genres: [{ type: String }],
  category: { type: String },
  trailerLink: { type: String },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;

const userModel = require("../models/user.model");
const movieModel = require("../models/movie.model");
const storageService = require("../services/storage.service");

const getAllUsersController = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json({
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      error: error.message,
    });
  }
};

const banUserController = async (req, res) => {
  try {
    const userId = req.params.id;
    await userModel.findByIdAndUpdate(userId, { isBanned: true });
    res.status(200).json({
      message: "User banned successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error banning user",
      error: error.message,
    });
  }
};

const unbanUserController = async (req, res) => {
  try {
    const userId = req.params.id;
    await userModel.findByIdAndUpdate(userId, { isBanned: false });
    res.status(200).json({
      message: "User unbanned successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error unbanning user",
      error: error.message,
    });
  }
};

const deleteUserController = async (req, res) => {
  try {
    const userId = req.params.id;
    await userModel.findByIdAndDelete(userId);
    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting user",
      error: error.message,
    });
  }
};

const addMovieController = async (req, res) => {
  try {
    const { title, releaseDate, description, genres, category, trailerLink } =
      req.body;
    const imageUrl = await storageService.uploadFile({
      buffer: req.file.buffer,
      filename: req.file.originalname,
      folder: "auricim/movies",
    });

    const newMovie = await movieModel.create({
      title,
      releaseDate,
      description,
      imageUrl: imageUrl.url,
      genres,
      category,
      trailerLink,
    });
    res.status(201).json({
      message: "Movie added successfully",
      movie: newMovie,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding movie",
      error: error.message,
    });
  }
};

const deleteMovieController = async (req, res) => {
  try {
    const id = req.params.id;
    const movie = await movieModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "Movie deleted successfully",
      movie,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting movie",
      error: error.message,
    });
  }
};
const getAllMoviesController = async (req, res) => {
  try {
    const movies = await movieModel.find();
    res.status(200).json({
      message: "Movies fetched successfully",
      movies,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching movies",
      error: error.message,
    });
  }
};

const editMovieController = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, releaseDate, description, genres, category, trailerLink } =
      req.body;
    const updatedMovie = await movieModel.findByIdAndUpdate(
      id,
      {
        title,
        releaseDate,
        description,
        genres,
        category,
        trailerLink,
      },
      { new: true },
    );
    res.status(200).json({
      message: "Movie updated successfully",
      movie: updatedMovie,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating movie",
      error: error.message,
    });
  }
};

module.exports = {
  getAllUsersController,
  banUserController,
  unbanUserController,
  deleteUserController,
  addMovieController,
  deleteMovieController,
  getAllMoviesController,
  editMovieController,
};

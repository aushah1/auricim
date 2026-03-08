const userModel = require("../models/user.model");
const movieModel = require("../models/movie.model");

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

module.exports = {
  getAllUsersController,
  banUserController,
  unbanUserController,
  deleteUserController,
};
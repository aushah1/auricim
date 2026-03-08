const userModel = require("../models/user.model");
async function isBanned(req, res, next) {
  const user = await userModel.findById(req.user.id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  if (user.isBanned) {
    return res.status(403).json({
      message:
        "Access denied, You have been banned. Email at aushah.gw@gmail.com for request to unban you",
    });
  }
  next();
}

module.exports = isBanned;

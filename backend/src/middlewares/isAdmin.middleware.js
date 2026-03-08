const userModel = require("../models/user.model");

async function isAdmin(req, res, next) {
  const user = await userModel.findById(req.user.id);

  let isAdmin = user.isAdmin;

  if (!user || !isAdmin) {
    return res.status(403).json({
      message: "Access denied, admin only",
    });
  }

  next();
}

module.exports = isAdmin;

const { Router } = require("express");
const isAdmin = require("../middlewares/isAdmin.middleware.js");
const isBanned = require("../middlewares/isBanned.middleware.js");
const identifyUser = require("../middlewares/auth.middleware.js");
const adminController = require("../controllers/admin.controller.js");

const adminRouter = Router();

// /api/admin/

adminRouter.use(identifyUser);
adminRouter.use(isBanned);
adminRouter.use(isAdmin);

adminRouter.get("/users", adminController.getAllUsersController);
adminRouter.patch("/users/ban/:id", adminController.banUserController);
adminRouter.patch("/users/unban/:id", adminController.unbanUserController);
adminRouter.delete("/users/delete/:id", adminController.deleteUserController);

module.exports = adminRouter;

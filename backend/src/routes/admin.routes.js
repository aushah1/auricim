const { Router } = require("express");
const isAdmin = require("../middlewares/isAdmin.middleware.js");
const isBanned = require("../middlewares/isBanned.middleware.js");
const identifyUser = require("../middlewares/auth.middleware.js");
const adminController = require("../controllers/admin.controller.js");
const upload = require("../middlewares/upload.middleware.js");

const adminRouter = Router();

// /api/admin/

adminRouter.use(identifyUser);
adminRouter.use(isBanned);
adminRouter.use(isAdmin);

adminRouter.get("/users", adminController.getAllUsersController);
adminRouter.patch("/users/ban/:id", adminController.banUserController);
adminRouter.patch("/users/unban/:id", adminController.unbanUserController);
adminRouter.delete("/users/delete/:id", adminController.deleteUserController);

adminRouter.get("/movies", adminController.getAllMoviesController);
adminRouter.post(
  "/movies/add",
  upload.single("imageUrl"),
  adminController.addMovieController,
);
adminRouter.delete("/movies/delete/:id", adminController.deleteMovieController);
adminRouter.put("/movies/edit/:id", adminController.editMovieController);

module.exports = adminRouter;

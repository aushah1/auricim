const { Router } = require("express");
const authController = require("../controllers/auth.controller.js");
const identifyUser = require("../middlewares/auth.middleware.js");
const isBanned = require("../middlewares/isBanned.middleware.js");

const authRouter = Router();

// /api/auth/

authRouter.post("/register", authController.registerController);
authRouter.post("/login",  authController.loginController);
authRouter.get("/logout", identifyUser, isBanned ,authController.logoutController);
authRouter.get("/getme", identifyUser, isBanned, authController.getMeController);

module.exports = authRouter;

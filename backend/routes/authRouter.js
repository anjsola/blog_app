const { Router } = require("express");
const { registerUser, loginUser, logoutUser } = require("../controllers/authController");

const authRouter = Router();

authRouter.post("/register", registerUser);//use register later and its to create a new user
authRouter.post("/login", loginUser);
authRouter.post("/logout", logoutUser);
// authRouter.get("/:userId", getUser);

module.exports = authRouter;
// routes/userRouter.js
const { Router } = require("express");

const userRouter = Router();

userRouter.get("/", (req, res) => res.send("All users"));
userRouter.get("/:userId", (req, res) => {
  const { userId } = req.params;
  res.send(`User ID: ${userId}`);
});

module.exports = userRouter;
require("dotenv/config");
const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
//const { prisma } = require("./lib/prisma");
const postRouter = require("./routes/postRouter");
const commentRouter = require("./routes/commentRouter");
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");

// authRouter.post("/register", registerUser);
// authRouter.post("/login", loginUser);

//body parser middleware

app.get("/", (req,res) => res.send("WELCOME TO MY BLOG APP!"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/posts", postRouter);
//app.use("/comments", commentRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);




//SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Express app listening on port ${PORT}`);
});


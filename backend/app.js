require("dotenv/config");
const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const path = require("path");
//const { prisma } = require("./lib/prisma");
const postRouter = require("./routes/postRouter");
const commentRouter = require("./routes/commentRouter");
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");

// authRouter.post("/register", registerUser);
// authRouter.post("/login", loginUser);

//body parser middleware

app.get("/", (req,res) => res.send("WELCOME TO MY BLOG APP!"));

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/posts", postRouter);
//app.use("/comments", commentRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

//SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Express app listening on port ${PORT}`);
});

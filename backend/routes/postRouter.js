// routes/postRouter.js
const { Router } = require("express");
const { createPost, getAllPosts, getAllPostsAuthor, getPostById, updatePost, deletePost } = require("../controllers/postController");
const { getComments, addComment, updateComment, deleteComment } = require("../controllers/commentController");
const { protect } = require("../middleware/authMiddleware");

const postRouter = Router();

//postRouter.use(protect); // Apply authentication middleware to all routes

postRouter.post("/", protect, createPost);
postRouter.get("/", getAllPosts); 
postRouter.get("/all", protect, getAllPostsAuthor); // authors only: see all posts (including unpublished)
postRouter.get("/:postId", getPostById);
postRouter.put("/:postId", protect, updatePost);
postRouter.delete("/:postId", protect, deletePost);

// Comments
postRouter.get("/:postId/comments", getComments);
postRouter.post("/:postId/comments", protect, addComment);
postRouter.put("/:postId/comments/:commentId", protect, updateComment);
postRouter.delete("/:postId/comments/:commentId", protect, deleteComment);
// postRouter.get(
//   "/:postId/comments/:commentId/replies",
//   commentController.getReplies,
// );
// postRouter.post(
//   "/:postId/comments/:commentId/replies",
//   commentController.addReply,
// );

module.exports = postRouter;
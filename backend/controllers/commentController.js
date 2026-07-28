// import { prisma } from "../lib/prisma.js"; // ES6 module syntax
const { prisma } = require("../lib/prisma");

// GET /posts/:postId/comments
//get all comments for a specific post
async function getComments(req, res) {
    const { postId } = req.params;
    try {
        const comments = await prisma.comment.findMany({
            where: { postId: parseInt(postId) }
        });
        res.json(comments);
    } catch (error) {
      console.error(error);
        res.status(500).json({ error: "Failed to retrieve comments" });
    }
}

// POST /posts/:postId/comments
async function addComment(req, res) {
    const { postId } = req.params;
    const { content } = req.body;
    try {
        const comment = await prisma.comment.create({
            data: {
                content,
                postId: parseInt(postId)
            }
        });
        res.status(201).json(comment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create comment" });
    }
}

// PUT /posts/:postId/comments/:commentId
async function updateComment(req, res) {
    const { commentId } = req.params;
    const { content } = req.body;
    try {
        const comment = await prisma.comment.update({
            where: { id: parseInt(commentId) },
            data: { content }
        });
        res.json(comment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update comment" });
    }
}

// DELETE /posts/:postId/comments/:commentId
async function deleteComment(req, res) {
  const { commentId } = req.params;
  try {
    await prisma.comment.delete({
      where: { id: parseInt(commentId) }
    });
    res.json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
}

module.exports = {
    getComments,
    addComment,
    updateComment,
    deleteComment
};    
  
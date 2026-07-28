// import { prisma } from "../lib/prisma.js"; // ES6 module syntax
const { prisma } = require("../lib/prisma");

//create a new post -authors only
async function createPost(req, res) {
  const { title, content, published } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  } 
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        published: published === true || published === "true", // ensure published is a boolean
        authorId: req.user.id, // assuming req.user is set by authentication middleware
      }
    }); 
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    console.log("REQ.USER", req.user);
    res.status(500).json({ error: "Failed to create post" });
  }
}

//get all posts -public: only published posts should be visible to the public, while unpublished posts should only be visible to the author and admins. 
async function getAllPosts(req, res) {
  try {
    const posts = await prisma.post.findMany({
      where: {
        published: true // only retrieve published posts
      },
      include: {
        author: true // include the author information
      },
      orderBy: {
        createdAt: 'desc' // order by creation date, newest first
      } 
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve posts" });
  };
}

// GET /posts/all  — authors only: see all posts (including unpublished)
async function getAllPostsAuthor(req, res) {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: { select: { id: true, username: true } } // include the author information
      },
      orderBy: {
        createdAt: 'desc' // order by creation date, newest first
      }
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve posts" });
  }
}

// GET /posts/:id  — public, but unpublished posts are blocked for non-authors
async function getPostById(req, res) {
  const { postId } = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(postId) }
    });
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    // Check if the post is unpublished and the user is not the author
    if (!post.published && post.authorId !== req.user?.id) {
      return res.status(403).json({ error: "Unauthorized to view this post" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve post" });
  }
}

async function updatePost(req, res) {
  //find post and verify if the user is the author of the post
  const { postId } = req.params;
  const { title, content, published } = req.body;
  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(postId) }
    });
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    // Verify if the user is the author of the post
    if (post.authorId !== req.user.id) {
      return res.status(403).json({ error: "Unauthorized to update this post" });
    }
    // Proceed with the update
    const updatedPost = await prisma.post.update({
      where: { id: parseInt(postId) },
      data: {
        title,
        content,
        published
      }
    });
    res.json(updatedPost);
  } catch (error) {
    console.error("UPDATE ERROR:", error);
    res.status(500).json({ error: "Failed to update post" });
  }
}

async function deletePost(req, res) {
  //find post and verify if the user is the author of the post
  const { postId } = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(postId) }
    });
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    // Verify if the user is the author of the post
    if (post.authorId !== req.user.id) {
      return res.status(403).json({ error: "Unauthorized to delete this post" });
    }
    await prisma.post.delete({
      where: { id: parseInt(postId) }
    });
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    res.status(500).json({ error: "Failed to delete post" });
  }
}

module.exports = {
    createPost,
    getAllPosts,
    getAllPostsAuthor,
    getPostById,
    updatePost,
    deletePost
};  
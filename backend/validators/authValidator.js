const { z } = require("zod");

const registerSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters long").max(50, "Username must be at most 50 characters long"),
  email: z.email("Please provide a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long").max(50, "Password must be at most 50 characters long")
});

const loginSchema = z.object({
  email: z.email("Please provide a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long").max(50, "Password must be at most 50 characters long")
});

module.exports = {
  registerSchema,
  loginSchema
};  
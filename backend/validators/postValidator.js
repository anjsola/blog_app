const {z} = require("zod");

const postSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters long").max(50, "Title must be at most 50 characters long"),
    content: z.string().min(10, "Content must be at least 10 characters long")
});

module.exports = {
    postSchema
};
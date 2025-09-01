const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    excerpt: String,
    content: { type: String, required: true },
    coverImage: String,
    tags: [{ type: String }],
    author: { type: String, default: "Burro Team" },
    published: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);

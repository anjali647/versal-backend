const Blog = require("../models/Blog");

exports.listBlogs = async (req, res) => {
  const q = req.query.q;
  const filter = q ? { $or: [{ title: new RegExp(q, "i") }, { tags: new RegExp(q, "i") }] } : {};
  const posts = await Blog.find(filter).sort({ createdAt: -1 });
  res.json(posts);
};

exports.getBlog = async (req, res) => {
  const post = await Blog.findOne({ slug: req.params.slug });
  if (!post) return res.status(404).json({ message: "Blog not found" });
  res.json(post);
};

exports.createBlog = async (req, res) => {
  const created = await Blog.create(req.body);
  res.status(201).json(created);
};

exports.updateBlog = async (req, res) => {
  const updated = await Blog.findOneAndUpdate({ slug: req.params.slug }, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: "Blog not found" });
  res.json(updated);
};

exports.deleteBlog = async (req, res) => {
  const deleted = await Blog.findOneAndDelete({ slug: req.params.slug });
  if (!deleted) return res.status(404).json({ message: "Blog not found" });
  res.json({ message: "Deleted" });
};

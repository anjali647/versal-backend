const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
  const items = await Product.find().sort({ createdAt: -1 });
  res.json(items);
};

exports.getProduct = async (req, res) => {
  const item = await Product.findById(req.params.id);
  if (!item) return res.status(404).json({ message: "Product not found" });
  res.json(item);
};

exports.createProduct = async (req, res) => {
  const prod = await Product.create(req.body);
  res.status(201).json(prod);
};

exports.updateProduct = async (req, res) => {
  const prod = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!prod) return res.status(404).json({ message: "Product not found" });
  res.json(prod);
};

exports.deleteProduct = async (req, res) => {
  const prod = await Product.findByIdAndDelete(req.params.id);
  if (!prod) return res.status(404).json({ message: "Product not found" });
  res.json({ message: "Deleted" });
};

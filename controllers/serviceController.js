const Service = require("../models/Service");

exports.listServices = async (req, res) => {
  const items = await Service.find().sort({ createdAt: -1 });
  res.json(items);
};

exports.createService = async (req, res) => {
  const created = await Service.create(req.body);
  res.status(201).json(created);
};

exports.updateService = async (req, res) => {
  const updated = await Service.findOneAndUpdate({ slug: req.params.slug }, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: "Service not found" });
  res.json(updated);
};

exports.deleteService = async (req, res) => {
  const deleted = await Service.findOneAndDelete({ slug: req.params.slug });
  if (!deleted) return res.status(404).json({ message: "Service not found" });
  res.json({ message: "Deleted" });
};

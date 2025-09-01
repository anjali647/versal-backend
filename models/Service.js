const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, unique: true },
    summary: String,
    points: [{ type: String }],
    icon: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);

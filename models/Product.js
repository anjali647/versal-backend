const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, unique: true },
    tagline: String,
    description: String,
    features: [{ type: String }],
    useCases: [{ type: String }],
    price: { type: Number, required: true },
    plan: { type: String, enum: ["Free", "Pro", "Enterprise"], default: "Free" },
    image: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);

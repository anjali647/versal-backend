const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");
const ctrl = require("../controllers/productController");

router.get("/", ctrl.getProducts);
router.get("/:id", ctrl.getProduct);
router.post("/", protect, admin, ctrl.createProduct);
router.put("/:id", protect, admin, ctrl.updateProduct);
router.delete("/:id", protect, admin, ctrl.deleteProduct);

module.exports = router;

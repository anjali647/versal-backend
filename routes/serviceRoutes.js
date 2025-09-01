const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");
const ctrl = require("../controllers/serviceController");

router.get("/", ctrl.listServices);
router.post("/", protect, admin, ctrl.createService);
router.put("/:slug", protect, admin, ctrl.updateService);
router.delete("/:slug", protect, admin, ctrl.deleteService);

module.exports = router;

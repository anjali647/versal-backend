const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");
const ctrl = require("../controllers/blogController");

router.get("/", ctrl.listBlogs);
router.get("/:slug", ctrl.getBlog);
router.post("/", protect, admin, ctrl.createBlog);
router.put("/:slug", protect, admin, ctrl.updateBlog);
router.delete("/:slug", protect, admin, ctrl.deleteBlog);

module.exports = router;

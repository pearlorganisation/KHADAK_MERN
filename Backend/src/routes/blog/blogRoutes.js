import express from "express";
import multer from "multer";
import { createBlog, getBlog } from "../../controllers/Blog/blogController.js";
const upload = multer({ dest: "uploads/" });
const router = express.Router();

router.route("/").post(upload.single("profileImage"), createBlog);
router.route("/").get(getBlog);

export default router;

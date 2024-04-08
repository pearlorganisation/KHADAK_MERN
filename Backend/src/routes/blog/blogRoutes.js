import express from "express";
import multer from "multer";
import { DeleteBlogData, createBlog, getBlog } from "../../controllers/Blog/blogController.js";
const upload = multer({ dest: "uploads/" });
const router = express.Router();

router.route("/").post(upload.single("profileImage"), createBlog);
router.route("/").get(getBlog);
router.route("/:id").delete(DeleteBlogData)


export default router;

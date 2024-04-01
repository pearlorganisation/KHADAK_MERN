import express from "express";
import multer from "multer";
import {
  createContact,
  getContact,
} from "../../controllers/contact/contactController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.route("/").post(upload.single("profileImage"), createContact);
router.route("/").get(getContact);

export default router;

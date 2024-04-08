import express from "express";
import multer from "multer";
import {
  DeleteContactData,
  createContact,
  getContact,
  updateContact,
} from "../../controllers/contact/contactController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.route("/").post(upload.single("profileImage"), createContact);
router.route("/").get(getContact);
router.route("/:key").put(upload.single("profileImage"), updateContact);
router.route("/:id").delete(DeleteContactData)

export default router;

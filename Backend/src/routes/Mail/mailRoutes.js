import express from "express";
import { sendContact } from "../../controllers/Mail/mailController.js";

const router = express.Router();

router.route("/").post(sendContact);
export default router;

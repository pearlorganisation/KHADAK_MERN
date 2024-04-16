import express from "express";
import { sendContact } from "../../controllers/Mail/mailController.js";


const router = express.Router();

router.route("/").post(sendContact);
// router.route("/sendMail").post(sendMail)
export default router;

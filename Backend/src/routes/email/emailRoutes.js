import express from "express";
import { forgotPasswordSendOtp, verifyOtp } from "../../controllers/email.js";

const router = express.Router();

router.route("/verifyOtp").post(verifyOtp)
router.route("/forgotPasswordSendOtp").post(forgotPasswordSendOtp)

export default router;

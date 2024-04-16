import express from "express";
import { verifyOtp } from "../../controllers/email.js";

const router = express.Router();

router.route("/verifyOtp").post(verifyOtp)

export default router;

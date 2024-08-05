import express from "express";
import { createUser, resetPassword, userLogin } from "../../controllers/Auth/authController.js";

export const authRouter = express.Router();

authRouter.route("/addUser").post(createUser);
authRouter.route("/resetPassword").put(resetPassword);
authRouter.route("/userLogin").post(userLogin);

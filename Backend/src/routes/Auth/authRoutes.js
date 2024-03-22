import express from "express";
import { createUser, userLogin } from "../../controllers/Auth/authController.js";

export const authRouter = express.Router();

authRouter.route("/addUser").post(createUser);
authRouter.route("/userLogin").post(userLogin);

// @desc - createUser
// @method- POST

import userModel from "../../models/Authentication/userAuthModel.js";

import { pick } from "lodash-es";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { generateOtp } from "../../utils/Mail/ContactUs/otpGenerator.js";
import otp from "../../models/otp.js";
import { sendMail } from "../../utils/sendMail.js";

// @url - auth/user
export const createUser = async (req, res, next) => {
  try {
    const { email, password, role } = req?.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all details",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userDoc = new userModel({ ...req?.body, password: hashedPassword });

    await userDoc.save();

    return res.status(200).json({
      success: true,
      message: "User Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
};

// @url - auth/user
export const userLogin = async (req, res) => {
  const { email, password } = req?.body;

  try {
    // check if user exist
    const user = await userModel.findOne({ email });

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if(!isPasswordValid){
        return res.status(400).json({status:false,message:"Incorrect password"})
      }

      const OTP = generateOtp();

      await sendMail(req, res, email, OTP);

      await otp.create({
        email,
        otp: OTP,
        expiresAt: new Date(Date.now() + 300000),
      });

      res.json({ success: true, message: "Otp sent successfully!!" });
    } else {
      // Password is invalid
      res.status(401).json({ success: false, message: "Invalid email" });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
};


// @desc - createUser
// @method- POST

import userModel from "../../models/Authentication/userAuthModel.js";

import { pick } from "lodash-es";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// @url - auth/user
export const createUser = async (req, res, next) => {
  try {
    const { email, password, role } = req?.body;

    if ( !email || !password ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all details",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userDoc = new userModel({...req?.body,password:hashedPassword});

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

  // check if user exist
  const user = await userModel.findOne({ email });

  if (user) {
    // Compare the provided password with the hashed password
    const isPasswordValid = bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      // If password is valid, generate JWT token
      const token = jwt.sign({ email: user?.email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      // Send token in response
    res.json({ success: true, token });
    } else {
      // User doesn't exist
      res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
  }
};

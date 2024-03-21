// @desc - createUser
// @method- POST

import userModel from "../../models/Authentication/userAuthModel.js";

import { pick } from "lodash-es";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// @url - auth/user
export const createUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req?.body?.payload;

    if (!name || !email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "Please provide all details",
      });
    }

    let payload = pick(req?.body?.payload, [
      "name",
      "email",
      "password",
      "role",
    ]);

    const salt = await bcrypt.genSalt(10);
    payload.password = await bcrypt.hash(payload.password, salt);

    const userDoc = new userModel(payload);

    await userDoc.save();

    return res.status(200).json({
      success: true,
      message: "User Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// @url - auth/user
export const userLogin = async (req, res) => {
  const { email, password } = req?.body?.payload;

  // check if user exist
  const user = await userModel.findOne({ email });

  if (user) {
    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      // If password is valid, generate JWT token
      const token = jwt.sign({ email: user?.email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      // Send token in response
      return res.json({ success: true, token });
    } else {
      // User doesn't exist
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
  }
};

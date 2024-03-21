import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["USER"],
      default: "USER",
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: [true, "password is required"] },
  },
  { timestamps: true }
);
const userModel = mongoose.model("user", UserSchema, "user");

export default userModel;

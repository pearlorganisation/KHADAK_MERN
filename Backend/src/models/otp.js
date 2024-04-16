import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    otp: String,
    email: String,
    expiresAt: {
      type: Date,
      // required:[true,"Expiry Date of otp must be provided"]
    },
  },
  { timestamps: true, expireAfterSeconds: 300 } // 5minutes
);

// otpSchema.index({ expire_at: 1 }, { expireAfterSeconds: 2 });

export default mongoose.model("OTP", otpSchema, "otp");

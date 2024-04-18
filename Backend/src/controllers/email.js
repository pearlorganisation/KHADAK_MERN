import auth from "../models/Authentication/userAuthModel.js";
import otpModel from "../models/otp.js";
import { generateOtp } from "../utils/Mail/ContactUs/otpGenerator.js";
import { sendMail } from "../utils/sendMail.js";

// -----------------------------------------------------------------------------------------------------------

// @desc - to send the otp to the specified email
// @route - POST /mail/sendOtp
// @access - PUBLIC

export const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required ",
      });
    }

    const currentDate = new Date();

    await otpModel.deleteMany({ expiresAt: { $lt: currentDate } });

    const user = await auth.find({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "This mail doesn't exists",
      });
    }

    const otp = generateOtp();

    await sendMail(req, res, email, otp);

    await otpModel.findOneAndUpdate(
      { email },
      { otp, expiresAt: new Date(Date.now() + 300000) },
      { $new: true } // return the modified otpDoc not the previous one
    );
    res.status(200).json({ status: true, message: "Otp sent successfully!!" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Internal Server Error! ${error.message}`,
    });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { otp } = req.body;

    if (!otp) {
      console
        .log("in bad otp stage")
        .status(400)
        .json({ success: false, message: "Bad Request! OTP is required" });
      return res;
    }

    const otpDoc = await otpModel.findOne({ otp });

    if (!otpDoc) {
      // console.log("incorrect otp");
      return res
        .status(400)
        .json({ success: false, message: "OTP is Incorrect" });
    }

    const currentDate = new Date();

    const otpExpiryDate = otpDoc.expiresAt;

    if (currentDate > otpExpiryDate) {

      return res
        .status(400)
        .json({ success: false, message: "OTP is expired" });
    }

    // console.log("final header error");

    res
      .status(200)
      .json({ success: true, message: "OTP verified successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Internal Server Error! ${error.message}`,
    });
  }
};

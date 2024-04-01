// ----------------------------------------Imports-----------------------------------------------------

import { contactMail } from "../../utils/Mail/ContactUs/contactMail.js";

// ------------------------------------------------------------------------------------------------------
export const sendContact = async (req, res) => {
  try {
    const { fullName, email, message, phoneNumber } = req?.body;

    const mailData = { fullName, email, message, phoneNumber };

    await contactMail(mailData);

    res.status(200).json({
      success: true,
      message: "Mail Sent Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

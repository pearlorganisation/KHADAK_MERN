import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const sendMail = async (req,res,email, otp) => {
    try {
    
    // transporter - configuration of admin/user to send mail from
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      service: "gmail",
      auth: {
        user: process.env.ADMIN_NODEMAILER_MAIL,
        pass: process.env.ADMIN_GOOGLE_APP_PASSWORD,
      },
    });

    const templatePath = path.join(
      __dirname,
      `../../views/emailVerification.ejs`
    );

    let data = await ejs.renderFile(templatePath, { email, otp });
    let mailOptions = {
      from: process.env.NODEMAILER_MAIL,
      to: email,
      subject: "Khadak Otp",
      html: data,
    };

    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
           reject(error);
        } else {
           resolve("Otp Sent Successfully" + info.response);
        }
      });
    });
  } catch (e) {
    // res.status(400).json({ status: false, message: e?.message });
  }
};

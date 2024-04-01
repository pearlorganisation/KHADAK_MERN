// ----------------------------------------------imports------------------------------------------------
import nodemailer from "nodemailer";
// -----------------------------------------------------------------------------------------------------

// sendOtp - this method is used to send otp on users mail
export const contactMail = (mailData) => {
  // transporter - configuration nodemailer with credentials to send mail

  console.log(mailData);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_MAIL,
      pass: process.env.NODEMAILER_MAIL_PASSWORD,
    },
  });

  //   mailOptions - details of the user to whom the mail needs to be delivered
  let mailOptions = {
    from: mailData?.email,
    to: process.env.NODEMAILER_MAIL,
    subject: "New message received from your website",
    html: `<h1>Name:${mailData?.fullName}</h1>
          <h1>Email:${mailData?.email}</h1>
          <h1>Message:${mailData?.message}</h1>
          <h1>Phone number:${mailData?.phoneNumber}</h1>`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error.message);
        return reject(error);
      } else {
        return resolve("Mail Sent Successfully" + info.response);
      }
    });
  });
};

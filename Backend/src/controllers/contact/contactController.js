import { Contact } from "../../models/contact/contactModel.js";
import { v2 as cloudinary } from "cloudinary";

// cloudinary config
cloudinary.config({
  cloud_name: "dl1ruqyzx",
  api_key: "649597643438667",
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const createContact = async (req, res) => {
  console.log(req.file);
  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    console.log(result);
    if (result) {
      const newContact = new Contact({
        title: req?.body?.title,
        description: req?.body?.description,
        phoneNumber: req?.body?.phoneNumber,
        profileImage: result?.secure_url,
        locality: req?.body?.locality,
        city: req?.body?.city,
      });

      await newContact.save();
      res.status(200).json({
        success: true,
      });
    } else {
      res.status(400).json({
        message: "image upload failed, Try again soon",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getContact = async (req, res) => {
  try {
    const data = await Contact.find();
    res.status(200).json({
      message: "true",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

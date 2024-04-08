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
    const { locality, city } = req?.query;
    console.log(locality, city);
    let pipeline = [];

    if (city && locality) {
      pipeline.push({
        $match: {
          $and: [{ locality }, { city }],
        },
      });
    } else if (locality) {
      pipeline.push({
        $match: {
          locality,
        },
      });
    } else if (city) {
      console.log("this is the city", city);
      pipeline.push({
        $match: {
          city: {
            $regex: `${city}`,
            $options: "i",
          },
        },
      });
    }

    const result =
      locality || city
        ? await Contact.aggregate(pipeline)
        : await Contact.find();

    res.status(200).json({
      message: "true",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error?.message || "Internal Server Error",
    });
  }
};

export const updateContact = async (req, res) => {
  const { key } = req.params; // Assuming the key is passed in the URL params
  console.log(req.file);
  try {
    let updateFields = {};
    if (req.file) {
      const result = await cloudinary.uploader.upload(req?.file?.path);
      if (result) {
        updateFields.profileImage = result?.secure_url;
      }
    }

    if (req.body.title) updateFields.title = req.body?.title;
    if (req.body.description) updateFields.description = req.body?.description;
    if (req.body.phoneNumber) updateFields.phoneNumber = req.body?.phoneNumber;
    if (req.body.locality) updateFields.locality = req.body?.locality;
    if (req.body.city) updateFields.city = req.body?.city;

    const updatedContact = await Contact.findOneAndUpdate(
      { _id: key },
      updateFields,
      {
        new: true,
      }
    );

    if (updatedContact) {
      res.status(200).json({
        success: true,
        updatedContact,
      });
    } else {
      res.status(404).json({
        message: "Contact not found",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};


// delete contact controller
export const DeleteContactData = async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    res.status(200).json({
      message: "item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
};

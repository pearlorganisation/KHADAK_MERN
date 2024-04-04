import { Blog } from "../../models/blogModel/blogModel.js";
import { v2 as cloudinary } from "cloudinary";

export const createBlog = async (req, res) => {
  console.log(req.file);
  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    console.log(result);
    if (result) {
      const newBlog = new Blog({
        title: req?.body?.title,
        description: req?.body?.description,
        profileImage: result?.secure_url,
      });

      await newBlog.save();
      res.status(200).json({
        success: true,
      });
    } else {
      res.status(400).json({
        message: "image upload failed, Try again soon",
      });
    }
  } catch (error) {
    res.status(500).json({ error: error?.message || "Internal server error" });
  }
};
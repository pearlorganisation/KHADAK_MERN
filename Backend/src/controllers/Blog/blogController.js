import { Blog } from "../../models/blogModel/blogModel.js";
import { v2 as cloudinary } from "cloudinary";

export const createBlog = async (req, res) => {
  console.log(req?.file);
  try {
    const result = await cloudinary.uploader.upload(req?.file?.path);

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

export const getBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (blogs) {
      res.status(200).json({
        success: "true",
        data: blogs,
      });
    } else {
      res.status(404).json({
        message: "Data not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
};

// update blog controller
export const updateBlog = async (req, res) => {
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

    const updatedBlog = await Blog.findOneAndUpdate(
      { _id: key },
      updateFields,
      {
        new: true,
      }
    );

    if (updatedBlog) {
      res.status(200).json({
        success: true,
        updatedBlog,
      });
    } else {
      res.status(404).json({
        message: "blog not found",
      });
    }
  } catch (error) {
    res.status(500).json({ error: error?.message || "Internal server error" });
  }
};

// delete blog controller
export const DeleteBlogData = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.status(200).json({
      message: "item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
};

import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    profileImage: String,
  },
  { timestamps: true }
);

export const Blog = mongoose.model("Blog", blogSchema);

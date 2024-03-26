import mongoose from "mongoose";

const heroSectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const heroSectionModel = mongoose.model(
  "HeroSection",
  heroSectionSchema,
  "HeroSection"
);
export default heroSectionModel;

import mongoose from "mongoose";

const DelhiHeroSectionSchema = new mongoose.Schema(
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
const delhiHeroSectionModel = mongoose.model(
  "DelhiHeroSection",
  DelhiHeroSectionSchema,
  "DelhiHeroSection"
);
export default delhiHeroSectionModel;

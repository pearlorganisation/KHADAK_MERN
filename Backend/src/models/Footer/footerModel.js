import mongoose from "mongoose";

const footerSchema = new mongoose.Schema(
  {
   
    description: {
      type: String,
      required: [true, "Description is required!!"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Footer", footerSchema, "Footer");

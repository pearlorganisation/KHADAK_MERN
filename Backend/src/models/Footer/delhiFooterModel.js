import mongoose from "mongoose";

const delhiFooterSchema = new mongoose.Schema(
  {
   
    description: {
      type: String,
      required: [true, "Description is required!!"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("DelhiFooter", delhiFooterSchema, "DelhiFooter");

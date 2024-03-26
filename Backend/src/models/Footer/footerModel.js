import mongoose from "mongoose";

const footerschema = new mongoose.Schema(
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

const footerModel = mongoose.model("Footer", footerschema, "Footer");

export default footerModel;

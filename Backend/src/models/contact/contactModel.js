import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    profileImage: {
      type: String,
    },
    phoneNumber: String,
    city: String,
    locality: String,
  },

  { timestamps: true }
);

export const Contact = mongoose.model("Contact", contactSchema);

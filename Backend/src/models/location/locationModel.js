import mongoose from "mongoose";

// city schema
const citySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    localities: [String],
  },
  { timestamps: true }
);
export const City = mongoose.model("City", citySchema);

// locality schema
const localitySchema = new mongoose.Schema(
  {
    name: String,
    city: String,
  },
  { timestamps: true }
);

export const Locality = mongoose.model("locality", localitySchema);

import mongoose from "mongoose";
import dotenv from "dotenv";

// function to connect the mongodb database to provided url
dotenv.config();
export const mongoConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(` mongo database connect successfully`);
  } catch (error) {
    console.log(
      error.message
        ? `Mongodb connection failed : ${error.message}`
        : `Mongodb connection failed`
    );
  }
};

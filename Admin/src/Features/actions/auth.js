import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";

//Login Api

export const logIn = createAsyncThunk(
  "auth/userLogin",
  async (payload, { rejectWithValue }) => {
    try {

      const response = await instance.post("https://khadak-mern.onrender.com/auth/userLogin", payload, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";

//Login Api

export const logIn = createAsyncThunk(
    "user/login",
    async (payload, { rejectWithValue }) => {
      try {
        const response = await instance.post("auth/userLogin", payload, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Fetch signUp data:::", response);
        return response;
      } catch (error) {
        console.log(error);
        return rejectWithValue(error);
      }
    }
  );
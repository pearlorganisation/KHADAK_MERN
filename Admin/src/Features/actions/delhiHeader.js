import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";

//get all header api
export const getHeader = createAsyncThunk(
  "getHeader",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/delhiHeroSection`, payload, {
        withCredentials: true,
      });
 
      return data; 
    } catch (e) {
      return rejectWithValue(e?.message);
    }
  }
);

//update Header Api

export const updateHeader = createAsyncThunk(
  "header",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.put(
        `/delhiHerosection/${payload?.key}`,
        payload,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.message);
    }
  }
);



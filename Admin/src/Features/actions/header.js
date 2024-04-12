import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";

//get all header api
export const getHeader = createAsyncThunk(
  "getHeader",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/heroSection`, payload, {
        withCredentials: true,
      });
      console.log(data, "datatattatatatat");
      return data; 
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//update Header Api

export const updateHeader = createAsyncThunk(
  "header",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.put(
        `/herosection/${payload?.key}`,
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
      return rejectWithValue(error);
    }
  }
);



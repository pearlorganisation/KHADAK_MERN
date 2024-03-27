import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";

//get all footer api
export const getFooter = createAsyncThunk(
  "getFooter",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/footer`, payload, {
        withCredentials: true,
      });
      console.log(data, "datatattatatatat");
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//update Footer Api

export const updateFooter = createAsyncThunk(
  "footer",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.put(`/footer/${payload?.id}`, payload, {
        withCredentials: true,
        footers: {
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

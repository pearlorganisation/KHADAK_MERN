import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";

//create blog Api

export const createBlog = createAsyncThunk(
    "createBlog",
    async (payload, { rejectWithValue }) => {
      try {
  
        const response = await instance.post(`/blog`, payload, {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        return response;
      } catch (error) {
        console.log(error);
        return rejectWithValue(error.message);
      }
    }
  );

  //get blogs Api

export const getBlogs = createAsyncThunk(
    "getBlogs",
    async (payload, { rejectWithValue }) => {
      try {
  
        const response = await instance.get(`/blog`, payload, {
          withCredentials: true,
          footers: {
            "Content-Type": "application/json",
          },
        });
        return response.data;
      } catch (error) {
        console.log(error);
        return rejectWithValue(error.message);
      }
    }
  );
  
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

  //delete Blog api
export const deleteBlog = createAsyncThunk(
  'deleteBlog',
  async (id, { rejectWithValue }) => {
    try {
      console.log(id, 'id');
      const response = await instance.delete(
        `/blog/${id}`,
        
        { withCredentials: true }
      );
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//update blog Api

export const updateBlog = createAsyncThunk(
  "updateBlog",
  async ({id,payload}, { rejectWithValue }) => {
    try {

      const response = await instance.put(`/blog/${id}`, payload, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
    
      return rejectWithValue(error.message);
    }
  }
);
  
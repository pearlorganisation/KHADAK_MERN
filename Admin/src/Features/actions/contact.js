import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";


//create contact Api

export const createContact = createAsyncThunk(
    "createContact",
    async (payload, { rejectWithValue }) => {
      try {
  
        const response = await instance.post(`/contact`, payload, {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        return response;
      } catch (error) {
        console.log(error);
        return rejectWithValue(error);
      }
    }
  );

//get contacts Api

export const getContacts = createAsyncThunk(
    "getContact",
    async (payload, { rejectWithValue }) => {
      try {
  
        const response = await instance.get(`/contact`, payload, {
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
  
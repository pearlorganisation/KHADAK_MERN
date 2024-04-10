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
        return rejectWithValue(error.message);
      }
    }
  );

//update contact Api

export const updateContact = createAsyncThunk(
    "updateContact",
    async ({id,payload}, { rejectWithValue }) => {
      try {
  
        const response = await instance.put(`/contact/${id}`, payload, {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        return response;
      } catch (error) {
        // console.log(error);
        return rejectWithValue(error.message);
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
        return rejectWithValue(error.message);
      }
    }
  );


  //delete Contact api
export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      console.log(id, 'id');
      const response = await instance.delete(
        `/contact/${id}`,
        
        { withCredentials: true }
      );
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
  
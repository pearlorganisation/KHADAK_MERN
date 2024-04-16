import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";


//delete Footer api
export const deleteFooter = createAsyncThunk(
  'deleteFooter',
  async (id, { rejectWithValue }) => {
    try {
      console.log(id, 'id');
      const response = await instance.delete(
        `/delhiFooter/${id}`,
        
        { withCredentials: true }
      );
      return response;
    } catch (e) {
      return rejectWithValue(e?.message);
    }
  }
);

//get all footer api
export const getFooter = createAsyncThunk(
    'getFooter',
    async (payload, { rejectWithValue }) => {
      try {
        const { data } = await instance.get('/delhiFooter', payload, {
          withCredentials: true,
        });
        console.log(data, 'datatattatatatat');
        return data;
      } catch (e) {
        return rejectWithValue(e?.message);
      }
    }
  );

//update Footer Api

export const updateFooter = createAsyncThunk(
  "Updatefooter",
  async (payload, { rejectWithValue }) => {
    try {

      const response = await instance.put(`/delhiFooter/${payload?.id}`, payload, {
        withCredentials: true,
        footers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
    
      return rejectWithValue(error?.message);
    }
  }
);
//create Footer Api

export const createFooter = createAsyncThunk(
  "createfooter",
  async (payload, { rejectWithValue }) => {
    try {

      const response = await instance.post(`/delhiFooter`, payload, {
        withCredentials: true,
        footers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.message);
    }
  }
);

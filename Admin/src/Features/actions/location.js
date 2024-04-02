import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";

//get all location api
export const getLocation = createAsyncThunk(
  "getlocation",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/location/City`, payload, {
        withCredentials: true,
      });
      console.log(data, "datatattatatatat");
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//add city API
export const addCity = createAsyncThunk(
  "addCity",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`/location/City`, payload, {
        withCredentials: true,
      });
      console.log(data, "datatattatatatat");
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//add locality API
export const addLocality = createAsyncThunk(
  "addLocality",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`/location/locality`, payload, {
        withCredentials: true,
      });
      console.log(data, "datatattatatatat");
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//delete City with locality API
export const deleteCity = createAsyncThunk(
  "deleteCity",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`/location/City/${id}`, {
        withCredentials: true,
      });
      console.log(data, "datatattatatatat");
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
//delete locality API
export const deleteLocality = createAsyncThunk(
  "deleteLocality",
  async ({id,payload}, { rejectWithValue }) => {
    console.log(id, locality)
    try {
      const { data } = await instance.post(
        `/location/locality/${id}`,
        { locality },
        {
          withCredentials: true,
        }
      );
      console.log(data, "datatattatatatat");
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

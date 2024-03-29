import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { addCity, addLocality, deleteCity, getLocation } from "../actions/location";



// -------------------------------------------------------------------------------------------

// initialState --
const initialState = {
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
  isDeleted :false,
  locationData: [],
};

// -------------------------------------- Slices------------------------------------------------
const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    clearDeleteState:(state)=>{
      state.isDeleted = false
    },
    clearAddCityState: (state) => {
      state.isSuccess = false;
     
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getLocation.pending, (state, action) => {
        state.isLoading = true;
        state.isDeleted = false;
        state.errorMessage = '';
      })
      .addCase(getLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDeleted = false;
        state.errorMessage = '';
        state.locationData = action.payload.data;
        console.log('Reducer - get locationData:', state.locationData);
      })
      .addCase(getLocation.rejected, (state, action) => {
        state.isLoading = false;
        state.isDeleted = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
        
      })
    .addCase(addCity.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = '';
      })
      .addCase(addCity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = '';
        // state.locationData = action.payload;
        
      })
      .addCase(addCity.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
        
      })
    .addCase(addLocality.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = '';
      })
      .addCase(addLocality.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = '';
        state.locationData=action.payload.data
        
      })
      .addCase(addLocality.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
        
      })
    .addCase(deleteCity.pending, (state, action) => {
        state.isLoading = true;
        state.isDeleted = false;
        state.errorMessage = '';
      })
      .addCase(deleteCity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDeleted = true;
        state.errorMessage = '';

        
      })
      .addCase(deleteCity.rejected, (state, action) => {
        state.isLoading = false;
        state.isDeleted = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
        
      })

     
  },
});

// ===========================================Exports==================================================
export default locationSlice.reducer;
export const { clearAddCityState, clearDeleteState,} = locationSlice.actions;

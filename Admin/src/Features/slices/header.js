import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getHeader, updateHeader } from "../actions/header";


// -------------------------------------------------------------------------------------------

// initialState --
const initialState = {
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
  isDeleted :false,
  
  headerData: [],
};

// -------------------------------------- Slices------------------------------------------------
const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: { 
    clearSuccessState: (state) => {
    state.isSuccess = false;
},},
  extraReducers: (builder) => {
    builder
    .addCase(getHeader.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = '';
      })
      .addCase(getHeader.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDeleted = false;
        state.errorMessage = '';
        console.log('API Response Payload:', action.payload);
        state.headerData = action.payload.data;
        console.log('Reducer - get headerData:', state.headerData);
      })
      .addCase(getHeader.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
        
      })
      .addCase(updateHeader.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
       
        state.errorMessage = "";
      })
      .addCase(updateHeader.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
       
        state.headerData = action.payload.data;
      })
      .addCase(updateHeader.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      });
  },
});

// ===========================================Exports==================================================
export default headerSlice.reducer;
export const { clearSuccessState} = headerSlice.actions;

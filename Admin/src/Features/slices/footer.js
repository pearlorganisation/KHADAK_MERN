import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getFooter, updateFooter } from "../actions/footer";


// -------------------------------------------------------------------------------------------

// initialState --
const initialState = {
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
  isDeleted :false,
  
  footerData: [],
};

// -------------------------------------- Slices------------------------------------------------
const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getFooter.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = '';
      })
      .addCase(getFooter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDeleted = false;
        state.errorMessage = '';
        console.log('API Response Payload:', action.payload);
        state.footerData = action.payload.data;
        console.log('Reducer - get footerData:', state.footerData);
      })
      .addCase(getFooter.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
        
      })
      .addCase(updateFooter.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
       
        state.errorMessage = "";
      })
      .addCase(updateFooter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
       
        state.footerData = action.payload.data;
      })
      .addCase(updateFooter.rejected, (state, action) => {
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
export default footerSlice.reducer;
export const {} = footerSlice.actions;

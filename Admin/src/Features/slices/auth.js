import { createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';
import { logIn } from "../actions/auth";






// -------------------------------------------------------------------------------------------

// initialState -- initial state of authentication
const initialState = {
    isLoading: false,
   
    errorMessage: "",
    
    userData:[],
  };

  // -------------------------------------- Slices------------------------------------------------
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
     
    },
    extraReducers: (builder) => {
      builder

      .addCase(logIn.pending, (state, action) => {
        state.isLoading = true;
        
        state.errorMessage = "";
    
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        
        state.userData= action.payload.data
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
       
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      })

    },
});

// ===========================================Exports==================================================
export default authSlice.reducer;
export const {

} = authSlice.actions;
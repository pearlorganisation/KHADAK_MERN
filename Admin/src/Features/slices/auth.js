import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { logIn, verifyOTP } from "../actions/auth";

// -------------------------------------------------------------------------------------------

// initialState -- initial state of authentication
const initialState = {
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
  isLogInSuccess: false,
  isUserLoggedIn: false,
  loggedInUserData: {},

  userData: [],
};

// -------------------------------------- Slices------------------------------------------------
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(logIn.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isLogInSuccess = false;
      
        state.errorMessage = "";
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.loggedInUserData = action.payload;
        state.isLogInSuccess = true;
        state.userData = action.payload.data;
        toast.success("OTP sent to your email successfully", {
          position: "top-center",
         }); 
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isLogInSuccess = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-center",
        });
      })
      // verifyOtp
      .addCase(verifyOTP.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isUserLoggedIn = false;
        state.errorMessage = "";
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isUserLoggedIn= true;
        
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isUserLoggedIn = false;  
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      })
      
  },
});

// ===========================================Exports==================================================
export default authSlice.reducer;
export const {} = authSlice.actions;

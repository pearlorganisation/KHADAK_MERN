import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { logIn } from "../actions/auth";

// -------------------------------------------------------------------------------------------

// initialState -- initial state of authentication
const initialState = {
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
  isOtpSentSuccessfully: false,
  isLogInSuccess: false,
  isLogoutSuccess: false,
  isUserLoggedIn: false,
  loggedInUserData: {},
  isOtpVerified: false,
  isOtpMailSent: false,
  isPasswordReset: false,
  isMailSent: false,
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
        state.isUserLoggedIn = false;
        state.errorMessage = "";
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.loggedInUserData = action.payload;
        state.isUserLoggedIn = true;
        state.isLogInSuccess = true;
        state.userData = action.payload.data;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isLogInSuccess = false;
        state.isUserLoggedIn = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      });
  },
});

// ===========================================Exports==================================================
export default authSlice.reducer;
export const {} = authSlice.actions;

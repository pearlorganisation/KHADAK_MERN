import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { createContact, getContacts, updateContact } from "../actions/contact";


// -------------------------------------------------------------------------------------------

// initialState --
const initialState = {
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
  isDeleted :false,
  
  contactData: [],
};

// -------------------------------------- Slices------------------------------------------------
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getContacts.pending, (state, action) => {
        state.isLoading = true;
        
        state.isDeleted = false;
        state.errorMessage = '';
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDeleted = false;
       
        state.errorMessage = '';
        console.log('API Response Payload:', action.payload);
        state.contactData = action.payload.data;
        console.log('Reducer - get contactData:', state.contactData);
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
        
      })
     
      //create contact
      .addCase(createContact.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
       
        state.errorMessage = "";
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
       
        state.contactData = action.payload.data;
      })
      .addCase(createContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      })
      //update contact
      .addCase(updateContact.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
       
        state.errorMessage = "";
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
       
        state.contactData = action.payload.data;
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      })
    
  },
});

// ===========================================Exports==================================================
export default contactSlice.reducer;
export const {} = contactSlice.actions;

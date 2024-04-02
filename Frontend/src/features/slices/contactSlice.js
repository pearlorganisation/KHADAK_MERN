import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactData: null,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    getContact: (state, action) => {
      return (state.contactData = action?.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getContact } = contactSlice.actions;

export default contactSlice.reducer;

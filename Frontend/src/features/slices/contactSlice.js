import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactData: null,
  cityName: "Delhi",
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    getContact: (state, action) => {
      return (state.contactData = action?.payload);
    },
    changeCity: (state, action) => {
      state.cityName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getContact, changeCity } = contactSlice.actions;

export default contactSlice.reducer;

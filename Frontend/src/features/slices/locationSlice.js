import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationData: null,
  selectedLocality: "Delhi",
};

export const locationslice = createSlice({
  name: "location",
  initialState,
  reducers: {
    getLocationData: (state, action) => {
      state.locationData = action?.payload;
    },
    selectedLocation: (state, action) => {
      state.selectedLocality = action?.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getLocationData, selectedLocation } = locationslice.actions;

export default locationslice.reducer;

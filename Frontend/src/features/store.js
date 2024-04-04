import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./slices/contactSlice";
import locationSlice from "./slices/locationSlice";

export const store = configureStore({
  reducer: {
    contact: contactSlice,
    location: locationSlice,
  },
});

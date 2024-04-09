import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./slices/contactSlice";
import locationSlice from "./slices/locationSlice";

import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "khadak",
  version: 1,
  storage,
};

const reducer = combineReducers({
  contact: contactSlice,
  location: locationSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
// Create a Redux Persistor
export const persistor = persistStore(store);

export const clearState = () => {
  persistor.purge(); // Clear the persisted state
};

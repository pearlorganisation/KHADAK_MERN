import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { injectStore } from "./services/axiosInterceptor.js";
import store from "./Features/store.js";
import persistStore from "redux-persist/es/persistStore";

injectStore(store)
let persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />

        </PersistGate>

      </Provider>
    
  </React.StrictMode>
);

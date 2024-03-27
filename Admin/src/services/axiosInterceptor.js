import axios from "axios";

// This code is used to access redux store in this file.
let store;
export const injectStore = (_store) => {
  store = _store;
};

// Creating new axios instance
export const instance = axios.create({
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
  baseURL:
    import.meta.env.VITE_REACT_APP_WORKING_ENVIRONMENT === "PRODUCTION"
      ? import.meta.env.VITE_REACT_APP_API_BASE_URL_MAIN_PRODUCTION
      : import.meta.env.VITE_REACT_APP_API_BASE_URL_DEVELOPMENT,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    let errorMessage = "";
    // Do something with response error
    let loggedInUserEmail = store.getState()?.auth?.loggedInUserData?.email;
    let originalRequest = error.config;

    if (
      error.response.status === 401 ||
      (error.response.status === 403 && !originalRequest._retry)
    ) {
      originalRequest._retry = true;
      try {
        if (loggedInUserEmail) {
          await instance.post(
            "/auth/refreshToken",
            { email: loggedInUserEmail },
            {
              withCredentials: true,
            }
          );
          return instance(originalRequest);
        } else {
          errorMessage = "Unauthorized Access";
          return Promise.reject(errorMessage);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }

    switch (Number(error.response.status)) {
      case 400:
        errorMessage = error.response.data.message || "Bad Request";
        break;

      case 404:
        errorMessage = error.response.data.message || "Resource Not Found";
        break;

      case 500:
        errorMessage = error.response.data.message || "Internal Server Error";
        break;

      default:
        errorMessage =
          error.response.data.message ||
          "Sorry, something went wrong. Please try again later.";
    }
    return Promise.reject(errorMessage);
  }
);

// ------------------------------------------- THE END -------------------------------------------

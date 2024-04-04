import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { createBlog, getBlogs} from "../actions/blog";


// -------------------------------------------------------------------------------------------

// initialState --
const initialState = {
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
  isDeleted :false,
  
  blogData: [],
};

// -------------------------------------- Slices------------------------------------------------
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getBlogs.pending, (state, action) => {
        state.isLoading = true;
        
        state.isDeleted = false;
        state.errorMessage = '';
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDeleted = false;
       
        state.errorMessage = '';
        console.log('API Response Payload:', action.payload);
        state.blogData = action.payload.data;
        console.log('Reducer - get blogData:', state.blogData);
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
        
      })
     
      //create blog
      .addCase(createBlog.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
       
        state.blogData = action.payload.data;
      })
      .addCase(createBlog.rejected, (state, action) => {
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
export default blogSlice.reducer;
export const {} = blogSlice.actions;

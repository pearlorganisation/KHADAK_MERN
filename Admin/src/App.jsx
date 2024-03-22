import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import ViewContact from "./pages/Contacts/ViewContact";
import  CreateContact  from "./pages/Contacts/CreateContact";
import CreateLocation from "./pages/Locations/CreateLocation";
import ViewLocation from "./pages/Locations/ViewLocations";
import CreateCity from "./pages/Locations/CreateCity";
import ViewBlogs from "./pages/Blogs/ViewBlogs";
import CreateBlog from "./pages/Blogs/CreateBlog";





  const App = () => {
    // const { isUserLoggedIn } = useAuth();
  const isUserLoggedIn = false

  const getRoutes=()=>{
    if(isUserLoggedIn){
      return [
        {
          path: "/",
          element: <Layout />,
    
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/contact",
              element: <ViewContact />,
            },
            {
              path: "/createContact",
              element: <CreateContact />,
            },
            {
              path: "/location",
              element: <ViewLocation />,
            },
            {
              path: "/addLocation",
              element: <CreateLocation />,
            },
            {
              path: "/addCity",
              element: <CreateCity />,
            },
            {
              path: "/blog",
              element: <ViewBlogs />,
            },
            {
              path: "/createBlog",
              element: <CreateBlog />,
            },
    
         
          ],
        },

      ]
    }
    else{
      return [{
        path:"/",
        element: <Login />,

      }]
    }
  }
  const router = createBrowserRouter(getRoutes());

  return (
    <div>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </div>
  );
};

export default App;

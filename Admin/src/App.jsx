import React, { useEffect } from "react";

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
import ViewHeaderContent from "./pages/HeaderContent/ViewHeaderContent";
import UpdateHeaderContent from "./pages/HeaderContent/UpdateHeaderContent";
import ViewFooterContent from "./pages/FooterContent/ViewFooterContent";
import UpdateFooterContent from "./pages/FooterContent/UpdateFooterContent";
import { useSelector } from "react-redux";
import CreateFooterContent from "./pages/FooterContent/CreateFooterContent";
import UpdateContact from "./pages/Contacts/UpdateContact";
import UpdateBlog from "./pages/Blogs/UpdateBlog";
import OtpVerification from "./pages/Auth/OtpVerification";
import ViewDelhiHeaderContent from "./pages/DelhiHeaderContent/ViewHeaderContent";
import UpdateDelhiHeaderContent from "./pages/DelhiHeaderContent/UpdateHeaderContent";
import ViewDelhiFooterContent from "./pages/DelhiFooterContent/ViewFooterContent";
import UpdateDelhiFooterContent from "./pages/DelhiFooterContent/UpdateFooterContent";
import CreateDelhiFooterContent from "./pages/DelhiFooterContent/CreateFooterContent";





  const App = () => {
    // const { isUserLoggedIn } = useAuth();
    
    // const {isUserLoggedIn , isLoading} = useSelector((state)=>state.auth)
    const isUserLoggedIn = true
useEffect(()=>{

},[isUserLoggedIn])
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
              path: "/updateContact/:key",
              element: <UpdateContact/>,
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
            {
              path: "/updateBlog/:id",
              element: <UpdateBlog />,
            },
            {
              path: "/header",
              element: <ViewHeaderContent />,
            },
            {
              path: "/updateHeader/:key",
              element: <UpdateHeaderContent />,
            },


            {
              path: "/delhiHeader",
              element: <ViewDelhiHeaderContent />,
            },
            {
              path: "/updateDelhiHeader/:key",
              element: <UpdateDelhiHeaderContent />,
            },

    
            {
              path: "/footer",
              element: <ViewFooterContent />,
            },
            {
              path: "/updateFooter/:id",
              element: <UpdateFooterContent />,
            },
            {
              path: "/createFooter/",
              element: <CreateFooterContent />,
            },


            {
              path: "/delhiFooter",
              element: <ViewDelhiFooterContent />,
            },
            {
              path: "/updateDelhiFooter/:id",
              element: <UpdateDelhiFooterContent />,
            },
            {
              path: "/createDelhiFooter/",
              element: <CreateDelhiFooterContent />,
            },
    
         
          ],
        },

      ]
    }
    else{
      return [{
        path:"/",
        element: <Login />,

      },
      {
        path:"/otpVerification",
        element: <OtpVerification/>,

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

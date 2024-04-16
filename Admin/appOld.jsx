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
import PrivateRoutes from "./components/PrivateRoutes";





  const App = () => {
    // const { isUserLoggedIn } = useAuth();
    // const navigate= useNavigate()
    // const {isUserLoggedIn , isLoading} = useSelector((state)=>state.auth)
    // const isUserLoggedIn = true

    



  const getRoutes=()=>{
  
      return [
        {
          path: "/",
          element: <PrivateRoutes><Layout /></PrivateRoutes>,
    
          children: [
            {
              path: "/",
              element: <PrivateRoutes><Home /></PrivateRoutes>,
            },
            {
              path: "/contact",
              element: <PrivateRoutes><ViewContact /></PrivateRoutes>,
            },
            {
              path: "/createContact",
              element:<PrivateRoutes> <CreateContact /></PrivateRoutes>,
            },
            {
              path: "/updateContact/:key",
              element: <PrivateRoutes><UpdateContact/></PrivateRoutes>,
            },
            {
              path: "/location",
              element: <PrivateRoutes><ViewLocation /></PrivateRoutes>,
            },
            {
              path: "/addLocation",
              element: <PrivateRoutes><CreateLocation /></PrivateRoutes>,
            },
            {
              path: "/addCity",
              element:<PrivateRoutes><CreateCity /></PrivateRoutes> ,
            },
            {
              path: "/blog",
              element: <PrivateRoutes><ViewBlogs /></PrivateRoutes>,
            },
            {
              path: "/createBlog",
              element: <PrivateRoutes><CreateBlog /></PrivateRoutes>,
            },
            {
              path: "/updateBlog/:id",
              element: <PrivateRoutes><UpdateBlog /></PrivateRoutes>,
            },
            {
              path: "/header",
              element: <PrivateRoutes><ViewHeaderContent /></PrivateRoutes>,
            },
            {
              path: "/updateHeader/:key",
              element: <PrivateRoutes><UpdateHeaderContent /></PrivateRoutes>,
            },


            {
              path: "/delhiHeader",
              element: <PrivateRoutes><ViewDelhiHeaderContent /></PrivateRoutes>,
            },
            {
              path: "/updateDelhiHeader/:key",
              element:<PrivateRoutes><UpdateDelhiHeaderContent /></PrivateRoutes> ,
            },

    
            {
              path: "/footer",
              element: <PrivateRoutes><ViewFooterContent /></PrivateRoutes>,
            },
            {
              path: "/updateFooter/:id",
              element: <PrivateRoutes><UpdateFooterContent /></PrivateRoutes>,
            },
            {
              path: "/createFooter/",
              element: <PrivateRoutes><CreateFooterContent /></PrivateRoutes>,
            },


            {
              path: "/delhiFooter",
              element: <PrivateRoutes><ViewDelhiFooterContent /></PrivateRoutes>,
            },
            {
              path: "/updateDelhiFooter/:id",
              element: <PrivateRoutes><UpdateDelhiFooterContent /></PrivateRoutes>,
            },
            {
              path: "/createDelhiFooter/",
              element: <PrivateRoutes><CreateDelhiFooterContent /></PrivateRoutes>,
            },
            {
              path:"/login",
              element: <Login />,
      
            },
            {
              path:"/otpVerification",
              element: <OtpVerification/>,
      
            }
    
         
          ],
        },

      ]
    
    
  }

  const router = createBrowserRouter(getRoutes());
 
//   useEffect(()=>{
//   if(!isUserLoggedIn){
//     navigate("/login")
//   }
// },[])


  return (
    <div>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </div>
  );
};

export default App;

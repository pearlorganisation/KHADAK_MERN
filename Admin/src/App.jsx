import React, { useEffect } from "react";

import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import ViewContact from "./pages/Contacts/ViewContact";
import CreateContact from "./pages/Contacts/CreateContact";
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
import { Toaster } from "react-hot-toast";

const App = () => {

  const { isUserLoggedIn, isLogInSuccess } = useSelector((state) => state.auth);
  // const isUserLoggedIn = true

  const getRoutes = () => {
  
    return [
      {
        path: "/",
        element: <Layout />,

        children: [
          {
            path: "/",
            element: !isUserLoggedIn ? <Login /> : <Home />, // Render Login page only if user is not logged in
          },
          {
            path: "/otpVerification",
            element:
              !isUserLoggedIn && isLogInSuccess ? (
                <OtpVerification />
              ) : (
                <Navigate to="/" />
              ),
          },
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
            element: <UpdateContact />,
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
    ];
  
  };
  const router = createBrowserRouter(getRoutes());

  return (
    <div><Toaster
    position="top-right"
    reverseOrder={false}
    containerClassName="overflow-auto"
  />
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
    </div>
  );
};

export default App;

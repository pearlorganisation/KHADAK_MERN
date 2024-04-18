import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Blogs from "./pages/blogs/Blogs.jsx";
import CallGirls from "./pages/call girls/CallGirls.jsx";
import { store } from "./features/store.js";
import { Provider } from "react-redux";
import BlogReadMore from "./pages/blogs/BlogReadMore.jsx";
import { useEffect } from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact-us/",
          element: <Contact />,
        },
        {
          path: "/blog/",
          element: <Blogs />,
        },
        {
          path: "/blog/:title",
          element: <BlogReadMore />,
        },

        {
          path: "/:city",
          element: <Home />,
        },
        {
          path: "/:city/",
          element: <Home />,
        },
        // {
        //   path: "/:city/:locality",
        //   element: <Home />,
        // },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </Provider>
  );
}

export default App;

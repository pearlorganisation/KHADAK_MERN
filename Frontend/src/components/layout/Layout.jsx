import React, { useEffect } from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { clearState } from "../../features/store";
import { changeCity, changeLocality } from "../../features/slices/contactSlice";

const Layout = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  if (window.location.pathname === "/") {
    dispatch(changeCity("Delhi"));
    dispatch(changeLocality(""));
  }

  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

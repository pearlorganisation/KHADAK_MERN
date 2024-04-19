import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { clearState } from "../../features/store";
import { changeCity, changeLocality } from "../../features/slices/contactSlice";

const Layout = () => {
  return (
    <div className="prevent-select" onContextMenu={(e) => e.preventDefault()}>
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </div>
  );
};

export default Layout;

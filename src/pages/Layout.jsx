import React from "react";
import { Outlet } from "react-router-dom";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";


const Layout = () => {
  return (
    <>
        <TopNavBar />
        <Outlet />
        <Footer />
    </>
  );
};

export default Layout;

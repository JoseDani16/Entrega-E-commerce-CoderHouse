import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar/NavBar";

const LayoutGeneral = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutGeneral;

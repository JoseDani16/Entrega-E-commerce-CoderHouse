import React from "react";
import { Outlet } from "react-router-dom";
import CategorySubNav from "../Components/Navbar/Components/CategorySubNav";

const LayoutProducts = () => {
  return (
    <>
      <CategorySubNav />
      <Outlet />
    </>
  );
};

export default LayoutProducts;

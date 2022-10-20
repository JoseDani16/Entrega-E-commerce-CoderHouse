import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "../Components/Products/ProductDetail";
import LayoutGeneral from "../Layout/LayoutGeneral";
import LayoutProducts from "../Layout/LayoutProducts";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import CartProvider from "./CartContext";

const Router = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<LayoutGeneral />}>
            <Route index element={<Home />} />
            <Route element={<LayoutProducts />}>
              <Route path="/Products/" element={<Products />} />
              <Route path="/Products/:categoryName" element={<Products />} />
              <Route
                path="/ProductDetail/:ItemID"
                element={<ProductDetail />}
              />
            </Route>
            <Route path="/Cart/" element={<Cart />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default Router;

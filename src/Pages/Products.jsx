import React from "react";
import ProductList from "../Components/Products/ProductList";
import { Titulos } from "../Styles/ProductsStyled";

const Products = () => {
  return (
    <>
      <Titulos>¡Elige que producto te llevarás hoy!</Titulos>
      <ProductList />
    </>
  );
};

export default Products;

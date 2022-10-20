import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../../Services/api";
import { ContainerA } from "../../Styles/ProductsStyled";
import Item from "./Components/Item";
import Spinner from "react-bootstrap/Spinner";
import { CenterContainer } from "../../Styles/HomeStyled";

const ProductList = () => {
  const [productListArray, setProductListArray] = useState();
  const { categoryName } = useParams();

  useEffect(() => {
    getItems().then((results) => {
      categoryName
        ? setProductListArray(
            results.filter((producto) => producto.categoria === categoryName)
          )
        : setProductListArray(results);
    });
  }, [categoryName]);

  return productListArray ? (
    <ContainerA>
      <Item productos={productListArray} />
    </ContainerA>
  ) : (
    <CenterContainer>
      <Spinner animation="border" variant="dark" />
    </CenterContainer>
  );
};

export default ProductList;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../../Services/api";
import ItemDetail from "./Components/ItemDetail";
import Spinner from "react-bootstrap/Spinner";
import { CenterContainer } from "../../Styles/HomeStyled";
const ProductDetail = () => {
  const { ItemID } = useParams();
  const [producto, setProducto] = useState();
  useEffect(() => {
    getItemById(ItemID).then((res) => {
      const aux = res;
      aux.id = ItemID;
      setProducto(aux);
    });
  }, []);

  return producto ? (
    <ItemDetail producto={producto} />
  ) : (
    <CenterContainer>
      <Spinner animation="border" variant="dark" />
    </CenterContainer>
  );
};

export default ProductDetail;

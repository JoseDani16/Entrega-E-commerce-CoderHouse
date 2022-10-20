import React, { useState } from "react";
import { useCartContext } from "../../../App/CartContext";
import {
  ContainerA,
  ImageContainer,
  Price,
  SubContainerB,
  Text,
} from "../../../Styles/ProductsStyled";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  const { addToCart } = useCartContext();
  console.log(producto);
  const [readyState, setReadyState] = useState(false);

  const onAdd = (quantity) => {
    setReadyState(!readyState);
    addToCart(producto, quantity);
  };

  return (
    <ContainerA>
      <SubContainerB W="50%">
        <ImageContainer>
          <img src={producto.imgURL} alt="" />
        </ImageContainer>
        <p>{producto.descripcion}</p>
      </SubContainerB>
      <SubContainerB W="40%">
        <Text>{producto.nombre}</Text>
        <Price>
          <span>Precio: </span>
          {producto.moneda} {producto.precio}
        </Price>
        <ItemCount
          stock={producto.stock}
          onAdd={onAdd}
          readyState={readyState}
        ></ItemCount>
      </SubContainerB>
    </ContainerA>
  );
};

export default ItemDetail;

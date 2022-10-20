import React from "react";
import { useCartContext } from "../../../App/CartContext";
import {
  ICSContainer,
  ImageContainerB,
  ItemCartContainer,
} from "../../../Styles/CartStyled";
import { StyledTrashIcon } from "../../../Styles/CartStyled";

const ItemCart = ({ products }) => {
  const { deleteItem } = useCartContext();
  return products
    ? products.map((product) => (
        <ItemCartContainer key={product.id}>
          <ICSContainer mW W="15%">
            <ImageContainerB>
              <img src={product.imgURL} alt={product.alt} />
            </ImageContainerB>
          </ICSContainer>
          <ICSContainer mW W="15%">
            <div>{product.nombre}</div>
          </ICSContainer>
          <ICSContainer mW W="20%">
            {" "}
            {product.moneda} {product.precio}
          </ICSContainer>
          <ICSContainer mW W="15%">
            <div>Cantidad: {product.cantidad}</div>
          </ICSContainer>
          <ICSContainer mW W="20%">
            <div>
              Subtotal: {product.moneda}
              {product.cantidad * product.precio}
            </div>
          </ICSContainer>
          <ICSContainer W="auto">
            <StyledTrashIcon onClick={() => deleteItem(product.id)} />
          </ICSContainer>
        </ItemCartContainer>
      ))
    : "Cargando";
};

export default ItemCart;

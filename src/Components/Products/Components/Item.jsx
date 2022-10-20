import React, { useState } from "react";
import {
  ContainerItem,
  ImageContainer,
  Price,
  SeeMore,
  StyledLink,
  Text,
} from "../../../Styles/ProductsStyled";

const Item = ({ productos }) => {
  const [Hover, setHover] = useState(false);

  return (
    productos &&
    productos.map((product) => {
      return product.stock !== 0 ? (
        <StyledLink key={product.id} to={`/ProductDetail/${product.id}`}>
          <ContainerItem
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <ImageContainer>
              <img src={product.imgURL} alt={product.alt} />
            </ImageContainer>
            <Text>{product.nombre}</Text>
            <Price>
              <span>Precio: </span>
              {product.moneda} {product.precio}
            </Price>
            <SeeMore O={Hover}>Ver más</SeeMore>
          </ContainerItem>
        </StyledLink>
      ) : null;
    })
  );
};

export default Item;

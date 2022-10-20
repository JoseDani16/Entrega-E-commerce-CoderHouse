import React, { useState } from "react";
import {
  CountButton,
  CountCartButton,
  CountContainer,
  CountNumber,
  CountSubContainer,
} from "../../../Styles/ItemCountStyled";
import { StyledLink } from "../../../Styles/ProductsStyled";
import { BiMinus, BiPlus } from "react-icons/bi";

const ItemCount = ({ stock, onAdd, readyState }) => {
  const [quantitySelected, setQuantitySelected] = useState(1);

  const increase = () => {
    if (quantitySelected < stock) {
      setQuantitySelected(quantitySelected + 1);
    }
  };
  const decrease = () => {
    if (quantitySelected > 1) {
      setQuantitySelected(quantitySelected - 1);
    }
  };

  return (
    <CountContainer>
      {readyState ? (
        <StyledLink to="/Cart/">
          <CountCartButton>Ir al Carrito</CountCartButton>
        </StyledLink>
      ) : (
        <>
          <CountSubContainer>Cantidad</CountSubContainer>
          <CountSubContainer>
            <CountButton onClick={increase}>
              <BiPlus />
            </CountButton>
            <CountNumber>{quantitySelected}</CountNumber>
            <CountButton onClick={decrease}>
              <BiMinus />
            </CountButton>
          </CountSubContainer>
          <CountSubContainer>
            <CountCartButton onClick={() => onAdd(quantitySelected)}>
              Enviar al Carrito
            </CountCartButton>
          </CountSubContainer>
        </>
      )}
    </CountContainer>
  );
};

export default ItemCount;

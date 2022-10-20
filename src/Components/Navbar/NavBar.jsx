import React, { useState } from "react";
import {
  CartIconNumber,
  NavbarContainer,
  NavLinksContainer,
  NavLinkStyled,
  StyledCartIcon,
} from "../../Styles/NavbarStyled";
import BgDiv from "./Components/BgDiv";
import BurguerButton from "./Components/BurguerButton";
import { useCartContext } from "../../App/CartContext";
import logo from "../../Assets/icon1.png";
const NavBar = () => {
  const { totalQuantity } = useCartContext();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <NavbarContainer>
      <BurguerButton open={open} handleClick={handleClick}></BurguerButton>
      <NavLinksContainer open={open}>
        <NavLinkStyled to="">
          <img src={logo} alt="" />
        </NavLinkStyled>
        <NavLinkStyled to="">Inicio</NavLinkStyled>
        <NavLinkStyled to="/Products">Productos</NavLinkStyled>
        <NavLinkStyled onClick={scrollToBottom}>Contacto</NavLinkStyled>
        <NavLinkStyled to="/Cart/">
          <StyledCartIcon />
          <CartIconNumber>{totalQuantity()}</CartIconNumber>
        </NavLinkStyled>
      </NavLinksContainer>
      <BgDiv open={open} handleClick={handleClick} />
    </NavbarContainer>
  );
};

export default NavBar;

import React from "react";
import { SubNavContainer } from "../../../Styles/NavbarStyled";
import { NavLinkStyled } from "../../../Styles/NavbarStyled";

const CategorySubNav = () => {
  return (
    <SubNavContainer>
      <NavLinkStyled fw="400" to="/Products/Calefacción">
        Calefacción
      </NavLinkStyled>
      <NavLinkStyled fw="400" to="/Products/Electrodomésticos">
        Electrodomésticos
      </NavLinkStyled>
      <NavLinkStyled fw="400" to="/Products/Muebles">
        Muebles
      </NavLinkStyled>
      <NavLinkStyled fw="400" to="/Products/Vehículos">
        Vehículos
      </NavLinkStyled>
    </SubNavContainer>
  );
};

export default CategorySubNav;

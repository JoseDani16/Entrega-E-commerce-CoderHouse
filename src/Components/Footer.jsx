import React from "react";
import { FooterContainer } from "../Styles/FooterStyled";
import { CenterContainer } from "../Styles/HomeStyled";

const Footer = () => {
  return (
    <FooterContainer>
      <CenterContainer noCent>
        <CenterContainer dir="column" noCent>
          <h3>Sobre nosotros</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            molestiae ea repudiandae non sunt earum dolore reiciendis nulla?
            Enim sit eaque soluta neque excepturi distinctio!
          </p>
        </CenterContainer>
        <CenterContainer dir="column" noCent>
          <h3>Reclamos</h3>
          <p>
            <a href="/#">Atencion al Cliente</a>
          </p>
        </CenterContainer>
        <CenterContainer dir="column" noCent>
          <h3>Contacto</h3>
          <ul>
            <li>New York, NY 10012, US</li>
            <li>info@example.com</li>
            <li>+ 01 234 567 88</li>
          </ul>
        </CenterContainer>
      </CenterContainer>
    </FooterContainer>
  );
};

export default Footer;

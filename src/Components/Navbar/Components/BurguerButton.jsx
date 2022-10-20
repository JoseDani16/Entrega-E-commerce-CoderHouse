import React from "react";
import { Burguer } from "../../../Styles/NavbarStyled";

const BurguerButton = (props) => {
  return (
    <Burguer onClick={props.handleClick} open={props.open}>
      <span></span>
      <span></span>
      <span></span>
    </Burguer>
  );
};

export default BurguerButton;

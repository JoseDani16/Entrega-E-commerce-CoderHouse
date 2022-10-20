import React from "react";
import { BgDivContainer } from "../../../Styles/NavbarStyled";

const BgDiv = (props) => {
  return <BgDivContainer onClick={props.handleClick} open={props.open} />;
};

export default BgDiv;

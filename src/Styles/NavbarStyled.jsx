import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsCart } from "react-icons/bs";
export const NavbarContainer = styled.div`
  width: 100%;
  background-color: #6b705c;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
//--------------------------------------------
export const Burguer = styled.div`
  width: 35px;
  height: 30px;
  margin: 10px 10px;
  position: absolute;
  right: 0;
  z-index: ${(props) => (props.open ? "3000" : "0")};
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
    position: ${(props) => (props.open ? "fixed" : "absolute")};
  }
  span {
    background-color: #ffe8d6;
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
    height: 4px;
    transition-duration: 500ms;
  }
  span:nth-child(1) {
    top: 0px;
    left: 0px;
    transform: ${(props) => (props.open ? "rotate(45deg)" : " scaleY(1.1)")};
    top: ${(props) => (props.open ? "13px;" : "")};
  }
  span:nth-child(2) {
    top: 13px;
    left: 0px;
    opacity: 1;
    transform: ${(props) => (props.open ? " rotate(45deg)" : " scaleY(1.1)")};
    opacity: ${(props) => (props.open ? "0" : "")};
  }
  span:nth-child(3) {
    bottom: 0px;
    left: 0px;
    transform: ${(props) => (props.open ? "rotate(-45deg)" : "scaleY(1.1)")};
    top: ${(props) => (props.open ? "13px;" : "")};
  }
`;

//--------------------------------------------------
export const BgDivContainer = styled.div`
  z-index: 1000;
  width: 100%;
  height: 100%;
  position: ${(props) => (props.open ? "fixed" : "absolute")};
  background-color: #6b705c;
  top: ${(props) => (props.open ? "0" : "-1000px")};
  right: ${(props) => (props.open ? "0" : "-2000px")};
  border-radius: 0 0 0 25%;
  transition: 0.5s all;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

//-------------------------------------------------
export const NavLinksContainer = styled.div`
  width: 90%;
  display: flex;

  height: 100%;
  align-items: center;
  justify-content: space-between;
  z-index: ${(props) => (props.open ? "2000" : "0")};
  transition: 0.5s all;
  position: ${(props) => (props.open ? "fixed" : "static")};
  img {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 768px) {
    top: ${(props) => (props.open ? "0" : "-1000px")};
    right: ${(props) => (props.open ? "0" : "-2000px")};
    flex-direction: column;
    justify-content: center;
    position: ${(props) => (props.open ? "fixed" : "absolute")};
    height: 100vh;
    width: 100%;
  }
`;
export const NavLinkStyled = styled(NavLink)`
  align-items: center;
  text-decoration: none;
  color: #ffe8d6;
  font-size: 1.4rem;
  font-weight: ${(props) => (props.fw ? props.fw : "bold")};
  padding: 0 10px;
  transition: 0.1s all;
  :hover {
    text-shadow: 0.5px 0.5px 4px black;
    color: #ffe8d6;
  }
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;
//--------------------------------------------
export const SubNavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background-color: #a5a58d;
  height: 45px;
`;

export const StyledCartIcon = styled(BsCart)`
  width: 40px;
  height: 40px;
  transition: 0.1s all;

  :hover {
    color: #ddbea9;
    transform: scale(0.9);
    cursor: pointer;
  }
`;

export const CartIconNumber = styled.div`
  display: inline;
  position: relative;
  width: 15px;
  margin: 0px;
  bottom: 15px;
  left: 0px;
  height: 20px;
  font-size: 0.8rem;
  border-radius: 100%;
`;

import { Link } from "react-router-dom";
import styled from "styled-components";

export const Titulos = styled.h1`
  font-weight: 1000;
  font-size: xx-large;
  text-align: center;
  margin-top: 25px;
`;

export const ContainerA = styled.div`
  margin: 25px 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const SubContainerB = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  width: ${(props) => (props.W ? props.W : "")};
  p {
    color: black;
    font-weight: 600;
  }
`;
export const SeeMore = styled.div`
  font-weight: 300;
  font-size: medium;
  transition: 0.1s all;
  opacity: ${(props) => (props.O ? "1" : "0")};
`;
//-------------Estilos del <Item/>-------------
export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 250px;
  max-height: 250px;
  height: 100%;
  border-radius: 15px;
  border: solid 1px #e8e8e8;
  transition: 0.3s all;
  background-color: #a5a58d;
  :hover {
    transform: scale(1.05);
  }
`;
export const Text = styled.div`
  text-align: center;
  font-size: large;
  font-weight: bold;
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  margin-bottom: 10px;
  width: 100%;
  border-radius: 15px 15px 0 0;
  img {
    border-radius: 15px 15px 0 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;
export const Price = styled.div`
  font-size: x-large;
  font-weight: bold;
  span {
    font-weight: 100;

    font-size: medium;
  }
`;
//-------------------Fin-------------------

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black !important;
  margin: 15px;
`;

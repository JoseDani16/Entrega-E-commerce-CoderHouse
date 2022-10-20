import styled from "styled-components";
import { IoTrashSharp } from "react-icons/io5";
import { BsCartCheck } from "react-icons/bs";
export const ItemCartContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  :nth-child(2n) {
    background-color: #b7b7a4;
  }
  :nth-child(2n + 1) {
    background-color: #a5a58d;
  }
`;
export const ICSContainer = styled.div`
  display: flex;
  width: ${(props) => (props.W ? props.W : "")};
  align-items: center;
  justify-content: start;
  height: 100%;
  padding: 10px;
  max-height: 200px;
  min-width: ${(props) => (props.mW ? "150px" : "auto")};
  font-size: x-large;
  font-weight: 600;
`;
export const ImageContainerB = styled.div`
  width: 80px;
  height: 80px;

  img {
    border-radius: 15px;
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: center center;
  }
`;

export const StyledButtonCart = styled.button`
  font-family: "Raleway", sans-serif;
  font-size: medium;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  background-color: none;
  border-radius: 15px;
  border: none;
  height: 30px;
  margin: 10px;
  transition: 0.1s all;
  background-color: #b7b7a4;
  :hover {
    background-color: #a5a58d;
    transform: scale(1.1);
    cursor: pointer;
  }
`;
export const StyledTrashIcon = styled(IoTrashSharp)`
  width: 25px;
  height: 25px;
  color: #ffe8d6;
  transition: 0.1s all;

  :hover {
    color: #ddbea9;
    transform: scale(1.1);
    cursor: pointer;
  }
`;
export const StyledCartCheckIcon = styled(BsCartCheck)`
  width: 25px;
  height: 25px;
  color: #ffe8d6;
  transition: 0.1s all;

  :hover {
    color: #ddbea9;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

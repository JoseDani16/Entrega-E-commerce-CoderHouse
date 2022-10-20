import styled from "styled-components";

export const CountContainer = styled.div`
  width: auto;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CountSubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;
export const CountNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 20px;
  padding: 10px;
`;
export const CountButton = styled.button`
  width: 90px;
  height: 30px;
  border: none;
  border-radius: 15px;
  background-color: #b7b7a4;
  transition: 0.1s all;
  :hover {
    background-color: #a5a58d;
    transform: scale(1.1);
    cursor: pointer;
  }
`;
export const CountCartButton = styled.button`
  background-color: #b7b7a4;
  width: 100px;
  height: 45px;
  border: none;
  border-radius: 15px;
  transition: 0.1s all;
  :hover {
    background-color: #a5a58d;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

import styled from "styled-components";

export const ContainerCarousel = styled.div`
  margin: 50px auto;

  height: 400px;
  max-width: 650px;
  img {
    object-fit: cover;
    height: 400px;
  }
  p {
    font-weight: 600;
    color: black;
    background-color: #80808060;
  }
  h3 {
    font-weight: 600;
    color: black;
    background-color: #80808050;
  }
`;

export const ContainerHome = styled.div`
  width: 100%;
`;

export const CenterContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: ${(props) => (props.noCent ? "start" : "center")};
  align-items: ${(props) => (props.dir ? "center" : "flex-start")};
  flex-direction: ${(props) => (props.dir ? props.dir : "row")};
  flex-wrap: wrap;
  h2 {
    margin: 15px;
    font-size: x-large;
    font-weight: 800;
  }
  h3 {
    margin: 15px;
    text-align: center;
    font-size: large;
    font-weight: 800;
  }

  p {
    max-width: 400px;
    margin: 10px;
    font-weight: 800;
  }
  a {
    color: blue;
  }
  li {
    max-width: 400px;
    margin: 10px;
    font-weight: 800;
  }
`;

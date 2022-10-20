import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { CenterContainer, ContainerCarousel } from "../../../Styles/HomeStyled";
import { useEffect, useState } from "react";
import { getItems } from "../../../Services/api";
import { StyledLink } from "../../../Styles/ProductsStyled";
import Spinner from "react-bootstrap/Spinner";

function CarouselPrueba() {
  const [storageAux, setStorageAux] = useState();

  const randomNumber = () => {
    return Math.round(Math.random()) * 2;
  };

  const randomThree = () => {
    const aux = [];
    aux.push(storageAux[randomNumber()]);
    aux.push(storageAux[randomNumber() + 3]);
    aux.push(storageAux[randomNumber() + 4]);
    setStorageAux(aux);
  };

  useEffect(() => {
    getItems().then((res) => {
      setStorageAux(res);
    });
  }, []);
  storageAux && storageAux.length === 7 && randomThree();

  return storageAux && storageAux.length === 3 ? (
    <ContainerCarousel>
      <Carousel variant="dark">
        <Carousel.Item>
          <StyledLink to={`/ProductDetail/${storageAux[0].id}`}>
            <img
              className="d-block w-100"
              src={storageAux[0].imgURL}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{storageAux[0].nombre}</h3>
              <p>{storageAux[0].descripcion}</p>
            </Carousel.Caption>
          </StyledLink>
        </Carousel.Item>
        <Carousel.Item>
          <StyledLink to={`/ProductDetail/${storageAux[1].id}`}>
            <img
              className="d-block w-100"
              src={storageAux[1].imgURL}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>{storageAux[1].nombre}</h3>
              <p>{storageAux[1].descripcion}</p>
            </Carousel.Caption>
          </StyledLink>
        </Carousel.Item>
        <Carousel.Item>
          <StyledLink to={`/ProductDetail/${storageAux[2].id}`}>
            <img
              className="d-block w-100"
              src={storageAux[2].imgURL}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>{storageAux[2].nombre}</h3>
              <p>{storageAux[2].descripcion}</p>
            </Carousel.Caption>
          </StyledLink>
        </Carousel.Item>
      </Carousel>
    </ContainerCarousel>
  ) : (
    <CenterContainer>
      <Spinner animation="border" variant="dark" />
    </CenterContainer>
  );
}

export default CarouselPrueba;

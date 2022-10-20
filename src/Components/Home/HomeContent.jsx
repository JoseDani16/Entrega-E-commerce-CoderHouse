import React from "react";
import { CenterContainer, ContainerHome } from "../../Styles/HomeStyled";
import CarouselPrueba from "./components/Carousel";

const HomeContent = () => {
  return (
    <ContainerHome>
      <CenterContainer dir="column">
        <h2>Una compra vale mas que mil palabras ;)</h2>
        <h3>
          ¡Dale un vistazo a alguno de los productos que te pueden interesar!
        </h3>
      </CenterContainer>
      <CarouselPrueba />
      <CenterContainer>
        <div>
          <h3>Mision</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            iusto beatae officiis iure cumque dolorem porro distinctio numquam,
            ut minima nobis, sit eius corrupti molestiae, totam asperiores error
            quos deserunt explicabo. Ipsam perspiciatis, vero quas, dolorem
            laborum velit impedit possimus eaque omnis incidunt iure.
            Perferendis, explicabo fugiat! Officiis consequuntur molestiae quia
            nulla voluptates cumque dolorem inventore facere commodi suscipit,
            asperiores fugit, repellat quos ex quaerat ipsa veniam maxime labore
            eaque, laudantium nobis. Itaque minus nisi quos autem inventore aut
            ducimus voluptas suscipit facilis adipisci, cumque sunt soluta!
            Optio, expedita rerum. Praesentium sit, quia molestias neque autem
            nam quidem odit tempore laboriosam eum, atque eos facilis
            necessitatibus facere reiciendis. Maiores id, consequuntur, dolorem
            rerum hic voluptas, deleniti voluptatum ullam consectetur porro ab.
            Nemo, id! Sint eos beatae quo, facere, porro, consectetur nam libero
            veniam voluptatibus aspernatur sapiente inventore. Quasi voluptas
            illo expedita iste culpa quo! Deserunt voluptate rem natus hic
            recusandae.
          </p>
        </div>
        <div>
          <h3>Vision</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vero
            laborum ex velit molestias. Nobis ipsa quo, consectetur doloribus
            qui sequi alias reprehenderit aperiam quae labore voluptatem dolore
            necessitatibus architecto.
          </p>
        </div>
      </CenterContainer>
    </ContainerHome>
  );
};

export default HomeContent;

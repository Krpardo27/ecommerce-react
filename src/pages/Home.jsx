import React from "react";
import CarruselProductos from "../components/home/CarruselProductos";
import Categorias from "../components/home/Categorias";

const Home = () => {
  return (
    <section>
      <CarruselProductos />
      <div>
        <Categorias />
      </div>
    </section>
  );
};

export default Home;

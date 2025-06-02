import CarruselProductos from "../components/home/CarruselProductos";
import Categorias from "../components/home/Categorias";
import ImagesGallery from "../components/home/ImagesGallery";
import Servicios from "../components/Servicios";

const Home = () => {
  return (
    <section>
      <CarruselProductos />
      <Categorias />
      <Servicios />
      <ImagesGallery />
    </section>
  );
};

export default Home;

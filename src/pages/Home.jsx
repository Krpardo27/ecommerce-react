import CarruselProductos from "../components/home/CarruselProductos";
import Categorias from "../components/home/Categorias";
import ImagesGallery from "../components/home/ImagesGallery";

const Home = () => {
  return (
    <section>
      <CarruselProductos />
      {/* <Categorias /> */}
      <ImagesGallery />
    </section>
  );
};

export default Home;

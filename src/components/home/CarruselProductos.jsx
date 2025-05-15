import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const productos = [
  {
    id: 1,
    nombre: "Silla Moderna",
    imagen: "/home/hero/carrusel-1.jpg",
  },
  {
    id: 2,
    nombre: "Sofá Elegante",
    imagen: "/home/hero/carrusel-2.jpg",
  },
  {
    id: 3,
    nombre: "Mesa de Comedor",
    imagen: "/home/hero/carrusel-3.jpg",
  },
  {
    id: 4,
    nombre: "Estantería Minimalista",
    imagen: "/home/hero/carrusel-4.jpg",
  },
];

export default function CarruselFullEmbla() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div
      className="relative w-full overflow-hidden"
      ref={emblaRef}
      style={{ maxHeight: "600px" }}
    >
      <div className="flex select-none touch-pan-y">
        {productos.map((p) => (
          <div key={p.id} className="min-w-full flex-shrink-0 relative">
            <img
              src={p.imagen}
              alt={p.nombre}
              className="w-full h-[600px] object-cover bg-center bg-no-repeat bg-cover" 
            />
            <div className="absolute bottom-10 left-10 text-white text-3xl font-bold drop-shadow-lg pointer-events-none">
              {p.nombre}
            </div>
          </div>
        ))}
      </div>

      {/* Botones navegación */}
      <button
        onClick={scrollPrev}
        className="absolute p-4 top-1/2 left-4 -translate-y-1/2 z-20 bg-white bg-opacity-70 rounded-full  shadow hover:bg-opacity-90 transition"
        aria-label="Anterior"
      >
        <FaChevronCircleLeft className="bg-red-400 w-full" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute p-4 top-1/2 right-4 -translate-y-1/2 z-20 bg-white bg-opacity-70 rounded-full  shadow hover:bg-opacity-90 transition"
        aria-label="Siguiente"
      >
        <FaChevronCircleRight className="text-3xl w-full" />
      </button>

      {/* Dots de paginación */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === selectedIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

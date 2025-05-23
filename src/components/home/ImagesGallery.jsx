import React, { useState } from "react";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  {
    id: 1,
    src: "/trabajos/closet-dormitorio.jpeg",
    width: 800,
    height: 1000,
    title: "Closet de dormitorio",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  },
  {
    id: 2,
    src: "/trabajos/mueble-cocina.jpeg",
    width: 1200,
    height: 800,
    title: "Mueble de cocina",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw",
  },
  {
    id: 3,
    src: "/trabajos/estante-cocina.jpeg",
    width: 1200,
    height: 900,
    title: "Rack moderno estilo 2",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw",
  },

  {
    id: 4,
    src: "/trabajos/oficina.jpeg",
    width: 1600,
    height: 1000,
    title: "Oficina",
    sizes: "(max-width: 768px) 100vw, 100vw",
  },
  {
    id: 5,
    src: "/trabajos/rack.jpeg",
    width: 1000,
    height: 1000,
    title: "Rack TV",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  },
  {
    id: 6,
    src: "/trabajos/rack-moderno.jpeg",
    width: 1000,
    height: 1500,
    title: "Rack moderno",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    id: 7,
    src: "/trabajos/rack-closet.jpeg",
    width: 800,
    height: 1200,
    title: "Rack closet",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    id: 8,
    src: "/trabajos/rack-closet.jpeg",
    width: 800,
    height: 1200,
    title: "Rack closet",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
];

export default function ImagesGallery() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="max-w-7xl mx-auto lg:px-4 p-2 my-5">
      <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-10 tracking-tight leading-tight lg:px-4 p-2">
        Galería de Trabajos
      </h2>

      {/* Masonry columns: 1 col mobile, 2 sm, 3 lg */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 lg:px-4 p-2">
        {images.map((image, i) => (
          <div
            key={image.id}
            className="relative cursor-pointer rounded-lg overflow-hidden group break-inside-avoid"
            onClick={() => setIndex(i)}
          >
            <img
              src={image.src}
              alt={image.title}
              sizes={image.sizes}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ aspectRatio: `${image.width} / ${image.height}` }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
              <div
                className="absolute inset-0 bg-black/50"
                style={{
                  maskImage: "linear-gradient(to top, black, transparent)",
                }}
              ></div>
              <h3 className="relative font-primary text-white text-[16px] z-10">
                {image.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map(({ src, title }) => ({ src, title }))}
        plugins={[Zoom]}
      />
    </div>
  );
}

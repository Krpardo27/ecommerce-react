import React from "react";

const Categorias = () => {
  const categorias = [
    { id: 1, nombre: "Sillas", img: "/home/categorias/silla.jpg" },
    { id: 2, nombre: "Mesas", img: "/home/categorias/mesa-madera.jpg" },
    {
      id: 3,
      nombre: "Estanterías y librerías",
      img: "/home/categorias/estanteria.jpg",
    },
    {
      id: 4,
      nombre: "Muebles de oficina",
      img: "/home/categorias/mueble-exterior.jpg",
    },
    {
      id: 5,
      nombre: "Muebles de almacenamiento",
      img: "/home/categorias/muebles-almacenaje.jpg",
    },
    {
      id: 6,
      nombre: "Muebles para exteriores",
      img: "/home/categorias/silla.jpg",
    },
  ];

  return (
    <div className="max-w-[1300px] mx-auto py-10">
      <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-10 lg:px-4 p-2">
        Categorías
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 lg:gap-20 gap-10 lg:px-4 p-2 justify-center">
        {categorias.map((categoria) => (
          <div
            key={categoria.id}
            className=" 
             text-center"
          >
            <div className="flex flex-col items-center justify-center gap-2 w-36 h-36">
              <img
                src={categoria.img}
                alt={categoria.nombre}
                className="rounded-full w-full h-full object-cover mb-2 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <h3 className="text-lg">{categoria.nombre}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorias;

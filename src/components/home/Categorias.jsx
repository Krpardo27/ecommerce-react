import React from "react";

const Categorias = () => {

  const categorias = [
    { id: 1, nombre: "Sillas" },
    { id: 2, nombre: "Mesas" },
    { id: 3, nombre: "Estanterías y librerías" },
    { id: 4, nombre: "Muebles de oficina" },
    { id: 5, nombre: "Muebles de almacenamiento" },
    { id: 6, nombre: "Muebles para exteriores" },
    { id: 7, nombre: "Iluminación y accesorios" },
    { id: 7, nombre: "Baño" },
  ];

  return <div>
    <h2 className="text-2xl font-bold mb-4">Categorías</h2>
    <div className="grid grid-cols-8 gap-4">
      {categorias.map((categoria) => (
        <div
          key={categoria.id}
          className="w-full flex justify-between bg-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-300 transition duration-300"
        >
          <h3 className="text-lg font-semibold">{categoria.nombre}</h3>
        </div>
      ))}
    </div>
  </div>;
};

export default Categorias;

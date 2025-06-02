import React from "react";
import { FaRegCommentDots } from "react-icons/fa";
import {
  BsBoxSeamFill,
  BsArrowReturnLeft,
  BsCurrencyDollar,
} from "react-icons/bs";

const Servicios = () => {
  return (
    <section className="bg-black lg:py-12 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:p-5 md:p-4 p-2 gap-6 max-w-[1300px] mx-auto text-center">
        <div className="flex justify-center items-center flex-col bg-gray-800 p-6 h-full">
          <FaRegCommentDots className="text-white text-4xl mb-2" />
          <div className="flex flex-col text-white ">
            <h3 className="text-lg leading-7 tracking-wide">
              Habla con un experto
            </h3>
            <p className="text-lg leading-7 tracking-wide">
              Ayuda y asesoramiento de expertos
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center flex-col bg-gray-800 p-6 h-full">
            <BsBoxSeamFill className="text-white text-4xl mb-2" />
            <div className="flex flex-col  text-white">
              <h3 className="text-lg leading-7 tracking-wide">
                Envío a todo Chile
              </h3>
              <p className="text-lg leading-7 tracking-wide">
                Rapidez y eficiencia
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center flex-col bg-gray-800 p-6 h-full">
            <BsArrowReturnLeft className="text-white text-4xl mb-2" />
            <div className="flex flex-col  text-white">
              <h3 className="text-lg leading-7 tracking-wide">
                Habla con un experto
              </h3>
              <p className="text-lg leading-7 tracking-wide">
                Ayuda y asesoramiento de expertos
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center flex-col bg-gray-800 p-6 h-full">
            <BsCurrencyDollar className="text-white text-4xl mb-2" />
            <div className="flex flex-col  text-white">
              <h3 className="text-lg leading-7 tracking-wide">
                Habla con un experto
              </h3>
              <p className="text-lg leading-7 tracking-wide">
                Ayuda y asesoramiento de expertos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;

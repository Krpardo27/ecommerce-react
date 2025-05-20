import React from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Slider from "react-slick";

const slides = [
  {
    title: "Bienvenido a Nuestra Web",
    subtitle:
      "Descubre nuestros servicios premium y lleva tu negocio al siguiente nivel.",
    // bgClass: "bg-gradient-to-r from-blue-700 via-blue-900 to-black",
    btnColor: "text-blue-900",
    btnHover: "hover:bg-gray-200",
    btnText: "Comenzar Ahora",
    src: "/trabajos/oficina.jpeg",
  },
  {
    title: "Diseño Innovador",
    subtitle: "Creamos experiencias digitales únicas para tu audiencia.",
    bgClass: "bg-gradient-to-r from-green-700 via-green-900 to-black",
    btnColor: "text-green-900",
    btnHover: "hover:bg-gray-200",
    btnText: "Ver Proyectos",
    src: "/trabajos/oficina.jpeg",
  },
  {
    title: "Soporte 24/7",
    subtitle: "Estamos aquí para ayudarte en cualquier momento.",
    bgClass: "bg-gradient-to-r from-red-700 via-red-900 to-black",
    btnColor: "text-red-900",
    btnHover: "hover:bg-gray-200",
    btnText: "Contactar Ahora",
    src: "/trabajos/oficina.jpeg",
  },
];

function SampleNextArrow({ className, onClick }) {
  return (
    <div
      className={`${className} absolute top-0 right-10 z-10`}
      onClick={onClick}
    >
      <FaChevronCircleRight className="text-4xl text-black drop-shadow-lg hover:text-gray-300 transition" />
    </div>
  );
}

function SamplePrevArrow({ className, onClick }) {
  return (
    <div className={`${className} left-5 z-10`} onClick={onClick}>
      <FaChevronCircleLeft className="text-3xl text-black drop-shadow-lg hover:text-gray-300 transition" />
    </div>
  );
}

// Desestructuramos los primeros 2 slides y el resto
const [firstSlide, secondSlide, ...restSlides] = slides;

const Carousel = () => {
  const settings = {
    dots: true,
    fade: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "100px",
          padding: "40px",
          position: "absolute",
          bottom: "-40px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  // Aquí puedes decidir usar solo los primeros dos o todos juntos
  const slidesToShow = [firstSlide, secondSlide, ...restSlides];

  return (
    <div className="w-full my-6 slider-container">
      <Slider {...settings}>
        {slidesToShow.map(
          (
            {
              title,
              subtitle,
              bgClass,
              btnColor,
              btnBg,
              btnHover,
              btnText,
              src,
            },
            i
          ) => (
            <div key={i}>
              <div className="lg:h-[600px] h-[350px] w-full bg-cover bg-center flex flex-col items-center justify-center">
                {/* <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg">
                  {title}
                </h1>
                <p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-xl mb-8 drop-shadow-md">
                  {subtitle}
                </p>
                <button
                  className={`${btnBg} ${btnColor} font-semibold py-3 px-8 rounded-md ${btnHover} transition`}
                >
                  {btnText}
                </button> */}
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default Carousel;

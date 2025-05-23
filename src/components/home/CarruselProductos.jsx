import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css/effect-fade";

import gsap from "gsap";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import productos from "../../data/productos";

const Carousel = () => {
  const slideRefs = useRef([]);

  const handleSlideChange = (swiper) => {
    const currentSlide = slideRefs.current[swiper.activeIndex];
    if (currentSlide) {
      gsap.fromTo(
        currentSlide.querySelectorAll(".animated"),
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  };

  useEffect(() => {
    // Animate first slide on mount
    const firstSlide = slideRefs.current[0];
    if (firstSlide) {
      gsap.fromTo(
        firstSlide.querySelectorAll(".animated"),
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <div className="w-full container mx-auto lg:px-4 p-2 my-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        onSlideChange={handleSlideChange}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {productos.map((producto, i) => (
          <SwiperSlide key={producto.id}>
            <div
              ref={(el) => (slideRefs.current[i] = el)}
              className="lg:px-4 p-2"
            >
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full lg:h-[600px] h-[300px] object-cover rounded-md mb-2"
              />
              {/* <h3 className="text-lg font-semibold">{producto.nombre}</h3>
              <p className="text-blue-600 font-bold">{producto.precio}</p> */}
            </div>
          </SwiperSlide>
        ))}
        <div className="custom-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 p-2 bg-white rounded-full shadow cursor-pointer">
          <FaChevronLeft className="text-blue-600 text-xl" />
        </div>
        <div className="custom-next absolute right-0 top-1/2 z-10 -translate-y-1/2 p-2 bg-white rounded-full shadow cursor-pointer">
          <FaChevronRight className="text-blue-600 text-xl" />
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;

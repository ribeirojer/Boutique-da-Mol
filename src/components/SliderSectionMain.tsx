import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const SliderSectionMain = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      backgroundImage: "/images/slide-01.jpg",
      backgroundImageMobile: "/images/slide-01-mobile.jpg",
      title: "Coleção Feminina 2023",
      subtitle: "5% OFF no Pix",
      buttonLabel: "Ver produtos",
	  color: "#D8DEDE"
    },
    {
      backgroundImage: "/images/slide-02.jpg",
      backgroundImageMobile: "/images/slide-02-mobile.jpg",
      title: "Nova temporada Masculina",
      subtitle: "Jaquetas e casacos",
      buttonLabel: "Ver produtos",
	  color: "#EAE9E5"
    },
    {
      backgroundImage: "/images/slide-03.jpg",
      backgroundImageMobile: "/images/slide-03-mobile.jpg",
      title: "Coleção Masculina 2023",
      subtitle: "Pronta entrega",
      buttonLabel: "Ver produtos",
	  color: "#EAE9E5"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Troque para o intervalo desejado em milissegundos (5 segundos neste exemplo).

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado.
  }, []);

  return (
    <section className="relative h-[90vh] md:h-[70vh] lg:h-[60vh] mx-auto">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`flex justify-center absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            currentSlide === index
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          } ${slide.color === "#EAE9E5" && "bg-[#EAE9E5]"}
		    ${slide.color === "#D8DEDE" && "bg-[#D8DEDE]"}
		  `}
        >
          <picture>
            <source
              media="(max-width: 600px)"
              srcSet={slide.backgroundImageMobile}
            />
            <img src={slide.backgroundImage} alt="" className="h-full" />
          </picture>
		  <div className="absolute bottom-20 md:bottom-auto md:left-[10vw] md:translate-y-2/3 flex items-center justify-center">
            <div className={`${slide.color === "#EAE9E5" && "text-white md:text-black"} text-center px-4 sm:px-8 md:px-16`}>
              <span className="text-2xl sm:text-3xl md:text-4xl block mb-2">
                {slide.title}
              </span>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-8">
                {slide.subtitle}
              </h2>
              <Link
                href={`${slide.color === "#EAE9E5" ? "/loja?category=m" : "/loja?category=f"}`}
                className={`text-lg sm:text-xl md:text-2xl py-3 px-6 rounded-lg border ${slide.color === "#EAE9E5" ? "border-white md:border-black" : "border-black"} hover:bg-white hover:text-black transition duration-300`}
              >
                {slide.buttonLabel}
              </Link>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2">
        <button
          className="text-white text-2xl sm:text-3xl md:text-4xl focus:outline-none"
          onClick={prevSlide}
        >
          &#8249;
        </button>
      </div>
      <div className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2">
        <button
          className="text-white text-2xl sm:text-3xl md:text-4xl focus:outline-none"
          onClick={nextSlide}
        >
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default SliderSectionMain;

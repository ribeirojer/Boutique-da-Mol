import React, { useState, useEffect } from "react";
import Image from "next/image";

const SliderSectionMain = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      backgroundImage: '/images/slide-01.jpg',
      title: "Coleção Feminina 2023",
      subtitle: "NOVA TEMPORADA",
      buttonLabel: "Ver produtos",
    },
    {
      backgroundImage: '/images/slide-02.jpg',
      title: "Nova temporada Masculina",
      subtitle: "Jaquetas e casacos",
      buttonLabel: "Ver produtos",
    },
    {
      backgroundImage: '/images/slide-03.jpg',
      title: "Coleção Masculina 2023",
      subtitle: "Pronta entrega",
      buttonLabel: "Ver produtos",
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
    <section className="relative h-[40vh] md:h-[70vh] lg:h-[100vh] mx-auto overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.backgroundImage}
            alt=""
            height={900}
            width={900}
            className="w-full"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center px-4 sm:px-8 md:px-16">
              <span className="text-2xl sm:text-3xl md:text-4xl block">{slide.title}</span>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">{slide.subtitle}</h2>
              <Link
                href="/loja"
                className="btn-primary text-2xl sm:text-3xl md:text-4xl py-2 px-6 rounded-full hover:bg-white hover:text-black transition duration-300"
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

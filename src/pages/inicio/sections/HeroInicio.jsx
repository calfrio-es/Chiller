import React, { useState, useEffect } from 'react';

const HeroInicio = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array de imágenes de fondo
  const backgroundImages = [
    '/src/assets/img/layout/hero1.png',
    '/src/assets/img/layout/hero2.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Imágenes de fondo */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-5 relative">
          {/* Decoración de fondo para el texto */}
          <div className="absolute inset-0 bg-[#2b9b8d] opacity-40 transform -skew-x-12 -m-8"></div>
          <div className="relative z-10">
            <p className="text-xl md:text-2xl font-light mb-4 drop-shadow-md">
              Chiller Colombia
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 drop-shadow-lg">
              Reparación, Venta y Servicio Técnico Integral
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroInicio;

import React from 'react';
import { Link } from 'react-router-dom';
import miniSplitImg from '../../assets/img/layout/minisplit.jpg';

const MiniSplit = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <section className="relative h-96 w-full overflow-hidden flex items-center justify-center pt-18">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img 
            src={miniSplitImg} 
            alt="Aire acondicionado Mini Split" 
            className="w-full h-full object-cover"
          />
          {/* Overlay oscuro para mejorar legibilidad del texto */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Texto centrado */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
            MINI SPLIT
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-6 drop-shadow-md">
            Venta, Reparación y Mantenimiento de Aires Acondicionados
          </p>
          
          {/* Botón de contacto */}
          <div className="flex justify-center mt-8">
            <button 
              className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-700 text-gray-700 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg"
              onClick={() => {
                const phoneNumber = '+573167137081';
                const message = 'Hola, me gustaría obtener información sobre servicios de aires acondicionados Mini Split.';
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              <span className="mr-3">Contactar Ahora</span>
              <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <svg className="w-3 h-3 text-white transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto relative">
          
                     {/* Icono de aire acondicionado grande - inferior izquierdo */}
           <div className="absolute bottom-0 left-0 w-32 h-32 transform -rotate-12 z-20">
             <svg className="w-full h-full text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
             </svg>
           </div>

           {/* Icono de aire acondicionado pequeño - superior derecho */}
           <div className="absolute top-0 right-0 w-16 h-16 transform rotate-12 z-20">
             <svg className="w-full h-full text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
             </svg>
           </div>

          {/* Contenido principal */}
          <div className="relative z-10">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
                Aires Acondicionados Mini Split
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Una posible falla que puede presentar su MiniSplit es que el compresor no arranque y el aire no funcione. Le sugerimos llamar a nuestro Servicio Técnico y nuestros profesionales especialistas en aires acondicionados verificarán, entre otras cosas y mediante la revisión adecuada, si el circuito no se encuentre interrumpido, si el sistema tiene presión de refrigerante o si el compresor tiene los bornes en buen estado, para proceder a la reparación adecuada.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro equipo de técnicos especializados cuenta con la experiencia y herramientas necesarias para diagnosticar y resolver cualquier problema que pueda presentar su sistema de aire acondicionado Mini Split, garantizando un servicio rápido y eficiente.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Ofrecemos servicios completos de instalación, mantenimiento preventivo, reparación y asesoría técnica para mantener su sistema funcionando de manera óptima durante todo el año.
              </p>
            </div>
          </div>

                     {/* Iconos adicionales flotantes */}
           <div className="absolute top-1/4 left-1/4 w-8 h-8 animate-pulse z-20">
             <svg className="w-full h-full text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
             </svg>
           </div>

           <div className="absolute bottom-1/3 right-1/4 w-6 h-6 animate-pulse z-20" style={{ animationDelay: '1s' }}>
             <svg className="w-full h-full text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
             </svg>
           </div>

           <div className="absolute top-1/2 left-1/3 w-4 h-4 animate-pulse z-20" style={{ animationDelay: '2s' }}>
             <svg className="w-full h-full text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
             </svg>
           </div>
        </div>
      </div>

      {/* Otros Servicios */}
      <section className="py-12 bg-gray-50 relative">
        <div className="container mx-auto px-4 max-w-6xl">
                     {/* Header Section */}
           <div className="text-center mb-12">
             <div className="flex items-center justify-center mb-3">
               <div className="flex items-center text-gray-500 text-sm">
                 <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                 </svg>
                 Otros Sistemas de Aire Acondicionado
               </div>
             </div>
             
             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
               Multi Split, Piso Techo y Diseño Especializado
             </h2>
             
             <p className="text-gray-500 text-base max-w-3xl mx-auto">
               Además de Mini Split, ofrecemos soluciones completas para diferentes necesidades de climatización, incluyendo sistemas Multi Split, equipos Piso Techo y servicios de diseño y cálculo especializado.
             </p>
           </div>

           {/* Main Content - Services Column */}
           <div className="space-y-6 max-w-6xl mx-auto">
                                       <Link to="/multi-split" className="block">
              <div className="bg-blue-50 text-gray-800 p-6 rounded-lg hover:bg-blue-100 transition-colors duration-300 cursor-pointer">
                <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                  <div className="text-4xl font-light leading-none text-gray-800">
                    01
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 flex-1">
                    <h3 className="text-2xl font-bold text-gray-800">
                      Multi Split
                    </h3>
                    <p className="text-sm lg:flex-1 text-gray-700">
                      Sistemas Multi Split para climatizar múltiples espacios con una sola unidad exterior. Ideal para oficinas, comercios y viviendas que requieren control independiente de temperatura en diferentes áreas.
                    </p>
                  </div>
                  <svg className="w-8 h-8 text-gray-800 flex-shrink-0 self-center lg:self-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
             
                         <Link to="/piso-techo" className="block">
              <div className="p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-300 cursor-pointer">
                <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                  <div className="text-4xl font-light leading-none text-gray-300">
                    02
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 flex-1">
                    <h3 className="text-2xl font-bold text-gray-800">
                      Split Piso Techo
                    </h3>
                    <p className="text-sm lg:flex-1 text-gray-500">
                      Equipos Split Piso Techo perfectos para espacios comerciales e industriales. Instalación versátil en piso o techo, alta capacidad de refrigeración y distribución uniforme del aire para grandes superficies.
                    </p>
                  </div>
                  <svg className="w-8 h-8 text-black flex-shrink-0 self-center lg:self-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>

                         <Link to="/diseno-calculo" className="block">
              <div className="p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-300 cursor-pointer">
                <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                  <div className="text-4xl font-light leading-none text-gray-300">
                    03
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 flex-1">
                    <h3 className="text-2xl font-bold text-gray-800">
                      Diseño y Cálculo
                    </h3>
                    <p className="text-sm lg:flex-1 text-gray-500">
                      Servicios especializados de diseño y cálculo de sistemas de aire acondicionado. Análisis térmico, selección de equipos optimizada, cálculo de cargas térmicas y diseño de ductos para máxima eficiencia energética.
                    </p>
                  </div>
                  <svg className="w-8 h-8 text-black flex-shrink-0 self-center lg:self-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default MiniSplit;

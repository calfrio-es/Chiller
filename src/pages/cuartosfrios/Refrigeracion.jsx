import React from 'react';
import heroRefrigeracionImg from '../../assets/img/layout/heroconservacion.jpg';
import copoNieveImg from '../../assets/img/layout/copodenieve.png';

const Refrigeracion = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <section className="relative h-96 w-full overflow-hidden flex items-center justify-center pt-18">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img 
            src={heroRefrigeracionImg} 
            alt="Cuarto de refrigeración industrial" 
            className="w-full h-full object-cover"
          />
          {/* Overlay oscuro para mejorar legibilidad del texto */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Texto centrado */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
            REFRIGERACIÓN
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-6 drop-shadow-md">
            Venta, Reparación y Mantenimiento de Equipos de Refrigeración Industrial
          </p>
          
          {/* Botón de contacto */}
          <div className="flex justify-center mt-8">
            <button 
              className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-700 text-gray-700 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg"
              onClick={() => {
                const phoneNumber = '+573167137081';
                const message = 'Hola, me gustaría obtener información sobre servicios de refrigeración industrial.';
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
          
          {/* Copo de nieve grande - inferior izquierdo */}
          <div className="absolute bottom-0 left-0 w-32 h-32 transform -rotate-12 z-20">
            <img 
              src={copoNieveImg} 
              alt="Copo de nieve" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Copo de nieve pequeño - superior derecho */}
          <div className="absolute top-0 right-0 w-16 h-16 transform rotate-12 z-20">
            <img 
              src={copoNieveImg} 
              alt="Copo de nieve" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Contenido principal */}
          <div className="relative z-10">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
                Mantenimiento De Refrigeración
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                El sistema de Refrigeración está compuesto por un compresor, un condensador, un evaporador, un filtro decantador, una válvula de expansión y un presostato, diseñado para mantener temperaturas controladas sin llegar a la congelación.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Un Cuarto de refrigeración es un espacio especializado para el almacenamiento de productos frescos, alimentos perecederos y mercancías que requieren temperaturas controladas entre 0°C y 8°C, siendo el acondicionamiento y el mantenimiento de estos cuartos uno de los aspectos más importantes para nuestra empresa.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Es por eso que ofrecemos a nuestros clientes no solo la instalación adecuada sino el mejor servicio de mantenimiento o reparación para mantener o restablecer la operatividad efectiva de su espacio de refrigeración.
              </p>
            </div>
          </div>

          {/* Copos de nieve adicionales flotantes */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 animate-pulse z-20">
            <img 
              src={copoNieveImg} 
              alt="Copo de nieve" 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="absolute bottom-1/3 right-1/4 w-6 h-6 animate-pulse z-20" style={{ animationDelay: '1s' }}>
            <img 
              src={copoNieveImg} 
              alt="Copo de nieve" 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="absolute top-1/2 left-1/3 w-4 h-4 animate-pulse z-20" style={{ animationDelay: '2s' }}>
            <img 
              src={copoNieveImg} 
              alt="Copo de nieve" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Cards de información */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-2">
          <div className="w-full">
                         <div className="grid md:grid-cols-2 gap-4 relative">
               
               {/* Copo de nieve en medio */}
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 z-30">
                 <img 
                   src={copoNieveImg} 
                   alt="Copo de nieve" 
                   className="w-full h-full object-contain"
                 />
               </div>
               
               {/* Card de Diseño */}
               <div className="bg-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Diseño de Cuartos Fríos</h3>
                </div>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Diseñamos cuartos de refrigeración personalizados según sus necesidades específicas, considerando:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Capacidad de almacenamiento requerida</li>
                    <li>Temperatura de operación (0°C a 8°C)</li>
                    <li>Eficiencia energética</li>
                    <li>Materiales de construcción</li>
                    <li>Sistemas de control y monitoreo</li>
                  </ul>
                  <p className="text-sm">
                    Nuestro equipo de ingenieros especializados garantiza un diseño óptimo que maximice la eficiencia y durabilidad para productos frescos.
                  </p>
                </div>
              </div>

              {/* Card de Conservación */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Refrigeración Industrial</h3>
                </div>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Especialistas en sistemas de refrigeración que mantienen la calidad y frescura de sus productos:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Control preciso de temperatura</li>
                    <li>Humedad relativa optimizada</li>
                    <li>Circulación de aire uniforme</li>
                    <li>Sistemas de respaldo</li>
                    <li>Monitoreo 24/7</li>
                  </ul>
                  <p className="text-sm">
                    Garantizamos la preservación óptima de alimentos frescos, productos perecederos y mercancías sensibles a la temperatura.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refrigeracion;

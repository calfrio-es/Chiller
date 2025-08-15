import React from 'react';
import chillerPersonalizadoImg from '../../../assets/img/layout/ChillerPersonalizado.jpeg';

const ChillerPersonalizado = () => {
  const personalizacionOptions = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4 2V5c0-.55.45-1 1-1s1 .45 1 1v10h-2z"/>
        </svg>
      ),
      title: "Temperatura de entrada y de salida",
      description: "Define el rango térmico ideal para tu proceso industrial",
      detail: "Configura la temperatura de entrada (agua/aire) y la temperatura de salida requerida."
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Litros por minuto",
      description: "Selecciona el caudal necesario (L/min) para tu operación",
      detail: "Calculamos la bomba adecuada para evitar sobrecostos energéticos."
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
        </svg>
      ),
      title: "¡Danos detalles clave!",
      description: "",
      detail: "Ejemplo: Chiller para enfriamiento de máquinas de inyección plástica en Bogotá, 20 TR, con agua glicolada al 30%."
    }
  ];

  return (
    <section className="py-12 bg-white relative">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Top Row - Title and Description */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Title and Badge */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center mb-3">
                             <div className="flex items-center text-sm" style={{ color: '#2b9b8d' }}>
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Personalización
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ahora puede personalizar su chiller aquí
            </h2>
            
            <div className="text-gray-800 font-semibold">¡Diseñamos el chiller ideal para tus necesidades!</div>
          </div>

          {/* Right Column - Description */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-500 text-base mb-6">
              Personaliza capacidad, eficiencia energética, marca y más en nuestro cotizador online.
            </p>
          </div>
        </div>

        {/* Bottom Row - Image and Services */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column - Image with Overlay */}
          <div className="relative">
            <div className="relative h-full">
              <img 
                src={chillerPersonalizadoImg} 
                alt="Personalización de Chiller Colombia"
                className="w-full h-[200px] lg:h-full object-cover rounded-lg"
              />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-2 left-2 lg:bottom-4 lg:left-4 bg-white rounded-lg p-2 lg:p-4 shadow-lg max-w-[200px] lg:max-w-xs">
                <div className="flex items-center mb-1 lg:mb-2">
                                     <div className="w-4 h-4 lg:w-6 lg:h-6 rounded-full flex items-center justify-center mr-1 lg:mr-2" style={{ backgroundColor: '#2b9b8d' }}>
                    <svg className="w-2 h-2 lg:w-3 lg:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg lg:text-2xl font-bold text-gray-800">100%</span>
                </div>
                <h3 className="text-gray-800 font-semibold mb-1 text-xs lg:text-sm">Personalizado</h3>
                <p className="text-[10px] lg:text-xs text-gray-600">Chiller a tu medida.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Personalización Options List */}
          <div className="space-y-4">
            {personalizacionOptions.map((option, index) => (
              <div key={option.id} className={`pb-4 ${index !== personalizacionOptions.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0" style={{ color: '#2b9b8d' }}>
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {option.title}
                    </h3>
                    <p className="text-gray-500 mb-2 text-sm">
                      {option.description}
                    </p>
                    <p className="text-gray-600 mb-2 text-xs italic">
                      {option.detail}
                    </p>
                                         <div className="flex items-center text-gray-800 transition-colors duration-300 cursor-pointer hover:text-[#2b9b8d]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChillerPersonalizado;

import React from 'react';
import disenoChillerImg from '../../assets/img/layout/reparacion-chiller.jpg';

const DisenoChiller = () => {
  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Sección principal */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {/* Título y descripción principal */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Diseño de Cuartos
              <span className="block" style={{ color: '#2b9b8d' }}>Fríos</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Nuestro departamento de ingeniería y diseño trabaja sobre planos básicos suministrados 
              por nuestros clientes, desarrollando el diseño apropiado para cubrir su requerimiento. 
              Consideramos equipos de calidad, ubicación segura y eficiencia energética.
            </p>
          </div>

          {/* Botón de contacto */}
          <div className="flex justify-center mb-16">
            <button 
              className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg cursor-pointer"
              style={{ borderColor: '#2b9b8d', color: '#2b9b8d' }}
              onClick={() => {
                const phoneNumber = '+573167137081';
                const message = 'Hola, me gustaría obtener información sobre su servicio de diseño de cuartos fríos.';
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Solicitar Diseño
            </button>
          </div>

          {/* Sección con imagen de lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Imagen */}
            <div className="order-2 lg:order-1">
              <img 
                src={disenoChillerImg} 
                alt="Diseño de Cuartos Fríos Colombia" 
                className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Contenido */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Diseño de Cuartos Fríos Colombia
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestro departamento de ingeniería y diseño trabaja sobre planos básicos suministrados 
                por nuestros clientes, desarrollando el diseño apropiado para cubrir su requerimiento 
                específico de refrigeración industrial.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-cyan-600 mr-3 mt-1">•</span>
                  <span className="text-gray-600">Elegir los mejores equipos, de calidad y a bajos costos.</span>
                </div>
                <div className="flex items-start">
                  <span className="text-cyan-600 mr-3 mt-1">•</span>
                  <span className="text-gray-600">Elegir la mejor ubicación de acceso para el personal, que sea totalmente segura.</span>
                </div>
                <div className="flex items-start">
                  <span className="text-cyan-600 mr-3 mt-1">•</span>
                  <span className="text-gray-600">Elegir la eficiencia energética más conveniente que se debe utilizar.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Información detallada abajo de la imagen */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
              Nuestros Servicios de Diseño
            </h3>
            
            {/* Lista de servicios */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Análisis de Requerimientos</h4>
                <p className="text-gray-600">Evaluación completa de las necesidades específicas de refrigeración del cliente.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Diseño de Equipos</h4>
                <p className="text-gray-600">Selección de los mejores equipos de calidad con costos optimizados.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Planificación de Espacios</h4>
                <p className="text-gray-600">Diseño de la ubicación óptima considerando seguridad y accesibilidad.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Eficiencia Energética</h4>
                <p className="text-gray-600">Optimización del consumo energético para reducir costos operativos.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Documentación Técnica</h4>
                <p className="text-gray-600">Planos detallados y especificaciones técnicas completas del proyecto.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Asesoría Especializada</h4>
                <p className="text-gray-600">Consultoría experta durante todo el proceso de diseño e implementación.</p>
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const phoneNumber = '+573167137081';
                  const message = 'Hola, me gustaría obtener más información sobre su servicio de diseño de cuartos fríos.';
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="px-8 py-4 text-white font-semibold rounded-lg transition-colors duration-300 cursor-pointer"
                style={{ backgroundColor: '#2b9b8d' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#248a7d'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#2b9b8d'}
              >
                Solicitar Diseño
              </button>
              
              <button
                onClick={() => {
                  const phoneNumber = '+573167137081';
                  const message = 'Hola, me gustaría agendar una visita técnica para diseño de cuartos fríos.';
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="px-8 py-4 bg-white border-2 font-semibold rounded-lg transition-colors duration-300 cursor-pointer"
                style={{ borderColor: '#2b9b8d', color: '#2b9b8d' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f9f8'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
              >
                Agendar Visita
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisenoChiller;

import React from 'react';
import chillerImg from '../../assets/img/layout/chiller100toneladas.png';

const AlquilerChiller = () => {
  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Sección principal */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {/* Título y descripción principal */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Alquiler de
              <span className="block" style={{ color: '#2b9b8d' }}>Chillers</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Nuestro Servicio de alquiler de chillers industriales está diseñado para 
              proporcionar soluciones temporales de refrigeración. Contamos con 
              equipos de alta calidad y diferentes capacidades para satisfacer sus necesidades.
            </p>
          </div>

          {/* Botón de contacto */}
          <div className="flex justify-center mb-16">
            <button 
              className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg cursor-pointer"
              style={{ borderColor: '#2b9b8d', color: '#2b9b8d' }}
              onClick={() => {
                const phoneNumber = '+573167137081';
                const message = 'Hola, me gustaría obtener información sobre su servicio de alquiler de chillers.';
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Solicitar Alquiler de Chiller
            </button>
          </div>

          {/* Sección con imagen de lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Imagen */}
            <div className="order-2 lg:order-1">
              <img 
                src={chillerImg} 
                alt="Alquiler de Chillers Industriales" 
                className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Contenido */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Alquiler de Chillers Industriales
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Cada proyecto tiene necesidades únicas de refrigeración. Nuestro servicio de alquiler 
                especializado proporciona soluciones flexibles para satisfacer sus requerimientos 
                temporales de climatización industrial.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestros equipos están completamente mantenidos y listos para funcionar, 
                proporcionando refrigeración confiable para sus operaciones temporales o de emergencia.
              </p>
            </div>
          </div>

          {/* Información detallada abajo de la imagen */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
              Nuestros Servicios de Alquiler de Chillers
            </h3>
            
            {/* Lista de servicios */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Alquiler a Corto Plazo</h4>
                <p className="text-gray-600">Soluciones temporales para proyectos específicos o mantenimientos programados.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Alquiler a Largo Plazo</h4>
                <p className="text-gray-600">Contratos extendidos para operaciones continuas con opciones de compra.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Instalación y Puesta en Marcha</h4>
                <p className="text-gray-600">Instalación profesional y configuración inicial incluida en el alquiler.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Mantenimiento Incluido</h4>
                <p className="text-gray-600">Servicio de mantenimiento preventivo y correctivo durante el período de alquiler.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Asesoría Técnica Especializada</h4>
                <p className="text-gray-600">Consultoría experta para la selección del equipo más adecuado para sus necesidades.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Servicio de Emergencia</h4>
                <p className="text-gray-600">Disponibilidad inmediata para situaciones críticas y fallas inesperadas.</p>
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const phoneNumber = '+573167137081';
                  const message = 'Hola, me gustaría obtener más información sobre su servicio de alquiler de chillers.';
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="px-8 py-4 text-white font-semibold rounded-lg transition-colors duration-300 cursor-pointer"
                style={{ backgroundColor: '#2b9b8d' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#248a7d'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#2b9b8d'}
              >
                Solicitar Alquiler
              </button>
              
              <button
                onClick={() => {
                  const phoneNumber = '+573167137081';
                  const message = 'Hola, me gustaría cotizar un alquiler de chiller para mi proyecto.';
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="px-8 py-4 bg-white border-2 font-semibold rounded-lg transition-colors duration-300 cursor-pointer"
                style={{ borderColor: '#2b9b8d', color: '#2b9b8d' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f9f8'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
              >
                Solicitar Cotización
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlquilerChiller;

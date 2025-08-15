import React from 'react';
import reparacionChillerImg from '../../assets/img/layout/reparacion-chiller.jpg';

const ReparacionNeverasWhirlpoolBarranquilla = () => {
  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Sección principal */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {/* Título y descripción principal */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Reparación Neveras Whirlpool
              <span className="block" style={{ color: '#2b9b8d' }}>Barranquilla</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Si su nevera Whirlpool está presentando alguna falla o su capacidad de refrigeración ha disminuido, 
              le sugerimos comunicarse con nuestro servicio técnico. Contamos con un equipo de profesionales 
              que está en la capacidad de realizar la reparación que requiera su nevera Whirlpool en Barranquilla.
            </p>
          </div>

          {/* Botón de contacto */}
          <div className="flex justify-center mb-16">
            <button 
              className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg cursor-pointer"
              style={{ borderColor: '#2b9b8d', color: '#2b9b8d' }}
              onClick={() => {
                const phoneNumber = '+573167137081';
                const message = 'Hola, me gustaría obtener información sobre su servicio de reparación de neveras Whirlpool en Barranquilla.';
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Solicitar Reparación
            </button>
          </div>

          {/* Sección con imagen de lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Imagen */}
            <div className="order-2 lg:order-1">
              <img 
                src={reparacionChillerImg} 
                alt="Reparación Neveras Whirlpool Barranquilla" 
                className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Contenido */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Reparación Neveras Whirlpool Barranquilla
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestro servicio de reparación especializado está diseñado para recuperar la operatividad 
                perdida de su nevera Whirlpool. Cada nevera tiene necesidades únicas y nuestros técnicos 
                están preparados para diagnosticar y resolver cualquier problema en Barranquilla.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Utilizamos técnicas probadas y repuestos originales Whirlpool para garantizar que su nevera 
                recupere su capacidad de refrigeración óptima y funcione de manera eficiente.
              </p>
            </div>
          </div>

          {/* Información detallada abajo de la imagen */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
              Nuestros Servicios de Reparación de Neveras Whirlpool en Barranquilla
            </h3>
            
            {/* Lista de servicios */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Diagnóstico Preciso</h4>
                <p className="text-gray-600">Identificación exacta de fallas y problemas en el sistema de refrigeración de neveras Whirlpool.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Reparación de Componentes</h4>
                <p className="text-gray-600">Reparación y reemplazo de partes dañadas con repuestos originales Whirlpool.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Recuperación de Capacidad</h4>
                <p className="text-gray-600">Restauración de la capacidad de refrigeración óptima de su nevera Whirlpool.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Mantenimiento Correctivo</h4>
                <p className="text-gray-600">Corrección de problemas específicos identificados en el diagnóstico de neveras.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Optimización Post-Reparación</h4>
                <p className="text-gray-600">Ajustes y calibración para garantizar el rendimiento óptimo de su nevera Whirlpool.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Servicio de Emergencia</h4>
                <p className="text-gray-600">Atención rápida para reparaciones urgentes y críticas en Barranquilla.</p>
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const phoneNumber = '+573167137081';
                  const message = 'Hola, me gustaría obtener más información sobre su servicio de reparación de neveras Whirlpool en Barranquilla.';
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="px-8 py-4 text-white font-semibold rounded-lg transition-colors duration-300 cursor-pointer"
                style={{ backgroundColor: '#2b9b8d' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#248a7d'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#2b9b8d'}
              >
                Solicitar Reparación
              </button>
              
              <button
                onClick={() => {
                  const phoneNumber = '+573167137081';
                  const message = 'Hola, me gustaría agendar una visita técnica para reparación de mi nevera Whirlpool en Barranquilla.';
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

export default ReparacionNeverasWhirlpoolBarranquilla;

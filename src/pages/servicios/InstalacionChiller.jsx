import React from 'react';
import instalacionChillerImg from '../../assets/img/layout/instalacion-chiller.jpg';

const InstalacionChiller = () => {
  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Sección principal */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {/* Título y descripción principal */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Instalación
              <span className="block" style={{ color: '#2b9b8d' }}>Chiller</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Es importante hacer de conocimiento de nuestros clientes que el correcto desempeño de su 
              sistema de enfriamiento va a depender de la correcta ubicación, la posición y las dimensiones 
              del equipo. Nuestro técnico especialista verifica que el aire pueda circular libremente.
            </p>
          </div>

          {/* Botón de contacto */}
          <div className="flex justify-center mb-16">
            <button 
              className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg cursor-pointer"
              style={{ borderColor: '#2b9b8d', color: '#2b9b8d' }}
              onClick={() => {
                const phoneNumber = '+573167137081';
                const message = 'Hola, me gustaría obtener información sobre su servicio de instalación de chillers.';
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Solicitar Instalación
            </button>
          </div>

          {/* Sección con imagen de lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Imagen */}
            <div className="order-2 lg:order-1">
              <img 
                src={instalacionChillerImg} 
                alt="Instalación Chiller Colombia" 
                className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Contenido */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Instalación Chiller Colombia
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestro servicio de instalación especializado garantiza que su sistema de enfriamiento 
                funcione de manera óptima desde el primer día. La correcta ubicación, posición y 
                dimensiones del equipo son fundamentales para su rendimiento.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestro técnico especialista realiza una revisión previa y diagnóstico completo para 
                verificar que el espacio de colocación permita la circulación y descarga libre del aire, 
                sin obstrucciones en la entrada y salida.
              </p>
            </div>
          </div>

          {/* Información detallada abajo de la imagen */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
              Nuestros Servicios de Instalación
            </h3>
            
            {/* Lista de servicios */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Evaluación del Espacio</h4>
                <p className="text-gray-600">Análisis completo del área de instalación para optimizar la ubicación del equipo.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Instalación Profesional</h4>
                <p className="text-gray-600">Montaje y conexión del chiller siguiendo las especificaciones técnicas del fabricante.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Verificación de Circulación</h4>
                <p className="text-gray-600">Asegurar que el aire pueda circular y descargarse libremente sin obstrucciones.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Puesta en Marcha</h4>
                <p className="text-gray-600">Configuración inicial y pruebas de funcionamiento para garantizar el rendimiento óptimo.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Capacitación del Cliente</h4>
                <p className="text-gray-600">Instrucciones sobre el uso y mantenimiento básico del sistema instalado.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Servicio Post-Instalación</h4>
                <p className="text-gray-600">Seguimiento y soporte técnico después de la instalación para resolver dudas.</p>
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const phoneNumber = '+573167137081';
                  const message = 'Hola, me gustaría obtener más información sobre su servicio de instalación de chillers.';
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="px-8 py-4 text-white font-semibold rounded-lg transition-colors duration-300 cursor-pointer"
                style={{ backgroundColor: '#2b9b8d' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#248a7d'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#2b9b8d'}
              >
                Solicitar Instalación
              </button>
              
              <button
                onClick={() => {
                  const phoneNumber = '+573167137081';
                  const message = 'Hola, me gustaría agendar una visita técnica para instalación de mi chiller.';
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

export default InstalacionChiller;

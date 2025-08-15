import React from 'react';
import neverasImg from '../../assets/img/layout/neveras.jpg';

const Neveras = () => {
  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Sección principal */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {/* Título y descripción principal */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Neveras
              <span className="block" style={{ color: '#2b9b8d' }}>Compra, Mantenimiento y Reparación</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Las neveras son uno de los electrodomésticos más esenciales en cualquier hogar, comercio o empresa. 
              No solo conservan los alimentos frescos, sino que también son clave para mantener la cadena de frío 
              en negocios del sector alimentario, farmacéutico y hospitalario.
            </p>
          </div>

          {/* Botón de contacto */}
          <div className="flex justify-center mb-16">
            <button 
              className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg cursor-pointer"
              style={{ borderColor: '#2b9b8d', color: '#2b9b8d' }}
              onClick={() => {
                const phoneNumber = '+573167137081';
                const message = 'Hola, me gustaría obtener información sobre servicios de neveras (compra, reparación o mantenimiento).';
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Solicitar Servicio de Neveras
            </button>
          </div>

          {/* Sección con imagen de lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Imagen */}
            <div className="order-2 lg:order-1">
              <img 
                src={neverasImg} 
                alt="Técnico especializado en neveras" 
                className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Contenido */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Servicio Técnico Especializado
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                En nuestra empresa, nos especializamos en la venta, reparación y mantenimiento de neveras en Colombia. 
                Ofrecemos atención técnica calificada para todas las marcas y modelos, asegurando eficiencia, 
                durabilidad y rendimiento óptimo en cada servicio.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Contamos con técnicos con experiencia en todas las marcas, cobertura nacional y atención rápida 
                para garantizar el mejor servicio para tu nevera.
              </p>
            </div>
          </div>

          {/* Información detallada abajo de la imagen */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
              Nuestros Servicios de Neveras
            </h3>
            
            {/* Lista de servicios */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Venta de Neveras</h4>
                <p className="text-gray-600">Amplio inventario de neveras nuevas y usadas de marcas reconocidas: Samsung, LG, Whirlpool, Mabe, Haceb, Challenger y más.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Reparación Especializada</h4>
                <p className="text-gray-600">Diagnóstico completo, solución rápida y garantía en cada reparación con repuestos originales.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Mantenimiento Preventivo</h4>
                <p className="text-gray-600">Limpieza del sistema de condensación, verificación de fugas, revisión del termostato y compresor.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Servicio a Domicilio</h4>
                <p className="text-gray-600">Cobertura en Bogotá, Medellín, Cali, Barranquilla, Bucaramanga y otras ciudades del país.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Neveras Industriales</h4>
                <p className="text-gray-600">Servicio especializado para restaurantes, supermercados, panaderías, hoteles y clínicas.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Asesoría Personalizada</h4>
                <p className="text-gray-600">Te ayudamos a elegir la mejor opción según tus necesidades, espacio y presupuesto.</p>
              </div>
            </div>

            {/* Sección de tipos de neveras */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Tipos de Neveras que Trabajamos:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Neveras Convencionales</h5>
                  <p className="text-gray-600 text-sm">Las más comunes para el hogar. Generalmente de una sola puerta o dos puertas con congelador superior. Fáciles de usar y con bajo consumo energético.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Neveras No Frost</h5>
                  <p className="text-gray-600 text-sm">Evitan la formación de escarcha, ofreciendo mayor comodidad. Ideales para quienes buscan tecnología moderna y facilidad de limpieza.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Neveras Tipo Dispensador</h5>
                  <p className="text-gray-600 text-sm">Con dispensador de agua o hielo incorporado, perfectas para quienes buscan funcionalidad y comodidad en el día a día.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Neveras Industriales</h5>
                  <p className="text-gray-600 text-sm">Diseñadas para negocios y grandes volúmenes de almacenamiento. Utilizadas en restaurantes, supermercados, panaderías, hoteles y clínicas.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Neveras para Laboratorio</h5>
                  <p className="text-gray-600 text-sm">Con control preciso de temperatura, usadas en clínicas, hospitales y laboratorios donde se requiere una conservación exacta y constante.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Servicio Técnico Especializado</h5>
                  <p className="text-gray-600 text-sm">Técnicos capacitados para resolver cualquier tipo de avería con repuestos originales y compatibles.</p>
                </div>
              </div>
            </div>

            {/* Sección de mantenimiento */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Mantenimiento Preventivo Incluye:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Limpieza y revisión del sistema de condensación
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Verificación de fugas de gas refrigerante
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Revisión y ajuste del termostato
                  </li>
                </ul>
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Limpieza del sistema de drenaje
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Revisión eléctrica y del compresor
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Cambio de piezas desgastadas
                  </li>
                </ul>
              </div>
            </div>

            {/* Sección de consejos */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Consejos para Alargar la Vida Útil de tu Nevera:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    No sobrecargar el equipo para permitir circulación del aire
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Evita abrir la puerta constantemente
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Limpia el interior y exterior con frecuencia
                  </li>
                </ul>
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Revisa el estado de las gomas de la puerta
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Ubica la nevera lejos de fuentes de calor
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Realiza mantenimientos periódicos con profesionales
                  </li>
                </ul>
              </div>
            </div>

            {/* Sección de por qué elegirnos */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">¿Por qué Elegirnos?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Técnicos Experiencia</h5>
                  <p className="text-gray-600 text-sm">Con experiencia en todas las marcas del mercado.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Cobertura Nacional</h5>
                  <p className="text-gray-600 text-sm">Bogotá, Medellín, Cali, Barranquilla, Bucaramanga y más.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Atención Rápida</h5>
                  <p className="text-gray-600 text-sm">Servicio eficaz y respuesta inmediata.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Precios Competitivos</h5>
                  <p className="text-gray-600 text-sm">Precios justos y transparentes.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Repuestos Originales</h5>
                  <p className="text-gray-600 text-sm">Garantía por escrito en cada reparación.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Asesoría Personalizada</h5>
                  <p className="text-gray-600 text-sm">En cada etapa del servicio.</p>
                </div>
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const phoneNumber = '+573167137081';
                  const message = 'Hola, me gustaría obtener más información sobre servicios de neveras.';
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="px-8 py-4 text-white font-semibold rounded-lg transition-colors duration-300 cursor-pointer"
                style={{ backgroundColor: '#2b9b8d' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#248a7d'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#2b9b8d'}
              >
                Solicitar Servicio
              </button>
              
              <button
                onClick={() => {
                  const phoneNumber = '+573167137081';
                  const message = 'Hola, me gustaría agendar una visita técnica para mi nevera.';
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

export default Neveras;

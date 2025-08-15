import React from 'react';
import lavavajillasImg from '../../assets/img/layout/lavavajillas.jpg';

const Lavavajillas = () => {
  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Sección principal */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {/* Título y descripción principal */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Lavavajillas
              <span className="block" style={{ color: '#2b9b8d' }}>Venta, Reparación y Mantenimiento</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              El lavavajillas es un electrodoméstico que ha ganado protagonismo tanto en hogares modernos como en negocios 
              del sector gastronómico en Colombia. Aporta eficiencia, higiene y ahorro de tiempo al proceso de limpieza 
              de utensilios de cocina, lo que lo convierte en una solución práctica y rentable.
            </p>
          </div>

          {/* Botón de contacto */}
          <div className="flex justify-center mb-16">
            <button 
              className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg cursor-pointer"
              style={{ borderColor: '#2b9b8d', color: '#2b9b8d' }}
              onClick={() => {
                const phoneNumber = '+573167137081';
                const message = 'Hola, me gustaría obtener información sobre servicios de lavavajillas (venta, reparación o mantenimiento).';
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Solicitar Servicio de Lavavajillas
            </button>
          </div>

          {/* Sección con imagen de lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Imagen */}
            <div className="order-2 lg:order-1">
              <img 
                src={lavavajillasImg} 
                alt="Técnico especializado en lavavajillas" 
                className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Contenido */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Servicio Técnico Especializado
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                En nuestra empresa, nos especializamos en la venta, instalación, reparación y mantenimiento de lavavajillas 
                domésticos e industriales. Contamos con técnicos certificados, repuestos originales y atención personalizada 
                en toda Colombia.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Ofrecemos servicio integral: diagnóstico, reparación, mantenimiento e instalación con cobertura nacional 
                y precios competitivos sin cobros ocultos.
              </p>
            </div>
          </div>

          {/* Información detallada abajo de la imagen */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
              Nuestros Servicios de Lavavajillas
            </h3>
            
            {/* Lista de servicios */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Venta de Lavavajillas</h4>
                <p className="text-gray-600">Catálogo completo de lavavajillas nuevos y usados de marcas de alta calidad: Bosch, Whirlpool, Samsung, Electrolux, Mabe, Haceb, LG y más.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Reparación Especializada</h4>
                <p className="text-gray-600">Reparamos cualquier modelo de lavavajillas, tanto residenciales como industriales, con repuestos originales y garantía escrita.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Mantenimiento Preventivo</h4>
                <p className="text-gray-600">Limpieza del sistema de filtros, descalcificación, verificación de fugas y revisión del panel de control.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Instalación Profesional</h4>
                <p className="text-gray-600">Instalación segura y correcta de lavavajillas domésticos e industriales con asesoría personalizada.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Servicio a Domicilio</h4>
                <p className="text-gray-600">Atención rápida en Bogotá, Medellín, Cali, Barranquilla y otras ciudades del país con movilización inmediata.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Asesoría Personalizada</h4>
                <p className="text-gray-600">Te ayudamos a elegir el modelo más adecuado según capacidad, consumo, dimensiones y tipo de uso.</p>
              </div>
            </div>

            {/* Sección de tipos de lavavajillas */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Tipos de Lavavajillas que Trabajamos:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Lavavajillas Domésticos</h5>
                  <p className="text-gray-600 text-sm">Diseñados para uso en casas o apartamentos. Vienen en versiones compactas o de tamaño completo. Algunos modelos son empotrables y otros portátiles. Usualmente tienen capacidad para 6 a 14 puestos y múltiples ciclos de lavado.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Lavavajillas Industriales</h5>
                  <p className="text-gray-600 text-sm">Ideales para restaurantes, hoteles, panaderías, cafeterías, clínicas y cocinas institucionales. Ofrecen gran capacidad, velocidad y eficiencia energética. Diseñados para ciclos continuos y alto volumen de trabajo.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Lavavajillas Empotrables</h5>
                  <p className="text-gray-600 text-sm">Se integran en el diseño de la cocina moderna. Aportan elegancia, ahorro de espacio y facilidad de uso. Disponibles en diferentes tamaños y niveles de automatización.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Opciones Reacondicionadas</h5>
                  <p className="text-gray-600 text-sm">Lavavajillas usados en perfecto estado y con garantía, ideales para quienes buscan economía sin sacrificar rendimiento. Cuidadosamente seleccionados y revisados.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Asesoría de Selección</h5>
                  <p className="text-gray-600 text-sm">Te ayudamos a elegir según capacidad (puestos por ciclo), consumo de agua y energía, dimensiones del espacio, tipo de instalación y uso doméstico o comercial.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Servicio Técnico Integral</h5>
                  <p className="text-gray-600 text-sm">Diagnóstico, reparación, mantenimiento e instalación con técnicos certificados y amplia experiencia en todas las marcas del mercado.</p>
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
                    Limpieza del sistema de filtros y brazos rociadores
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Descalcificación del circuito interno
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Verificación de fugas, mangueras y bomba de agua
                  </li>
                </ul>
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Revisión del panel de control y sensores
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Reemplazo de partes desgastadas
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Optimización del rendimiento y eficiencia
                  </li>
                </ul>
              </div>
            </div>

            {/* Sección de fallas comunes */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Fallas que Reparamos:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Fugas de agua
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Fallas en el motor o bomba de desagüe
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Puertas que no cierran correctamente
                  </li>
                </ul>
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Problemas con el sistema de calentamiento
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Error en los ciclos o paneles electrónicos
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Obstrucciones internas o mal drenaje
                  </li>
                </ul>
              </div>
            </div>

            {/* Sección de recomendaciones */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Recomendaciones para Prolongar la Vida Útil:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    No sobrecargues el equipo
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Usa detergentes específicos para lavavajillas
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Limpia regularmente los filtros y brazos aspersores
                  </li>
                </ul>
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Revisa y cambia las mangueras cada cierto tiempo
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Evita introducir residuos sólidos grandes
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Programa mantenimientos preventivos al menos una vez al año
                  </li>
                </ul>
              </div>
            </div>

            {/* Sección de por qué confiar en nosotros */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">¿Por qué Confiar en Nosotros?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Técnicos Certificados</h5>
                  <p className="text-gray-600 text-sm">Con amplia experiencia en todas las marcas del mercado.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Atención Rápida</h5>
                  <p className="text-gray-600 text-sm">Servicio amable y personalizado con movilización inmediata.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Cobertura Nacional</h5>
                  <p className="text-gray-600 text-sm">Atendemos en Bogotá, Medellín, Cali, Barranquilla y más ciudades.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Servicio Integral</h5>
                  <p className="text-gray-600 text-sm">Diagnóstico, reparación, mantenimiento e instalación.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Precios Competitivos</h5>
                  <p className="text-gray-600 text-sm">Sin cobros ocultos y garantía real en todos los servicios.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Asesoría Permanente</h5>
                  <p className="text-gray-600 text-sm">Soporte continuo y soluciones efectivas y duraderas.</p>
                </div>
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const phoneNumber = '+573167137081';
                  const message = 'Hola, me gustaría obtener más información sobre servicios de lavavajillas.';
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
                  const message = 'Hola, me gustaría agendar una visita técnica para mi lavavajillas.';
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

export default Lavavajillas;

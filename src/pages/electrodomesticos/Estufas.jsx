import React from 'react';
import estufasImg from '../../assets/img/layout/estufas.jpg';

const Estufas = () => {
  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Sección principal */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {/* Título y descripción principal */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Estufas
              <span className="block" style={{ color: '#2b9b8d' }}>Venta, Reparación y Mantenimiento</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Las estufas son uno de los electrodomésticos más indispensables en cualquier cocina, ya sea doméstica o comercial. 
              Su buen funcionamiento garantiza la preparación eficiente de alimentos, comodidad y seguridad. En Colombia, 
              donde miles de hogares y negocios dependen de este equipo a diario, contar con una estufa en óptimas condiciones 
              no es un lujo, sino una necesidad.
            </p>
          </div>

          {/* Botón de contacto */}
          <div className="flex justify-center mb-16">
            <button 
              className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg cursor-pointer"
              style={{ borderColor: '#2b9b8d', color: '#2b9b8d' }}
              onClick={() => {
                const phoneNumber = '+573167137081';
                const message = 'Hola, me gustaría obtener información sobre servicios de estufas (venta, reparación o mantenimiento).';
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Solicitar Servicio de Estufas
            </button>
          </div>

          {/* Sección con imagen de lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Imagen */}
            <div className="order-2 lg:order-1">
              <img 
                src={estufasImg} 
                alt="Técnico especializado en estufas" 
                className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Contenido */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Servicio Técnico Especializado
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestra empresa se especializa en la venta, mantenimiento y reparación de estufas a gas, eléctricas, 
                empotrables, industriales y más. Ofrecemos soluciones técnicas a domicilio, productos de alta calidad 
                y un servicio confiable respaldado por años de experiencia en el sector.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Contamos con técnicos certificados, repuestos originales y herramientas especializadas para diagnosticar 
                y resolver cualquier problema con tu estufa, ya sea de hogar o negocio.
              </p>
            </div>
          </div>

          {/* Información detallada abajo de la imagen */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
              Nuestros Servicios de Estufas
            </h3>
            
            {/* Lista de servicios */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Venta de Estufas</h4>
                <p className="text-gray-600">Amplia gama de estufas nuevas y usadas de marcas reconocidas: Haceb, Challenger, Mabe, Whirlpool, Abba, Bosch y más.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Reparación Especializada</h4>
                <p className="text-gray-600">Reparamos estufas a gas y eléctricas con técnicos certificados, repuestos originales y garantía por escrito.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Mantenimiento Preventivo</h4>
                <p className="text-gray-600">Limpieza profunda de quemadores, verificación de fugas, ajuste de perillas y revisión de componentes.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Instalación Profesional</h4>
                <p className="text-gray-600">Instalación segura de estufas empotrables y conexiones de gas con cumplimiento de normas de seguridad.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Servicio a Domicilio</h4>
                <p className="text-gray-600">Atención rápida en Bogotá, Medellín, Cali, Barranquilla, Bucaramanga y otras ciudades del país.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Asesoría Personalizada</h4>
                <p className="text-gray-600">Te ayudamos a elegir la estufa más adecuada según tipo de combustible, espacio y necesidades.</p>
              </div>
            </div>

            {/* Sección de tipos de estufas */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Tipos de Estufas que Trabajamos:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Estufas a Gas</h5>
                  <p className="text-gray-600 text-sm">Las más comunes en hogares colombianos. Funcionan con gas natural o gas propano, y ofrecen un control preciso del calor. Son ideales por su eficiencia y bajo costo operativo.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Estufas Eléctricas</h5>
                  <p className="text-gray-600 text-sm">Funcionan conectadas a la red eléctrica y no requieren instalación de gas. Son muy seguras, fáciles de usar y modernas. Algunas incluyen superficies de vitrocerámica o inducción.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Estufas Empotrables</h5>
                  <p className="text-gray-600 text-sm">Perfectas para cocinas modernas o integradas. Ahorran espacio y ofrecen un diseño elegante. Se instalan directamente en el mesón y pueden ser a gas o eléctricas.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Estufas Industriales</h5>
                  <p className="text-gray-600 text-sm">Diseñadas para restaurantes, panaderías, hoteles y otros negocios del sector gastronómico. Son de alta capacidad, robustas y permiten cocinar a gran escala.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Asesoría de Selección</h5>
                  <p className="text-gray-600 text-sm">Te guiamos para elegir según tipo de combustible, espacio disponible, cantidad de quemadores, estilo de cocina y presupuesto.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Soporte Postventa</h5>
                  <p className="text-gray-600 text-sm">Instalación profesional, repuestos, garantía y soporte continuo para hogares, edificios, restaurantes y más.</p>
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
                    Limpieza profunda de quemadores y válvulas
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Verificación de fugas de gas o conexiones eléctricas
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Ajuste de perillas, encendido y termopar
                  </li>
                </ul>
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Revisión de hornos, parrillas y componentes eléctricos
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Cambio de piezas desgastadas o averiadas
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Optimización del rendimiento y consumo energético
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
                    Encendido defectuoso o lento
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Fugas de gas o conexiones sueltas
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Quemadores obstruidos o que no calientan
                  </li>
                </ul>
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Hornos que no alcanzan la temperatura deseada
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Problemas con la corriente en estufas eléctricas
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Fallas en termopares y válvulas de seguridad
                  </li>
                </ul>
              </div>
            </div>

            {/* Sección de importancia de profesionales */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">¿Por qué es Importante Confiar tu Estufa a Profesionales?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-red-500 mr-2">⚠</span>
                    Riesgo de incendio o explosión
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-red-500 mr-2">⚠</span>
                    Fugas de gas peligrosas
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-red-500 mr-2">⚠</span>
                    Sobrecalentamiento o daño a la instalación
                  </li>
                </ul>
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-red-500 mr-2">⚠</span>
                    Fallas que afectan el rendimiento
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-red-500 mr-2">⚠</span>
                    Mayor consumo de energía
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-red-500 mr-2">⚠</span>
                    Incumplimiento de normas de seguridad
                  </li>
                </ul>
              </div>
            </div>

            {/* Sección de beneficios */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Beneficios de Nuestros Servicios:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Atención Rápida</h5>
                  <p className="text-gray-600 text-sm">Servicio a domicilio con respuesta inmediata.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Técnicos Calificados</h5>
                  <p className="text-gray-600 text-sm">Con experiencia y autorización para intervenir estufas.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Repuestos Originales</h5>
                  <p className="text-gray-600 text-sm">Duraderos y compatibles con todas las marcas.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Precios Competitivos</h5>
                  <p className="text-gray-600 text-sm">Sin costos ocultos y transparencia total.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Garantía Escrita</h5>
                  <p className="text-gray-600 text-sm">En todas las reparaciones y servicios.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Asesoría Integral</h5>
                  <p className="text-gray-600 text-sm">Para hogares, edificios, restaurantes y más.</p>
                </div>
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const phoneNumber = '+573167137081';
                  const message = 'Hola, me gustaría obtener más información sobre servicios de estufas.';
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
                  const message = 'Hola, me gustaría agendar una visita técnica para mi estufa.';
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

export default Estufas;

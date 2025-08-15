import React from 'react';
import lavadorasImg from '../../assets/img/layout/lavadoras.jpg';

const Lavadoras = () => {
  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Sección principal */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {/* Título y descripción principal */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Lavadoras
              <span className="block" style={{ color: '#2b9b8d' }}>Guía Completa para Comprar, Mantener y Reparar</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Las lavadoras son sin duda uno de los electrodomésticos esenciales en cualquier hogar, negocio o lavandería. 
              Facilitan la vida diaria al permitir lavar grandes cantidades de ropa de manera rápida y eficiente, optimizando 
              tiempo y esfuerzo. En Colombia, contar con un equipo confiable y un buen servicio de mantenimiento es fundamental 
              para que tu lavadora funcione siempre de manera óptima.
            </p>
          </div>

          {/* Botón de contacto */}
          <div className="flex justify-center mb-16">
            <button 
              className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg cursor-pointer"
              style={{ borderColor: '#2b9b8d', color: '#2b9b8d' }}
              onClick={() => {
                const phoneNumber = '+573167137081';
                const message = 'Hola, me gustaría obtener información sobre servicios de lavadoras (venta, reparación o mantenimiento).';
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Solicitar Servicio de Lavadoras
            </button>
          </div>

          {/* Sección con imagen de lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Imagen */}
            <div className="order-2 lg:order-1">
              <img 
                src={lavadorasImg} 
                alt="Técnico especializado en lavadoras" 
                className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Contenido */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Servicio Técnico Especializado
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestra empresa está especializada en la venta, reparación y mantenimiento de lavadoras de todas las marcas 
                y capacidades. Nos destacamos por brindar soluciones integrales, técnicas especializadas y atención personalizada 
                para que tengas siempre el mejor rendimiento y durabilidad en tu equipo.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Contamos con técnicos certificados, repuestos originales y herramientas especializadas para diagnosticar 
                y resolver cualquier problema con tu lavadora, ya sea de hogar o negocio.
              </p>
            </div>
          </div>

          {/* Información detallada abajo de la imagen */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
              Nuestros Servicios de Lavadoras
            </h3>
            
            {/* Lista de servicios */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Venta de Lavadoras</h4>
                <p className="text-gray-600">Catálogo completo de lavadoras nuevas y usadas de todas las capacidades, desde domésticas hasta industriales con garantía.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Reparación Especializada</h4>
                <p className="text-gray-600">Reparamos lavadoras de todas las marcas con técnicos expertos, repuestos originales y garantía en cada reparación.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Mantenimiento Preventivo</h4>
                <p className="text-gray-600">Limpieza de filtros, revisión de mangueras, mantenimiento del tambor y revisión técnica anual con profesionales.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Instalación Profesional</h4>
                <p className="text-gray-600">Instalación segura y correcta de lavadoras domésticas e industriales con asesoría personalizada.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Servicio a Domicilio</h4>
                <p className="text-gray-600">Atención rápida en las principales ciudades del país con respuesta inmediata a emergencias.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Asesoría Personalizada</h4>
                <p className="text-gray-600">Te ayudamos a elegir la lavadora perfecta según capacidad, tipo de carga, funciones y presupuesto.</p>
              </div>
            </div>

            {/* Sección de tipos de lavadoras */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Tipos de Lavadoras que Trabajamos:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Lavadoras de Carga Frontal</h5>
                  <p className="text-gray-600 text-sm">Conocidas por su eficiencia en consumo de agua y electricidad. Ideales para lavado profundo y delicado, perfectas para hogares que desean cuidar la ropa y el medio ambiente.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Lavadoras de Carga Superior</h5>
                  <p className="text-gray-600 text-sm">Las más tradicionales y comunes. Ciclos de lavado rápidos y fácil manejo. Más económicas y permiten cargar ropa durante el ciclo de lavado.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Lavadoras Semi-Automáticas</h5>
                  <p className="text-gray-600 text-sm">Ideales para espacios con conexión limitada de agua o sistema eléctrico básico. Permiten lavar y centrifugar por separado, perfectas para pequeños negocios.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Lavadoras Industriales</h5>
                  <p className="text-gray-600 text-sm">Para empresas, lavanderías o grandes volúmenes de ropa. Robustas, de alta capacidad y diseñadas para uso intensivo y continuo.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Asesoría de Selección</h5>
                  <p className="text-gray-600 text-sm">Te ayudamos a elegir según capacidad, tipo de carga, funciones y programas, eficiencia energética y presupuesto disponible.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Soporte Postventa</h5>
                  <p className="text-gray-600 text-sm">Instalación, mantenimiento, reparación y soporte continuo para que tu lavadora funcione siempre de manera óptima.</p>
                </div>
              </div>
            </div>

            {/* Sección de ventajas */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Ventajas de Contar con una Lavadora de Calidad:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Ahorro de tiempo y esfuerzo con ciclos automáticos
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Mayor cuidado para tus prendas con programas específicos
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Eficiencia energética reduciendo consumo eléctrico y de agua
                  </li>
                </ul>
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Larga vida útil con mantenimiento adecuado
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Mayor higiene con ciclos de vapor o agua caliente
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Eliminación de bacterias y alergias
                  </li>
                </ul>
              </div>
            </div>

            {/* Sección de mantenimiento */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Mantenimiento Preventivo Incluye:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Limpieza periódica del filtro para evitar obstrucciones
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Revisión de mangueras y conexiones para evitar fugas
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Mantenimiento del tambor limpio y seco
                  </li>
                </ul>
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Evitar sobrecargar para prevenir daños en el motor
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Revisión técnica anual con profesionales certificados
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
                    Lavadora que no centrifuga
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Fugas de agua
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Problemas eléctricos
                  </li>
                </ul>
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Ruidos extraños
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Fallas en los ciclos de lavado
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Problemas con el motor o sistema mecánico
                  </li>
                </ul>
              </div>
            </div>

            {/* Sección de cómo elegir */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">¿Cómo Elegir la Lavadora Perfecta?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Capacidad</h5>
                  <p className="text-gray-600 text-sm">Según la cantidad de ropa que sueles lavar regularmente.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Tipo de Carga</h5>
                  <p className="text-gray-600 text-sm">Frontal o superior, dependiendo de tu espacio y preferencia.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Funciones y Programas</h5>
                  <p className="text-gray-600 text-sm">Que se ajusten a los tipos de prendas que lavas frecuentemente.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Eficiencia Energética</h5>
                  <p className="text-gray-600 text-sm">Busca modelos que ahorren electricidad y agua.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Presupuesto</h5>
                  <p className="text-gray-600 text-sm">Ten en cuenta la inversión inicial y el costo-beneficio a largo plazo.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Garantía y Soporte</h5>
                  <p className="text-gray-600 text-sm">Asegúrate de contar con respaldo técnico y repuestos disponibles.</p>
                </div>
              </div>
            </div>

            {/* Sección de beneficios */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Confía en los Expertos para el Cuidado de tus Lavadoras:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Servicio Técnico Certificado</h5>
                  <p className="text-gray-600 text-sm">Con años de experiencia en el mercado colombiano.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Respuesta Rápida</h5>
                  <p className="text-gray-600 text-sm">Atención inmediata a emergencias y urgencias.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Atención Personalizada</h5>
                  <p className="text-gray-600 text-sm">Servicio transparente y adaptado a tus necesidades.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Precios Competitivos</h5>
                  <p className="text-gray-600 text-sm">Opciones de financiamiento y costos accesibles.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Cobertura Nacional</h5>
                  <p className="text-gray-600 text-sm">En las principales ciudades y zonas del país.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Soporte Continuo</h5>
                  <p className="text-gray-600 text-sm">Asesoría completa desde la selección hasta el mantenimiento.</p>
                </div>
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const phoneNumber = '+573167137081';
                  const message = 'Hola, me gustaría obtener más información sobre servicios de lavadoras.';
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
                  const message = 'Hola, me gustaría agendar una visita técnica para mi lavadora.';
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

export default Lavadoras;

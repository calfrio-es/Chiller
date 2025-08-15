import React from 'react';
import calentadoresImg from '../../assets/img/layout/calentadores.jpg';

const Calentadores = () => {
  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Sección principal */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {/* Título y descripción principal */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Calentadores
              <span className="block" style={{ color: '#2b9b8d' }}>Venta, Reparación y Mantenimiento</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Los calentadores se han convertido en un electrodoméstico indispensable en muchos hogares, apartamentos, 
              hoteles, clínicas y empresas en Colombia. Ofrecen confort, eficiencia y seguridad a la hora de disfrutar 
              de agua caliente de manera rápida y constante, especialmente en climas fríos o zonas donde el suministro 
              de agua caliente no es automático.
            </p>
          </div>

          {/* Botón de contacto */}
          <div className="flex justify-center mb-16">
            <button 
              className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg cursor-pointer"
              style={{ borderColor: '#2b9b8d', color: '#2b9b8d' }}
              onClick={() => {
                const phoneNumber = '+573167137081';
                const message = 'Hola, me gustaría obtener información sobre servicios de calentadores (venta, reparación o mantenimiento).';
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Solicitar Servicio de Calentadores
            </button>
          </div>

          {/* Sección con imagen de lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Imagen */}
            <div className="order-2 lg:order-1">
              <img 
                src={calentadoresImg} 
                alt="Técnico especializado en calentadores" 
                className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Contenido */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Servicio Técnico Especializado
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                En nuestra empresa contamos con amplia experiencia en la venta, mantenimiento y reparación de calentadores 
                a gas, eléctricos e híbridos. Atendemos todas las marcas reconocidas del mercado, con personal calificado, 
                atención rápida y garantía en cada servicio.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Contamos con técnicos certificados, repuestos originales y herramientas especializadas para diagnosticar 
                y resolver cualquier problema con tu calentador, ya sea de hogar o negocio.
              </p>
            </div>
          </div>

          {/* Información detallada abajo de la imagen */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
              Nuestros Servicios de Calentadores
            </h3>
            
            {/* Lista de servicios */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Venta de Calentadores</h4>
                <p className="text-gray-600">Amplio catálogo de calentadores nuevos y usados de marcas reconocidas: Challenger, Haceb, Bosch, Kalley, Rheem, Bticino y más.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Reparación Especializada</h4>
                <p className="text-gray-600">Reparamos calentadores a gas y eléctricos con técnicos certificados, repuestos originales y garantía por escrito.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Mantenimiento Preventivo</h4>
                <p className="text-gray-600">Limpieza de quemadores, revisión de ventilación, control del sistema de encendido y verificación de fugas.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Instalación Profesional</h4>
                <p className="text-gray-600">Instalación segura y certificada con cumplimiento de normas técnicas y verificación de sistemas de seguridad.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Servicio a Domicilio</h4>
                <p className="text-gray-600">Atención rápida en Bogotá, Medellín, Cali, Barranquilla, Bucaramanga y otras ciudades del país.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Asesoría Personalizada</h4>
                <p className="text-gray-600">Te ayudamos a elegir el calentador ideal según necesidades, presupuesto y tipo de energía disponible.</p>
              </div>
            </div>

            {/* Sección de tipos de calentadores */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Tipos de Calentadores que Trabajamos:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Calentadores a Gas</h5>
                  <p className="text-gray-600 text-sm">Funcionan con gas natural o propano. Son los más comunes y económicos en el consumo mensual. Existen de paso (instantáneos) o acumulación (con tanque). Requieren buena ventilación y conexión segura.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Calentadores Eléctricos</h5>
                  <p className="text-gray-600 text-sm">Funcionan conectados a la red eléctrica, ideales en lugares donde no hay conexión de gas. Son fáciles de instalar, silenciosos y muy seguros. Su consumo depende del uso y la capacidad.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Calentadores Solares (Híbridos)</h5>
                  <p className="text-gray-600 text-sm">Utilizan energía solar como fuente principal, combinada con electricidad o gas para mantener la temperatura constante. Ideales para hogares sostenibles o zonas con buena exposición solar.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Instalación Certificada</h5>
                  <p className="text-gray-600 text-sm">Verificamos presión del agua, estado de conexiones, sistemas de ventilación, compatibilidad con la red hidráulica y cumplimiento de normas de seguridad exigidas por ley.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Asesoría de Selección</h5>
                  <p className="text-gray-600 text-sm">Te ayudamos a elegir según tipo de uso, número de personas, sistema de alimentación disponible (gas natural, propano o electricidad) y espacio disponible.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Cobertura Integral</h5>
                  <p className="text-gray-600 text-sm">Atendemos hogares, edificios, hoteles, clínicas, comercios y proyectos institucionales con servicio garantizado y repuestos originales.</p>
                </div>
              </div>
            </div>

            {/* Sección de instalación */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Instalación Segura y Certificada Incluye:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Presión del agua y caudal adecuado
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Estado de las conexiones de gas o eléctricas
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Sistemas de ventilación y evacuación de gases
                  </li>
                </ul>
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Compatibilidad del equipo con la red hidráulica
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Normas de seguridad exigidas por ley
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Certificación de técnicos con experiencia
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
                    Limpieza de quemadores y sensores
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Revisión de ventilación y salidas de gases
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Control del sistema de encendido y seguridad
                  </li>
                </ul>
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Inspección de fugas o corrosión interna
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Verificación del estado de la válvula de presión
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Optimización de la eficiencia energética
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
                    Fallo de encendido electrónico o manual
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Termostatos averiados o sensores dañados
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Fugas de gas o agua
                  </li>
                </ul>
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Problemas con válvulas o cañerías
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Sobrecalentamiento o apagado frecuente
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Agua que no calienta o sale a temperatura irregular
                  </li>
                </ul>
              </div>
            </div>

            {/* Sección de beneficios */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Beneficios de Nuestros Servicios:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Técnicos Certificados</h5>
                  <p className="text-gray-600 text-sm">Con experiencia comprobada en instalación residencial y comercial.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Cobertura Amplia</h5>
                  <p className="text-gray-600 text-sm">Atendemos hogares, edificios, hoteles, clínicas y comercios.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Servicio Garantizado</h5>
                  <p className="text-gray-600 text-sm">Repuestos originales y garantía por escrito en todos los servicios.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Cotización Clara</h5>
                  <p className="text-gray-600 text-sm">Sin compromiso y sin costos ocultos, transparencia total.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Atención Personalizada</h5>
                  <p className="text-gray-600 text-sm">Asesoría integral y servicio adaptado a tus necesidades.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Cobertura Nacional</h5>
                  <p className="text-gray-600 text-sm">Atención rápida en las principales ciudades del país.</p>
                </div>
              </div>
            </div>

            {/* Sección de importancia del mantenimiento */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">¿Por qué es Importante Mantener tu Calentador en Óptimas Condiciones?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Ahorra energía (gas o electricidad)
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Prolonga su vida útil
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Reduce riesgos de accidentes domésticos
                  </li>
                </ul>
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Garantiza suministro constante de agua caliente
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Previene daños costosos a futuro
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Mejora la eficiencia energética del equipo
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const phoneNumber = '+573167137081';
                  const message = 'Hola, me gustaría obtener más información sobre servicios de calentadores.';
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
                  const message = 'Hola, me gustaría agendar una visita técnica para mi calentador.';
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

export default Calentadores;

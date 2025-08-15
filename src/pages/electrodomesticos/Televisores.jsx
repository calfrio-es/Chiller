import React from 'react';
import tecnicoTelevisorImg from '../../assets/img/layout/tecnico-con-televisor.jpg';

const Televisores = () => {
  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Sección principal */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {/* Título y descripción principal */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Televisores
              <span className="block" style={{ color: '#2b9b8d' }}>Venta, Reparación y Mantenimiento</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Los televisores han evolucionado enormemente en los últimos años. Ya no son solo una fuente de entretenimiento, 
              sino también una herramienta de conectividad, trabajo remoto, educación virtual y experiencias multimedia inmersivas. 
              Por eso, su correcto funcionamiento y mantenimiento es clave para aprovechar al máximo todo su potencial.
            </p>
          </div>

          {/* Botón de contacto */}
          <div className="flex justify-center mb-16">
            <button 
              className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg cursor-pointer"
              style={{ borderColor: '#2b9b8d', color: '#2b9b8d' }}
              onClick={() => {
                const phoneNumber = '+573167137081';
                const message = 'Hola, me gustaría obtener información sobre servicios de televisores (venta, reparación o mantenimiento).';
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Solicitar Servicio de Televisores
            </button>
          </div>

          {/* Sección con imagen de lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Imagen */}
            <div className="order-2 lg:order-1">
              <img 
                src={tecnicoTelevisorImg} 
                alt="Técnico especializado en televisores" 
                className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Contenido */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Servicio Técnico Especializado
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                En nuestra empresa nos especializamos en la venta, reparación y mantenimiento de televisores de todas las marcas 
                y tecnologías. Brindamos un servicio técnico profesional en Colombia para hogares, empresas, oficinas, hoteles y más.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Contamos con técnicos certificados con experiencia real, repuestos originales y herramientas de diagnóstico profesional 
                para garantizar el mejor servicio para tu televisor.
              </p>
            </div>
          </div>

          {/* Información detallada abajo de la imagen */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
              Nuestros Servicios de Televisores
            </h3>
            
            {/* Lista de servicios */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Venta de Televisores</h4>
                <p className="text-gray-600">Amplio catálogo con marcas reconocidas: Samsung, LG, Sony, Kalley, Challenger, Panasonic, Hisense, Philips y más.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Reparación Especializada</h4>
                <p className="text-gray-600">Reparamos problemas de imagen, sonido, encendido, conectividad y tarjeta principal.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Mantenimiento Preventivo</h4>
                <p className="text-gray-600">Limpieza interna, revisión de conexiones, verificación de voltajes y actualización de software.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Instalación y Montaje</h4>
                <p className="text-gray-600">Instalación segura, empotre en pared, configuración de canales y conexión a internet.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Tecnologías Avanzadas</h4>
                <p className="text-gray-600">LED, OLED, QLED, Smart TV, 4K, 8K, televisores curvos y con asistentes inteligentes.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Servicio a Domicilio</h4>
                <p className="text-gray-600">Atención rápida en Bogotá, Medellín, Cali, Barranquilla, Bucaramanga y otras ciudades.</p>
              </div>
            </div>

            {/* Sección de tecnologías */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Tecnologías que Trabajamos:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">LED</h5>
                  <p className="text-gray-600 text-sm">Eficiente en consumo energético, livianos y con excelente calidad de imagen.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">OLED</h5>
                  <p className="text-gray-600 text-sm">Negros más puros y colores vibrantes, ideal para amantes del cine y el gaming.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">QLED</h5>
                  <p className="text-gray-600 text-sm">Tecnología avanzada con alto brillo, durabilidad y definición.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Smart TV</h5>
                  <p className="text-gray-600 text-sm">Conexión a internet, aplicaciones, redes sociales y streaming.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">4K y 8K</h5>
                  <p className="text-gray-600 text-sm">Ultra alta definición, ideal para pantallas grandes y contenido de última generación.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">Especiales</h5>
                  <p className="text-gray-600 text-sm">Televisores curvos, de pared y con asistentes inteligentes integrados.</p>
                </div>
              </div>
            </div>

            {/* Sección de recomendaciones */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Recomendaciones para Cuidar tu Televisor:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Evita exponerlo a humedad o fuentes de calor
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    No limpies la pantalla con productos abrasivos
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Usa estabilizador de voltaje para protegerlo
                  </li>
                </ul>
                <ul className="bg-white p-4 rounded-lg space-y-2">
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Apágalo cuando no lo uses para evitar desgaste
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Actualiza su sistema operativo con frecuencia
                  </li>
                  <li className="text-gray-600 text-sm flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Programa mantenimientos preventivos anuales
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const phoneNumber = '+573167137081';
                  const message = 'Hola, me gustaría obtener más información sobre servicios de televisores.';
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
                  const message = 'Hola, me gustaría agendar una visita técnica para mi televisor.';
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

export default Televisores;

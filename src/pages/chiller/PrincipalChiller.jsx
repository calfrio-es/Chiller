import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Play, Thermometer, Factory, Building2, Snowflake, Wrench } from 'lucide-react';

const PrincipalChiller = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4 py-8">
        
        {/* Título del Blog */}
        <div className="mt-0 mb-14">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center">
            Nuestro Blog
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Primera Columna - Información Técnica */}
          <div className="lg:col-span-2 border-r border-gray-300 pr-6">
            <div className="space-y-6">
              

              {/* Bottom Article - Mantenimiento Preventivo */}
              <article className="border-b border-gray-200 pb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3">
                  Mantenimiento Preventivo: Clave para la Longevidad
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  El mantenimiento regular del chiller es fundamental para maximizar su vida útil y eficiencia operativa. 
                  Nuestros servicios incluyen revisión de componentes críticos, verificación de refrigerantes y calibración de controles.
                </p>
              </article>
              {/* Top Article - Chiller 3TR */}
              <article className="border-b border-gray-200 pb-6">
                <div className="bg-gray-200 rounded-lg h-32 mb-4 flex items-center justify-center">
                  <img 
                    src="src/assets/img/layout/chiller3tr.jpeg" 
                    alt="Chiller 3TR"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-3">
                  Chiller 3TR: Soluciones Eficientes para Espacios Comerciales
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  El chiller 3TR es uno de los equipos de refrigeración más buscados en Colombia por su versatilidad, 
                  eficiencia energética y tamaño compacto. Ideal para instalaciones que requieren enfriamiento preciso.
                </p>
              </article>

              {/* Additional Article - Aplicaciones Industriales */}
              <article className="border-b border-gray-200 pb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3">
                  Aplicaciones Industriales Especializadas
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  Los chillers se utilizan en procesos industriales que requieren enfriamiento constante, 
                  control de temperatura en salas blancas, enfriamiento de equipos médicos y sistemas HVAC centralizados.
                </p>
              </article>

              {/* Additional Article - Eficiencia Energética */}
              <article>
                <h2 className="text-lg font-bold text-gray-900 mb-3">
                  Eficiencia Energética y Ahorro de Costos
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  Los chillers modernos están diseñados para maximizar el rendimiento mientras minimizan el consumo energético, 
                  reduciendo significativamente los costos operativos a largo plazo.
                </p>
              </article>
            </div>
          </div>

                    {/* Segunda Columna - Artículos con Imágenes */}
          <div className="lg:col-span-4 border-r border-gray-300 px-6">
            <div className="space-y-6">
              
              {/* Top Article - Chiller 100 Toneladas */}
              <article className="border-b border-gray-200 pb-6">
                <div className="bg-gray-200 rounded-lg h-40 mb-4 flex items-center justify-center">
                  <img 
                    src="src/assets/img/layout/chiller100toneladas.png" 
                    alt="Chiller 100 Toneladas"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Chiller Carrier 100 Toneladas: Potencia Industrial Garantizada
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  El Chiller Carrier de 100 toneladas representa la máxima expresión de tecnología en refrigeración industrial. 
                  Con capacidad para enfriar grandes volúmenes de agua y mantener temperaturas estables en procesos críticos.
                </p>
              </article>

              {/* Additional Article - Características Técnicas */}
              <article className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Características Técnicas Avanzadas
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  Los chillers modernos cuentan con compresores de alta eficiencia, controles digitales inteligentes, 
                  refrigerantes ecológicos y sistemas de seguridad avanzados para garantizar un funcionamiento óptimo.
                </p>
              </article>
                            {/* Middle Article - Chiller 25TR */}
                            <article className="border-b border-gray-200 pb-6">
                <div className="bg-gray-200 rounded-lg h-40 mb-4 flex items-center justify-center">
                  <img 
                    src="src/assets/img/layout/chiller25tr.jpeg" 
                    alt="Chiller 25TR"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Chiller 25TR: Potencia para Grandes Proyectos
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  Cuando se requiere una solución de alta capacidad para sistemas de refrigeración industrial, 
                  el chiller 25TR es la opción ideal para garantizar un rendimiento estable y eficiente.
                </p>
              </article>

              {/* Additional Article - Tipos de Chiller */}
              <article className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Tipos de Chiller Disponibles
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  Ofrecemos chillers enfriados por aire, enfriados por agua y modulares, adaptándose a diferentes necesidades de capacidad y condiciones ambientales específicas de cada proyecto.
                </p>
              </article>

              {/* Bottom Article - Chiller 20TR */}
              <article className="border-b border-gray-200 pb-6">
                <div className="bg-gray-200 rounded-lg h-40 mb-4 flex items-center justify-center">
                  <img 
                    src="src/assets/img/layout/chiller20tr.jpeg" 
                    alt="Chiller 20TR"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Chiller 20TR: Potencia y Eficiencia Industrial
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  Soluciones robustas para climatización y refrigeración industrial de gran escala, 
                  representando una de las mejores alternativas disponibles en el mercado.
                </p>
              </article>
                            {/* Additional Article - Beneficios del Mantenimiento */}
                            <article>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Beneficios del Mantenimiento Profesional
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  El mantenimiento regular puede extender la vida útil del equipo hasta en un 50%, reducir costos operativos, 
                  prevenir fallas costosas y garantizar un rendimiento óptimo continuo.
                </p>
              </article>
            </div>
          </div>

          

          {/* Tercera Columna - Artículos de Nuevos Chillers */}
          <div className="lg:col-span-4 border-r border-gray-300 px-6">
            <div className="space-y-6">
              
              {/* Bottom Article - Chiller 5TR */}
              <article className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Chiller 5TR: Soluciones Compactas y Eficientes
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  El chiller 5TR es una solución intermedia ideal para proyectos comerciales, industriales ligeros 
                  y aplicaciones especializadas que requieren enfriamiento continuo sin sobredimensionar el sistema.
                </p>
              </article>

              {/* Top Article - Chiller 10TR */}
              <article className="border-b border-gray-200 pb-6">
                <div className="bg-gray-200 rounded-lg h-40 mb-4 flex items-center justify-center">
                  <img 
                    src="src/assets/img/layout/chiller10tr.jpeg" 
                    alt="Chiller 10TR"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Chiller 10TR: Refrigeración de Alta Capacidad
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  Cuando se trata de controlar la temperatura en procesos industriales, espacios comerciales grandes o sistemas HVAC de alta demanda, el chiller 10TR es una de las soluciones más eficaces y confiables del mercado.
                </p>
              </article>

              {/* Middle Article - Chiller 7.5 Toneladas */}
              <article className="border-b border-gray-200 pb-6">
                <div className="bg-gray-200 rounded-lg h-40 mb-4 flex items-center justify-center">
                  <img 
                    src="src/assets/img/layout/chiiller7-5.jpeg" 
                    alt="Chiller 7.5 Toneladas"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Chiller Alpunto 7.5 Toneladas: Eficiencia Compacta
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  El Chiller Alpunto de 7.5 toneladas ofrece un balance perfecto entre capacidad, eficiencia energética y facilidad de instalación para aplicaciones comerciales e industriales medianas.
                </p>
              </article>


              {/* Additional Article - Chiller 12000 BTU */}
              <article className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Chiller 12000 BTU: Solución Compacta y Precisa
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  En un mundo donde la eficiencia energética y la precisión térmica son esenciales, el chiller 12000 BTU representa una excelente solución para aplicaciones comerciales, técnicas y residenciales que requieren enfriamiento constante en espacios reducidos.
                </p>
              </article>

              

              {/* Additional Article - Chiller 9000 BTU */}
              <article className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Chiller 9000 BTU: Solución Compacta y Eficiente
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  En el universo de la climatización y la refrigeración técnica, los sistemas compactos de alto rendimiento se vuelven indispensables para entornos que requieren precisión térmica en espacios reducidos.
                </p>
              </article>

              {/* Additional Article - Chiller CW 3000 */}
              <article className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Chiller CW 3000: Solución Avanzada Industrial
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  El chiller CW 3000 es un equipo especializado diseñado para brindar un rendimiento óptimo en sistemas de refrigeración que requieren precisión, eficiencia y durabilidad.
                </p>
              </article>
            </div>
          </div>

          {/* Cuarta Columna - Enlaces de Interés */}
          <div className="lg:col-span-2 pl-4">
            <div className="space-y-6">
              
              {/* Sección de Enlaces Rápidos */}
              <section className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-gray-900 mb-4">Enlaces Rápidos</h3>
                <div className="space-y-3">
                  <Link to="/chiller-100-toneladas" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Chiller 100 Toneladas
                  </Link>
                  <Link to="/chiller-25-tr" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Chiller 25TR
                  </Link>
                  <Link to="/chiller-20-tr" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Chiller 20TR
                  </Link>
                  <Link to="/chiller-10-tr" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Chiller 10TR
                  </Link>
                  <Link to="/chiller-7-5-toneladas" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Chiller 7.5 Toneladas
                  </Link>
                  <Link to="/chiller-5-toneladas" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Chiller 5 Toneladas
                  </Link>
                  <Link to="/chiller-3-toneladas" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Chiller 3 Toneladas
                  </Link>
                  <Link to="/chiller-1200-btu" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Chiller 12000 BTU
                  </Link>
                  <Link to="/chiller-9000-btu" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Chiller 9000 BTU
                  </Link>
                  <Link to="/chiller-cw-3000" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Chiller CW 3000
                  </Link>
                </div>
              </section>

              {/* Sección de Servicios */}
              <section className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-gray-900 mb-4">Servicios</h3>
                <div className="space-y-3">
                  <Link to="/servicio-tecnico-chiller" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Servicio Técnico
                  </Link>
                  <Link to="/mantenimiento-chiller" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Mantenimiento
                  </Link>
                  <Link to="/reparacion-chiller" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Reparación
                  </Link>
                  <Link to="/instalacion-chiller" className="block text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Instalación
                  </Link>
                </div>
              </section>

              {/* Sección de Contacto */}
              <section>
                <h3 className="font-bold text-gray-900 mb-4">Contacto</h3>
                <div className="space-y-3">
                  <button
                    className="block text-gray-600 hover:text-blue-600 transition-colors text-sm text-left w-full"
                    onClick={() => {
                      const phoneNumber = '+573167137081';
                      const message = 'Hola, me gustaría obtener información sobre chillers.';
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    WhatsApp: 3167137081
                  </button>
                  <div className="space-y-2">
                    <p className="text-gray-600 text-sm">Medellín: 6042040554</p>
                    <p className="text-gray-600 text-sm">Bogotá: 3167137081</p>
                    <p className="text-gray-600 text-sm">Barranquilla: 6053198733</p>
                    <p className="text-gray-600 text-sm">Bucaramanga: 6076916055</p>
                    <p className="text-gray-600 text-sm">Cali: 3167137081</p>
                    <p className="text-gray-600 text-sm">Pereira: 3167137081</p>
                    <p className="text-gray-600 text-sm">Fusagasugá: 6014828282</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

                 {/* Call to Action Section */}
         <div className="mt-12 bg-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Necesitas Asesoría Especializada en Chillers?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Nuestro equipo de expertos está listo para ayudarte a encontrar la solución perfecta 
            para tus necesidades de refrigeración industrial.
          </p>
                     <div className="flex justify-center">
             <button
               className="bg-[#2b9b8d] hover:bg-[#248a7d] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
               onClick={() => {
                 const phoneNumber = '+573167137081';
                 const message = 'Hola, me gustaría recibir asesoría especializada sobre chillers.';
                 const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                 window.open(whatsappUrl, '_blank');
               }}
             >
               Contactar Especialista
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalChiller;

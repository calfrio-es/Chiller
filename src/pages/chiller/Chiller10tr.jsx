import {
    Wrench,
    Shield,
    Award,
    Clock,
    CheckCircle,
    Snowflake,
    Factory,
    Building2,
    Thermometer,
  } from "lucide-react"
  
  export default function ChillerProductPage() {
    return (
      <div className="min-h-screen bg-white pt-24">
        {/* Detailed Information Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Snowflake className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Chiller 10TR: Refrigeración de Alta Capacidad para Proyectos Comerciales e Industriales en Colombia
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Cuando se trata de controlar la temperatura en procesos industriales, espacios comerciales grandes o sistemas HVAC de alta demanda, el chiller 10TR (equivalente a chiller 10 toneladas) es una de las soluciones más eficaces y confiables del mercado. En nuestra empresa, especializada en chiller de enfriamiento en Colombia, te ofrecemos este tipo de equipos con respaldo técnico completo, instalación profesional y servicio de mantenimiento garantizado.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Ya sea para climatización, procesos de manufactura o enfriamiento especializado, el chiller de 10 toneladas es ideal para instalaciones que requieren rendimiento, eficiencia energética y durabilidad.
                </p>
              </div>

              {/* ¿Qué es un Chiller 10TR? */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Factory className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  ¿Qué es un Chiller 10TR?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Un chiller 10TR es un sistema de refrigeración con una capacidad de extracción de 120,000 BTU/hora, lo que lo convierte en un equipo apto para aplicaciones medianas y grandes que necesitan un control térmico continuo y confiable. Este tipo de chiller puede ser:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Enfriado por aire:</strong>
                      <span className="text-gray-700 ml-2">
                        Con condensador externo para instalación al aire libre.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Enfriado por agua:</strong>
                      <span className="text-gray-700 ml-2">
                        Más eficiente en climas cálidos o en aplicaciones industriales exigentes.
                      </span>
                    </div>
                  </li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Este tipo de chiller de enfriamiento se adapta a múltiples industrias como:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Centros comerciales y grandes oficinas</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Laboratorios farmacéuticos y alimenticios</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Industrias plásticas, textiles, químicas o metalúrgicas</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Centros de datos y telecomunicaciones</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Hospitales y clínicas que requieren enfriamiento para equipos médicos</strong>
                    </div>
                  </li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  Gracias a su capacidad, el chiller 10TR puede mantener temperaturas precisas durante largos periodos de operación, garantizando estabilidad térmica y ahorro energético.
                </p>
              </div>

              {/* Características Técnicas */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Wrench className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Características del Chiller 10 Toneladas
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Nuestros chillers de 10 toneladas cuentan con componentes de alta calidad y tecnología avanzada para asegurar un funcionamiento eficiente, silencioso y de bajo consumo. Algunas de sus características incluyen:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Compresor scroll o semihermético de alta eficiencia</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Intercambiadores de calor tipo placas o casco y tubo</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Control digital de temperatura y alarmas de seguridad</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Estructura resistente para uso continuo 24/7</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Refrigerantes ecológicos (R-410A, R-134a)</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Conectividad para sistemas de monitoreo remoto</strong>
                    </div>
                  </li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  Además, pueden adaptarse a distintos sistemas hidráulicos, soportan variaciones de carga térmica y son ideales para operar en climas cálidos como los de muchas regiones de Colombia.
                </p>
              </div>

              {/* Chiller Colombia */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building2 className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Chiller Colombia: Venta, Instalación y Soporte Técnico
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Somos una empresa líder en soluciones de chiller Colombia, ofreciendo equipos para todo tipo de industrias con cobertura a nivel nacional. Nuestro portafolio incluye:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Venta de chillers nuevos</h3>
                    <p className="text-gray-700">
                      Con tecnología de última generación, eficiencia energética certificada y garantía total.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Venta de chillers usados y reacondicionados</h3>
                    <p className="text-gray-700">
                      Con garantía, revisados por nuestros técnicos especializados.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Instalación profesional</h3>
                    <p className="text-gray-700">
                      Asesoría en la selección, diseño del sistema y puesta en marcha.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Atención en todo el país</h3>
                    <p className="text-gray-700">
                      Bogotá, Medellín, Cali, Barranquilla, Bucaramanga, Pereira y más.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  Nos aseguramos de que cada proyecto cuente con el chiller adecuado, optimizando el consumo energético, el espacio y el rendimiento.
                </p>
              </div>

              {/* Mantenimiento */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Mantenimiento de Chiller 10TR: Servicio Técnico Integral
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  El mantenimiento de chiller es clave para garantizar la vida útil del equipo y prevenir fallas costosas. Por eso ofrecemos:
                </p>
                <div className="p-8 rounded-xl" style={{ background: 'linear-gradient(to right, rgba(43, 155, 141, 0.1), rgba(107, 114, 128, 0.1))' }}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Mantenimiento preventivo</h3>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Revisión de presiones y temperatura</li>
                        <li>• Limpieza de condensadores y evaporadores</li>
                        <li>• Verificación del sistema de control y sensores</li>
                        <li>• Inspección de conexiones eléctricas y niveles de refrigerante</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Mantenimiento correctivo</h3>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Reparación de fugas</li>
                        <li>• Sustitución de compresores, bombas, ventiladores</li>
                        <li>• Diagnóstico y corrección de fallas electrónicas</li>
                        <li>• Suministro de repuestos originales</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  También ofrecemos contratos de mantenimiento periódicos, con visitas programadas y soporte técnico de emergencia.
                </p>
              </div>

              {/* Aplicaciones */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Aplicaciones del Chiller 10TR
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  El chiller de enfriamiento de 10 toneladas tiene un amplio rango de aplicaciones, siendo ideal para:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Climatización centralizada de edificios medianos</h3>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Sistemas HVAC comerciales en supermercados, restaurantes, auditorios</h3>
                  </div>
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Procesos industriales que requieren enfriamiento constante (inyección de plásticos, fermentación, impresión, galvanoplastia)</h3>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Refrigeración de equipos médicos y electrónicos en entornos críticos</h3>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  Elegir el chiller correcto puede significar una diferencia enorme en el rendimiento, ahorro y durabilidad del sistema térmico. Nosotros te ayudamos a tomar esa decisión.
                </p>
              </div>

              {/* Por qué elegirnos */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Por Qué Elegir Nuestros Chillers de 10TR?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Más de 10 años de experiencia en sistemas de refrigeración en Colombia</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Asesoría técnica antes, durante y después de la compra</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Instalación profesional y soporte postventa</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Equipos de alta calidad y eficiencia</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Servicio técnico con cobertura nacional</strong>
                    </div>
                  </li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  Además, todos nuestros chillers cuentan con respaldo y garantía, con opción de personalizar la solución según el tipo de industria, espacio disponible y condiciones climáticas del lugar de instalación.
                </p>
              </div>

              {/* Call to Action Final */}
              <div className="rounded-2xl p-8 text-center text-white" style={{ background: 'linear-gradient(to right, #2b9b8d, #1a7a6f)' }}>
                <h2 className="text-3xl font-bold mb-4">Cotiza tu Chiller 10TR con Expertos</h2>
                <p className="text-lg mb-8 opacity-90">
                  ¿Estás buscando un chiller 10TR confiable, eficiente y con soporte técnico en Colombia? Contáctanos ahora para recibir una cotización personalizada. Nuestro equipo de ingenieros te asesorará desde la elección del equipo hasta su instalación y mantenimiento.
                </p>
                <p className="text-lg mb-8 opacity-90">
                  Ya sea que necesites un chiller nuevo o una alternativa reacondicionada, estamos listos para ofrecerte la mejor solución al mejor precio. Enfriamos tu negocio con inteligencia, eficiencia y experiencia.
                </p>
                <div className="flex justify-center">
                  <button 
                    className="bg-white text-[#2b9b8d] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                    onClick={() => {
                      const phoneNumber = '+573167137081';
                      const message = 'Hola, me gustaría solicitar una cotización para el Chiller 10TR.';
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Solicitar Cotización
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    )
  }

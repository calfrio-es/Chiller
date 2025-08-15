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
                  Chiller 20TR: Potencia y Eficiencia para Grandes Sistemas de Enfriamiento en Colombia
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Cuando se habla de soluciones robustas para climatización y refrigeración industrial o comercial de gran escala, el chiller 20TR (equivalente a chiller 20 toneladas) representa una de las mejores alternativas disponibles en el mercado. Este tipo de sistema de enfriamiento ofrece la capacidad, eficiencia y confiabilidad necesarias para instalaciones que requieren un control térmico constante y de alto rendimiento.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  En nuestra empresa, especializada en la venta, instalación y mantenimiento de chiller en Colombia, contamos con una amplia gama de equipos de enfriamiento industrial como el chiller de 20TR, respaldados por asesoría técnica profesional y soporte integral.
                </p>
              </div>

              {/* ¿Qué es un Chiller 20TR? */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Factory className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  ¿Qué es un Chiller 20TR?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Un chiller 20TR es un sistema de enfriamiento con capacidad para remover aproximadamente 240,000 BTU por hora, diseñado para cubrir las necesidades de refrigeración en espacios grandes, procesos industriales exigentes o sistemas HVAC centralizados. Este equipo puede ser de tipo aire-agua (enfriado por aire) o agua-agua (enfriado por agua), según las condiciones del proyecto.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Se trata de un chiller de enfriamiento industrial que puede adaptarse a una variedad de aplicaciones:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Centros comerciales y edificios corporativos</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Hospitales, clínicas y laboratorios</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Industrias manufactureras, plásticas, farmacéuticas y de alimentos</strong>
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
                      <strong className="text-gray-900">Grandes cocinas industriales, hoteles y universidades</strong>
                    </div>
                  </li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  Gracias a su gran capacidad, el chiller 20 toneladas garantiza un funcionamiento estable, continuo y eficiente, incluso en condiciones exigentes de operación.
                </p>
              </div>

              {/* Características Técnicas */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Wrench className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Características del Chiller de 20 Toneladas
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Los chillers 20TR que ofrecemos están diseñados para brindar un desempeño superior en términos de eficiencia energética, durabilidad y facilidad de mantenimiento. Entre sus principales características destacan:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Compresores scroll o semiherméticos de alta eficiencia</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Sistema de condensación enfriado por aire o agua</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Controles digitales inteligentes con monitoreo en tiempo real</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Evaporadores tipo placas o casco y tubo, según la aplicación</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Refrigerantes ecológicos como R-410A o R-134a</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Protección automática contra fallas eléctricas, baja presión, sobretemperatura, etc.</strong>
                    </div>
                  </li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  Estos chillers son compatibles con sistemas HVAC, procesos industriales y estructuras que demandan un control térmico avanzado.
                </p>
              </div>

              {/* Chiller Colombia */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building2 className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Chiller de Enfriamiento Colombia: Ventas, Instalación y Soporte
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Somos una empresa líder en el suministro de chiller de enfriamiento Colombia, ofreciendo soluciones a medida para todo tipo de proyectos. Nuestro portafolio incluye:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Venta de chiller nuevos</h3>
                    <p className="text-gray-700">
                      Con la última tecnología, alta eficiencia y garantía.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Venta de chiller reacondicionados</h3>
                    <p className="text-gray-700">
                      Probados, optimizados y con soporte técnico.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Instalación profesional</h3>
                    <p className="text-gray-700">
                      Adaptada al diseño del sistema térmico de tu empresa.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Asesoría técnica completa</h3>
                    <p className="text-gray-700">
                      Desde la selección del equipo hasta la puesta en marcha.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  Además, contamos con cobertura nacional en ciudades como Bogotá, Medellín, Cali, Barranquilla, Cartagena, Bucaramanga y más, garantizando atención oportuna y personalizada.
                </p>
              </div>

              {/* Mantenimiento */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Mantenimiento de Chiller 20TR: Clave para el Rendimiento Continuo
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Ofrecemos un servicio integral de mantenimiento de chiller para prolongar la vida útil de tu equipo y evitar paradas no programadas. Nuestros servicios abarcan:
                </p>
                <div className="p-8 rounded-xl" style={{ background: 'linear-gradient(to right, rgba(43, 155, 141, 0.1), rgba(107, 114, 128, 0.1))' }}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Mantenimiento preventivo:</h3>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Inspección de presiones y niveles de refrigerante</li>
                        <li>• Limpieza de filtros, condensadores y evaporadores</li>
                        <li>• Calibración de sensores y verificación de controles</li>
                        <li>• Revisión de componentes eléctricos y de flujo hidráulico</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Mantenimiento correctivo:</h3>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Diagnóstico de fallas y reemplazo de componentes dañados</li>
                        <li>• Reparación de fugas de refrigerante o fallas eléctricas</li>
                        <li>• Sustitución de compresores, bombas y válvulas</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  También ofrecemos contratos de mantenimiento programado, ideales para empresas que desean asegurar la continuidad de su operación térmica sin sorpresas.
                </p>
              </div>

              {/* Aplicaciones */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Aplicaciones del Chiller 20TR
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  El chiller 20TR es perfecto para:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Sistemas de climatización central en espacios grandes</h3>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Plantas de producción con maquinaria que genera mucho calor</h3>
                  </div>
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Enfriamiento de líquidos en procesos industriales complejos</h3>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Centros hospitalarios que requieren temperatura constante en quirófanos y laboratorios</h3>
                  </div>
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Servidores y salas de cómputo que requieren control térmico preciso</h3>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  Gracias a su capacidad de enfriamiento y eficiencia, este tipo de chiller Colombia asegura estabilidad operativa en sectores que no pueden permitirse interrupciones.
                </p>
              </div>

              {/* Por qué elegirnos */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Por Qué Elegir Nuestros Chillers de 20TR?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Más de una década de experiencia en sistemas de enfriamiento industrial</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Equipos con alta eficiencia energética y tecnología de punta</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Personal técnico certificado para instalación y soporte</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Atención nacional y tiempos de respuesta rápidos</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Precios competitivos y opciones de financiamiento</strong>
                    </div>
                  </li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  Nuestra misión es brindarte soluciones reales, eficientes y duraderas para tus necesidades de refrigeración, con la garantía de un acompañamiento técnico completo.
                </p>
              </div>

              {/* Call to Action Final */}
              <div className="rounded-2xl p-8 text-center text-white" style={{ background: 'linear-gradient(to right, #2b9b8d, #1a7a6f)' }}>
                <h2 className="text-3xl font-bold mb-4">Solicita Tu Cotización de Chiller 20TR Hoy</h2>
                <p className="text-lg mb-8 opacity-90">
                  ¿Estás buscando un chiller 20TR para tu empresa o proyecto industrial en Colombia? Contáctanos hoy y recibe una cotización personalizada, asesoría técnica especializada y opciones de instalación o mantenimiento adaptadas a tus necesidades.
                </p>
                <p className="text-lg mb-8 opacity-90">
                  Ofrecemos venta, instalación y mantenimiento de chillers de distintas capacidades, incluyendo equipos nuevos y reacondicionados, con garantía y respaldo profesional.
                </p>
                <p className="text-lg mb-8 opacity-90">
                  Haz que tu sistema de enfriamiento sea una ventaja competitiva. Confiabilidad, eficiencia y soporte técnico especializado: eso es lo que te ofrecemos.
                </p>
                <div className="flex justify-center">
                  <button 
                    className="bg-white text-[#2b9b8d] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                    onClick={() => {
                      const phoneNumber = '+573167137081';
                      const message = 'Hola, me gustaría solicitar una cotización para el Chiller 20TR.';
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

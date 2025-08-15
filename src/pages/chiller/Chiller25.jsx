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
                  Chiller 25TR: Potencia y Eficiencia para Grandes Proyectos de Refrigeración en Colombia
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Cuando se requiere una solución de alta capacidad para sistemas de refrigeración industrial o climatización comercial, el chiller 25TR (equivalente a 25 toneladas de enfriamiento) es la opción ideal para garantizar un rendimiento estable y eficiente en espacios amplios y procesos exigentes.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  En nuestra empresa, líder en la venta y mantenimiento de sistemas de chiller en Colombia, contamos con equipos de alta calidad, servicio técnico especializado y asesoría personalizada para ayudarte a escoger el chiller de enfriamiento que mejor se adapte a tus necesidades.
                </p>
              </div>

              {/* ¿Qué es un Chiller 25TR? */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Factory className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  ¿Qué es un Chiller 25TR?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Un chiller 25TR es un equipo diseñado para extraer aproximadamente 300,000 BTU por hora, ideal para procesos industriales, grandes sistemas HVAC y aplicaciones comerciales donde la demanda térmica es considerable.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Estos sistemas pueden ser:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Enfriados por aire:</strong>
                      <span className="text-gray-700 ml-2">
                        Con condensadores que expulsan el calor al ambiente externo.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Enfriados por agua:</strong>
                      <span className="text-gray-700 ml-2">
                        Más eficientes en climas cálidos o cuando se dispone de una torre de enfriamiento.
                      </span>
                    </div>
                  </li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Este tipo de chiller de enfriamiento Colombia es común en industrias como:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Manufactura y procesamiento de alimentos</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Centros comerciales y grandes oficinas</strong>
                    </div>
                 </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Hospitales y laboratorios</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Hotelería y entretenimiento</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Plantas industriales de gran escala</strong>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Características Técnicas */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Wrench className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Características Técnicas del Chiller 25 Toneladas
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Nuestros chillers de 25 toneladas se distinguen por su robustez, eficiencia y tecnología avanzada, que incluyen:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Compresores semiherméticos o scroll de alta eficiencia energética</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Intercambiadores de calor tipo casco y tubo o de placas</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Controladores digitales para monitoreo y ajuste de temperatura</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Sistemas de seguridad contra sobrecargas y fallas eléctricas</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Uso de refrigerantes ecológicos para reducir el impacto ambiental</strong>
                    </div>
                  </li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  Este equipo está diseñado para funcionar de forma continua con un mantenimiento adecuado, garantizando estabilidad y ahorro energético.
                </p>
              </div>

              {/* Chiller Colombia */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building2 className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Servicios de Venta e Instalación de Chiller en Colombia
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Ofrecemos venta directa de chillers nuevos y reacondicionados, con garantía y soporte técnico. Además, nuestro equipo de ingenieros realiza la instalación y puesta en marcha, asegurando que el sistema funcione de manera óptima desde el primer día.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Venta de chillers nuevos</h3>
                    <p className="text-gray-700">
                      Con tecnología de última generación y garantía completa.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Venta de chillers reacondicionados</h3>
                    <p className="text-gray-700">
                      Probados y optimizados con soporte técnico garantizado.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Instalación profesional</h3>
                    <p className="text-gray-700">
                      Realizada por nuestro equipo de ingenieros especializados.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Puesta en marcha</h3>
                    <p className="text-gray-700">
                      Aseguramos funcionamiento óptimo desde el primer día.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  Contamos con presencia nacional para atender proyectos en Bogotá, Medellín, Cali, Barranquilla, Bucaramanga y más.
                </p>
              </div>

              {/* Mantenimiento */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Mantenimiento de Chiller 25TR: Garantía de Funcionamiento y Longevidad
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  El mantenimiento preventivo y correctivo es fundamental para evitar fallas costosas y mantener la eficiencia del equipo. Nuestros servicios incluyen:
                </p>
                <div className="p-8 rounded-xl" style={{ background: 'linear-gradient(to right, rgba(43, 155, 141, 0.1), rgba(107, 114, 128, 0.1))' }}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Mantenimiento preventivo:</h3>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Inspección y limpieza de componentes clave</li>
                        <li>• Revisión de sistemas eléctricos y controles</li>
                        <li>• Verificación y ajuste de niveles de refrigerante</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Mantenimiento correctivo:</h3>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Reparación o sustitución de piezas defectuosas</li>
                        <li>• Diagnóstico de fallas y soluciones inmediatas</li>
                        <li>• Optimización del rendimiento del sistema</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  Con nuestros contratos de mantenimiento, tu chiller 25 toneladas estará siempre listo para operar al máximo rendimiento.
                </p>
              </div>

              {/* Aplicaciones */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Aplicaciones del Chiller 25TR
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  El chiller 25TR es esencial en:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Sistemas HVAC para grandes edificios</h3>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Procesos industriales que requieren refrigeración continua</h3>
                  </div>
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Enfriamiento de maquinaria pesada y equipos electrónicos</h3>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Centros de datos y telecomunicaciones</h3>
                  </div>
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Grandes cocinas y procesos alimenticios</h3>
                  </div>
                </div>
              </div>

              {/* Por qué elegirnos */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Por Qué Elegir Nuestros Chillers de 25TR?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Líder en venta y mantenimiento de sistemas de chiller en Colombia</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Equipos de alta calidad con tecnología avanzada</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Servicio técnico especializado y asesoría personalizada</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Presencia nacional con cobertura en principales ciudades</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Garantía y soporte técnico completo</strong>
                    </div>
                  </li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  Te ayudamos a escoger el chiller de enfriamiento que mejor se adapte a tus necesidades específicas.
                </p>
              </div>

              {/* Call to Action Final */}
              <div className="rounded-2xl p-8 text-center text-white" style={{ background: 'linear-gradient(to right, #2b9b8d, #1a7a6f)' }}>
                <h2 className="text-3xl font-bold mb-4">Contáctanos para tu Chiller 25TR</h2>
                <p className="text-lg mb-8 opacity-90">
                  Si necesitas un chiller 25TR confiable y eficiente para tu empresa en Colombia, contáctanos para una cotización y asesoría especializada.
                </p>
                <p className="text-lg mb-8 opacity-90">
                  Te ofrecemos calidad, experiencia y soporte técnico para que tu sistema de enfriamiento funcione sin interrupciones.
                </p>
                <div className="flex justify-center">
                  <button 
                    className="bg-white text-[#2b9b8d] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                    onClick={() => {
                      const phoneNumber = '+573167137081';
                      const message = 'Hola, me gustaría solicitar una cotización para el Chiller 25TR.';
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

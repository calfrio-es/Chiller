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
                  Chiller 12000 BTU: Solución Compacta y Precisa para Enfriamiento Especializado
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  En un mundo donde la eficiencia energética y la precisión térmica son esenciales, el chiller 12000 BTU representa una excelente solución para aplicaciones comerciales, técnicas y residenciales que requieren enfriamiento constante en espacios reducidos. Este equipo compacto, pero potente, forma parte de los sistemas de chiller de enfriamiento más versátiles del mercado, ideal para ambientes donde controlar la temperatura es clave para el rendimiento, la conservación o la estabilidad de equipos.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Como empresa especializada en la venta, instalación y mantenimiento de chiller en Colombia, ofrecemos equipos de alta calidad, respaldo técnico completo y soluciones personalizadas que se adaptan a tus necesidades reales.
                </p>
              </div>

              {/* ¿Qué es un Chiller 12000 BTU? */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Factory className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  ¿Qué es un Chiller 12000 BTU y para Qué Sirve?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Un chiller 12000 BTU es un sistema de refrigeración de precisión diseñado para extraer hasta 12,000 unidades térmicas británicas por hora (BTU/h), equivalente a aproximadamente 1 tonelada de refrigeración. A diferencia de los aires acondicionados convencionales, estos chillers están diseñados para enfriar agua o soluciones especiales que luego se distribuyen hacia sistemas que requieren temperatura controlada.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Estos equipos son ideales para:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Pequeños laboratorios o salas técnicas</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Enfriamiento de equipos electrónicos o médicos</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Máquinas láser, CNC o de impresión 3D</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Sistemas HVAC personalizados</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Centros de estética o consultorios odontológicos</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Aplicaciones residenciales de alto nivel técnico</strong>
                    </div>
                  </li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  Gracias a su tamaño compacto y operación silenciosa, el chiller 12000 BTU puede instalarse fácilmente en espacios reducidos sin comprometer el confort ni la eficiencia.
                </p>
              </div>

              {/* Características Técnicas */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Wrench className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Características Técnicas del Chiller 12000 BTU
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Aunque se trata de un equipo de baja capacidad, los chillers 12000 BTU están diseñados con tecnología avanzada para ofrecer un rendimiento profesional. Algunas características comunes incluyen:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Control digital de temperatura con pantalla LED</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Compresor de alta eficiencia (scroll o rotativo)</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Intercambiador de calor tipo placas o serpentín de cobre</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Bomba integrada para recirculación del líquido enfriado</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Compatibilidad con refrigerantes ecológicos (R-410A o R-134a)</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Carcasa compacta, de fácil mantenimiento y bajo nivel de ruido</strong>
                    </div>
                  </li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  Muchos modelos también cuentan con alarmas de seguridad, protección térmica, sensores de flujo y opción de control remoto, lo que los convierte en una solución robusta para sistemas técnicos o de misión crítica.
                </p>
              </div>

              {/* Chiller Colombia */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building2 className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Chiller Colombia: Equipos Profesionales al Alcance de Tu Proyecto
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  En el competitivo mercado de chiller Colombia, nos destacamos por ofrecer soluciones integrales en chiller de enfriamiento Colombia para aplicaciones industriales, comerciales y residenciales de alta exigencia. Contamos con un portafolio que incluye:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Chillers nuevos</h3>
                    <p className="text-gray-700">
                      Equipos modernos con tecnología de punta, eficiencia energética certificada y garantía completa.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Chillers a la medida</h3>
                    <p className="text-gray-700">
                      Soluciones desarrolladas de acuerdo al tipo de líquido, temperatura deseada, carga térmica y espacio disponible.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Servicio de instalación</h3>
                    <p className="text-gray-700">
                      Realizado por técnicos expertos, asegurando la correcta operación desde el primer día.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  Si necesitas un sistema compacto pero potente, el chiller 12000 BTU es perfecto para ti. Es eficiente, silencioso y fácil de integrar en múltiples entornos.
                </p>
              </div>

              {/* Mantenimiento */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Mantenimiento de Chiller: Garantía de Funcionamiento Continuo
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  El buen funcionamiento de cualquier chiller de enfriamiento depende en gran medida de su mantenimiento. Por eso, ofrecemos un servicio integral de mantenimiento de chiller que incluye:
                </p>
                <div className="p-8 rounded-xl" style={{ background: 'linear-gradient(to right, rgba(43, 155, 141, 0.1), rgba(107, 114, 128, 0.1))' }}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Mantenimiento preventivo</h3>
                      <p className="text-gray-600 text-sm">Limpieza de serpentines, revisión de presiones, niveles de refrigerante, calibración de sensores y verificación de flujo de agua.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Mantenimiento correctivo</h3>
                      <p className="text-gray-600 text-sm">Reparación o cambio de compresores, bombas, tarjetas electrónicas, válvulas, condensadores, entre otros.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Soporte técnico permanente</h3>
                      <p className="text-gray-600 text-sm">Asistencia remota o presencial en todo el territorio nacional, con técnicos certificados y repuestos originales.</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  Invertir en un chiller 12000 BTU no es solo comprar un equipo, es adquirir un sistema que debe mantenerse en perfecto estado para garantizar un rendimiento constante y seguro.
                </p>
              </div>

              {/* Aplicaciones */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Aplicaciones Frecuentes del Chiller 12000 BTU
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Aunque su capacidad es menor a la de grandes chillers industriales, este equipo tiene un amplio campo de acción gracias a su precisión térmica:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Enfriamiento de gabinetes eléctricos o de servidores pequeños</h3>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Estaciones de trabajo de alta computación</h3>
                  </div>
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Equipos láser de corte o dermatología</h3>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Máquinas odontológicas, rayos X portátiles o microscopios digitales</h3>
                  </div>
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Acondicionamiento de salas pequeñas con temperatura constante</h3>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  En todos estos escenarios, el chiller 12000 BTU asegura que los equipos funcionen en su rango térmico ideal, prolongando su vida útil y mejorando su eficiencia.
                </p>
              </div>

              {/* Por qué elegirnos */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Por Qué Elegirnos como Proveedor de Chiller?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Más de 10 años de experiencia en sistemas de refrigeración especializados</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Asesoría técnica profesional en todo el proceso de compra</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Instalación, puesta en marcha y soporte garantizado</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Servicio técnico en las principales ciudades del país</strong>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Venta de repuestos y contratos de mantenimiento</strong>
                    </div>
                  </li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed mt-6">
                  Estamos comprometidos con ofrecer equipos confiables, asesoría honesta y un acompañamiento técnico permanente. No importa si necesitas un chiller pequeño como el de 12000 BTU o sistemas de gran capacidad, tenemos la solución adecuada para ti.
                </p>
              </div>

              {/* Call to Action Final */}
              <div className="rounded-2xl p-8 text-center text-white" style={{ background: 'linear-gradient(to right, #2b9b8d, #1a7a6f)' }}>
                <h2 className="text-3xl font-bold mb-4">Cotiza Hoy Tu Chiller 12000 BTU con Soporte Especializado</h2>
                <p className="text-lg mb-8 opacity-90">
                  ¿Necesitas un sistema de chiller de enfriamiento compacto, eficiente y con respaldo técnico en Colombia? Contáctanos hoy mismo y recibe una asesoría gratuita para encontrar el chiller 12000 BTU ideal para tu proyecto. Ofrecemos venta directa, instalación profesional y mantenimiento a nivel nacional.
                </p>
                <p className="text-lg mb-8 opacity-90">
                  Completa nuestro formulario de contacto o comunícate con nuestros asesores. Estamos listos para ayudarte a implementar una solución de refrigeración segura, eficiente y hecha a tu medida.
                </p>
                <p className="text-lg mb-8 opacity-90">
                  La temperatura ideal para tu proceso o ambiente comienza con una elección inteligente. Nosotros te ayudamos a lograrlo.
                </p>
                <div className="flex justify-center">
                  <button 
                    className="bg-white text-[#2b9b8d] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                    onClick={() => {
                      const phoneNumber = '+573167137081';
                      const message = 'Hola, me gustaría solicitar una cotización para el Chiller 12000 BTU.';
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

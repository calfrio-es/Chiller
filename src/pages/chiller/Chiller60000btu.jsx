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
import chillerImage from "../../assets/img/chiller60000btu.jpg"

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
                Chiller 60000 BTU: Soluciones Compactas y Eficientes para Refrigeración Industrial y Comercial
              </h2>
              <img src={chillerImage} alt="Chiller 60000 BTU" className="w-full rounded-xl shadow-lg mb-8" />
              <p className="text-gray-700 text-lg leading-relaxed">
                En el mundo de la climatización y refrigeración, elegir el sistema adecuado marca una gran diferencia en términos de eficiencia energética, durabilidad y costos operativos. El chiller 60000 BTU (equivalente a chiller 5 toneladas o 5TR) es una solución intermedia ideal para proyectos comerciales, industriales ligeros y aplicaciones especializadas que requieren enfriamiento continuo sin sobredimensionar el sistema.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                En nuestra empresa, expertos en venta de chiller en todo el territorio nacional, ofrecemos opciones nuevas y chillers usados reacondicionados con garantía, perfectos para quienes buscan calidad, respaldo y economía.
              </p>
            </div>

            {/* ¿Qué es un Chiller 5TR? */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                ¿Qué es un Chiller 5TR y Para Qué Sirve?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Un chiller 5TR es un sistema de enfriamiento que ofrece una capacidad térmica de 5 toneladas de refrigeración, equivalente a aproximadamente 60,000 BTU/h. Estos equipos se utilizan para enfriar agua o líquidos especiales que luego son distribuidos a través de sistemas de tuberías para climatizar ambientes o enfriar procesos industriales.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Gracias a su tamaño y eficiencia, este tipo de chiller es ampliamente utilizado en:
              </p>
              <ul className="space-y-2 text-gray-700 text-lg">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  Clínicas y consultorios médicos
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  Salas de servidores y telecomunicaciones
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  Laboratorios químicos o farmacéuticos
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  Oficinas corporativas
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  Industrias de alimentos y bebidas en pequeña escala
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  Sistemas HVAC centralizados en locales comerciales
                </li>
              </ul>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                Este tipo de sistema permite mantener temperaturas estables, evitar el sobrecalentamiento de maquinaria o procesos, y reducir el consumo energético respecto a sistemas tradicionales.
              </p>
            </div>

            {/* Características Técnicas */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Wrench className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                Características Técnicas del Chiller 60000 BTU
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Los chillers de 60000 BTU están disponibles en versiones enfriadas por aire o por agua, dependiendo del entorno de operación y necesidades específicas del cliente. En general, estos equipos cuentan con:
              </p>
              <ul className="space-y-2 text-gray-700 text-lg">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  Compresores scroll o reciprocantes de alta eficiencia
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  Controles electrónicos con panel digital y diagnóstico de fallos
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  Condensadores de aletas de aluminio y tubos de cobre
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  Bomba hidráulica integrada (opcional)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  Intercambiador de calor tipo placas o carcasa y tubo
                </li>
              </ul>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                También están diseñados para operar con refrigerantes ecológicos como R-410A o R-134a, cumpliendo con normativas ambientales nacionales e internacionales.
              </p>
            </div>

            {/* Chiller Colombia: Opciones Nuevas y Usadas */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                Chiller Colombia: Opciones Nuevas y Usadas con Garantía
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                En el mercado de chiller Colombia, muchas empresas enfrentan el dilema de elegir entre un equipo nuevo o uno usado. Por eso, en nuestra empresa ofrecemos ambas opciones con total transparencia y respaldo.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Chiller Nuevo</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                      Equipos completamente nuevos con garantía de fábrica
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                      Alta eficiencia energética y tecnología de punta
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                      Perfecto para instalaciones que requieren confiabilidad a largo plazo
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                      Modelos de bajo ruido y alta durabilidad
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Chiller Usado</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                      Equipos reacondicionados por técnicos certificados
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                      Menor inversión inicial sin comprometer el rendimiento
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                      Pruebas funcionales antes de entrega
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                      Garantía limitada y soporte técnico local
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                Ya sea que estés buscando un chiller usado o una solución totalmente nueva, nuestro equipo te asesorará en función de tus necesidades térmicas, presupuesto y espacio disponible.
              </p>
            </div>

            {/* Aplicaciones Típicas */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Factory className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                Aplicaciones Típicas del Chiller 60000 BTU
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                La versatilidad de un chiller de 60000 BTU lo convierte en una excelente opción para instalaciones medianas donde se requiere una fuente constante de agua fría. Algunas aplicaciones comunes incluyen:
              </p>
              <ul className="space-y-2 text-gray-700 text-lg">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  Producción de hielo o enfriamiento de moldes en industrias ligeras
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  Enfriamiento de equipos de rayos X, resonancia o láser médico
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  Control de temperatura en salas blancas o cámaras climáticas
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  Sistemas de aire acondicionado central en espacios de 200–400 m²
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500 mt-1 flex-shrink-0" />
                  Soporte a procesos térmicos en fábricas artesanales
                </li>
              </ul>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                En todos estos casos, este chiller permite mantener un control preciso de la temperatura, mejorar la eficiencia de los procesos y proteger los activos técnicos de la empresa.
              </p>
            </div>

            {/* Mantenimiento y Servicio Técnico */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                Mantenimiento y Servicio Técnico Especializado
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Como parte de nuestra propuesta de valor, no solo vendemos chillers, sino que también brindamos un completo servicio postventa que incluye:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Mantenimiento Preventivo</h3>
                  <p className="text-gray-700">
                    Limpieza de serpentines, revisión de gas refrigerante, verificación de controles y sensores.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Mantenimiento Correctivo</h3>
                  <p className="text-gray-700">
                    Reparación o cambio de compresores, tarjetas electrónicas, bombas, válvulas, etc.
                  </p>
                </div>
                <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Instalación Profesional</h3>
                  <p className="text-gray-700">
                    Diseño de la red hidráulica, puesta en marcha y ajustes operativos según las condiciones del cliente.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Asesoría Técnica Personalizada</h3>
                  <p className="text-gray-700">
                    Evaluación térmica de cargas, selección del equipo ideal y diseño de la solución completa.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                Contamos con un equipo técnico certificado que opera en todo el país, brindando respuesta rápida, piezas originales y soporte técnico especializado para chiller Colombia en todas sus marcas y capacidades.
              </p>
            </div>

            {/* Por qué elegirnos */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Por Qué Elegirnos para tu Proyecto de Refrigeración?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Experiencia Comprobada</h3>
                  <p className="text-gray-700 mb-4">
                    Experiencia comprobada en instalación y mantenimiento de chillers industriales y comerciales.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Stock Disponible</h3>
                  <p className="text-gray-700">
                    Stock disponible de equipos nuevos y usados con entrega inmediata.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Cobertura Nacional</h3>
                  <p className="text-gray-700 mb-4">
                    Cobertura nacional en ciudades como Bogotá, Medellín, Cali, Barranquilla, Bucaramanga y más.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Asesoría Integral</h3>
                  <p className="text-gray-700">
                    Asesoría integral: desde la elección del equipo hasta la puesta en marcha.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mt-6">
                Nuestro compromiso es ayudarte a elegir el chiller de enfriamiento más adecuado, optimizar tu consumo energético y asegurar el funcionamiento ininterrumpido de tus procesos críticos.
              </p>
            </div>

            {/* Call to Action Final */}
            <div className="rounded-2xl p-8 text-center text-white" style={{ background: 'linear-gradient(to right, #2b9b8d, #1a7a6f)' }}>
              <h2 className="text-3xl font-bold mb-4">Cotiza Hoy tu Chiller 60000 BTU con los Mejores del Mercado</h2>
              <p className="text-xl mb-8 opacity-90">
                ¿Buscas un chiller 60000 BTU confiable, eficiente y al mejor precio? Nosotros tenemos la solución que necesitas, con opciones de financiamiento, garantía y soporte técnico especializado.
              </p>
              <p className="text-lg mb-8 opacity-90">
                Ya sea para compra directa, adquisición de chiller usado o renovación de equipos existentes, te ofrecemos un servicio completo, personalizado y con entrega a nivel nacional.
              </p>
              <div className="flex justify-center">
                <button 
                  className="bg-white text-[#2b9b8d] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                  onClick={() => {
                    const phoneNumber = '+573167137081';
                    const message = 'Hola, me gustaría solicitar una cotización para el Chiller Alpunto 60000 BTU.';
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
              <p className="text-lg mt-6 opacity-90">
                No dejes tu sistema de refrigeración en manos inexpertas. Confía en profesionales con trayectoria, equipos de calidad y servicio garantizado.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}



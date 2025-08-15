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
      <div className="min-h-screen bg-white pt-0">
        {/* Detailed Information Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Snowflake className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Venta, Mantenimiento y Reparación de Chiller 100 Toneladas en Colombia
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Ofrecemos equipos de refrigeración industrial de alta calidad, incluyendo chillers Carrier de 100
                  toneladas, ideales para aplicaciones comerciales e industriales que requieren sistemas de enfriamiento
                  confiables y eficientes.
                </p>
              </div>

              {/* Características Destacadas */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Características Destacadas
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Alta Eficiencia Energética</h3>
                    <p className="text-gray-700">
                      Diseñado para maximizar el rendimiento mientras minimiza el consumo energético, reduciendo
                      significativamente los costos operativos.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Tecnología Avanzada</h3>
                    <p className="text-gray-700">
                      Incorpora los últimos avances en tecnología de refrigeración para garantizar un funcionamiento
                      óptimo y duradero.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Construcción Robusta</h3>
                    <p className="text-gray-700">
                      Fabricado con materiales de alta calidad que aseguran durabilidad y resistencia en condiciones
                      industriales exigentes.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Fácil Mantenimiento</h3>
                    <p className="text-gray-700">
                      Diseño que facilita las tareas de mantenimiento preventivo y correctivo, minimizando los tiempos de
                      inactividad.
                    </p>
                  </div>
                </div>
              </div>

              {/* Beneficios del Mantenimiento */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Wrench className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Beneficios del Mantenimiento Profesional
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Extensión de la vida útil:</strong>
                      <span className="text-gray-700 ml-2">
                        El mantenimiento regular puede extender la vida útil del equipo hasta en un 50%.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Reducción de costos operativos:</strong>
                      <span className="text-gray-700 ml-2">
                        Mantiene la eficiencia energética óptima, reduciendo el consumo eléctrico.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Prevención de fallas:</strong>
                      <span className="text-gray-700 ml-2">
                        Identifica y corrige problemas antes de que se conviertan en fallas costosas.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Garantía de rendimiento:</strong>
                      <span className="text-gray-700 ml-2">
                        Asegura que el equipo opere a su capacidad máxima de enfriamiento.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Servicio Técnico */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Servicio Técnico Especializado
                </h2>
                <div className="p-8 rounded-xl" style={{ background: 'linear-gradient(to right, rgba(43, 155, 141, 0.1), rgba(107, 114, 128, 0.1))' }}>
                  <p className="text-gray-700 text-lg mb-6">
                    Nuestro equipo de técnicos certificados cuenta con amplia experiencia en sistemas de refrigeración
                    industrial. Ofrecemos servicios integrales que incluyen:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Clock className="w-12 h-12 mx-auto mb-3" style={{ color: '#2b9b8d' }} />
                      <h3 className="font-semibold text-gray-900 mb-2">Respuesta 24/7</h3>
                      <p className="text-gray-600 text-sm">Servicio de emergencia disponible las 24 horas</p>
                    </div>
                    <div className="text-center">
                      <Wrench className="w-12 h-12 mx-auto mb-3" style={{ color: '#2b9b8d' }} />
                      <h3 className="font-semibold text-gray-900 mb-2">Mantenimiento Preventivo</h3>
                      <p className="text-gray-600 text-sm">Programas personalizados de mantenimiento</p>
                    </div>
                    <div className="text-center">
                      <Shield className="w-12 h-12 mx-auto mb-3" style={{ color: '#2b9b8d' }} />
                      <h3 className="font-semibold text-gray-900 mb-2">Garantía Extendida</h3>
                      <p className="text-gray-600 text-sm">Cobertura completa en todos nuestros servicios</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Por qué elegirnos */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Por Qué Elegirnos?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Experiencia Comprobada</h3>
                    <p className="text-gray-700 mb-4">
                      Más de 15 años de experiencia en el sector de refrigeración industrial en Colombia, con cientos de
                      proyectos exitosos.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Repuestos Originales</h3>
                    <p className="text-gray-700">
                      Utilizamos únicamente repuestos originales Carrier, garantizando la calidad y compatibilidad
                      perfecta con su equipo.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Soporte Integral</h3>
                    <p className="text-gray-700 mb-4">
                      Desde la instalación hasta el mantenimiento continuo, ofrecemos soporte completo durante toda la
                      vida útil del equipo.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Precios Competitivos</h3>
                    <p className="text-gray-700">
                      Ofrecemos las mejores tarifas del mercado sin comprometer la calidad del servicio o los materiales
                      utilizados.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tipos de Chiller */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Factory className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Tipos de Chiller Disponibles
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Chiller Enfriado por Aire</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Ideal para instalaciones donde no se dispone de torre de enfriamiento.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Fácil instalación</li>
                      <li>• Menor mantenimiento</li>
                      <li>• Eficiente en climas templados</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Chiller Enfriado por Agua</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Mayor eficiencia energética para aplicaciones de gran capacidad.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Alta eficiencia</li>
                      <li>• Menor ruido</li>
                      <li>• Ideal para grandes cargas</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Chiller Modular</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Flexibilidad para adaptarse a diferentes necesidades de capacidad.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Escalabilidad</li>
                      <li>• Redundancia</li>
                      <li>• Fácil expansión</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Casos de Uso */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building2 className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Casos de Uso y Aplicaciones
                </h2>
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Industria Farmacéutica</h3>
                    <p className="text-gray-700">
                      Control preciso de temperatura para procesos de manufactura y almacenamiento de medicamentos,
                      cumpliendo con las normativas más estrictas de la industria.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Centros de Datos</h3>
                    <p className="text-gray-700">
                      Refrigeración continua y confiable para servidores y equipos de TI, garantizando el funcionamiento
                      óptimo de la infraestructura tecnológica.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Industria Alimentaria</h3>
                    <p className="text-gray-700">
                      Mantenimiento de la cadena de frío para conservación de alimentos, procesamiento y almacenamiento en
                      condiciones sanitarias óptimas.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Edificios Comerciales</h3>
                    <p className="text-gray-700">
                      Climatización eficiente para oficinas, centros comerciales y hospitales, proporcionando confort y
                      calidad del aire interior.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action Final */}
              <div className="rounded-2xl p-8 text-center text-white" style={{ background: 'linear-gradient(to right, #2b9b8d, #1a7a6f)' }}>
                <h2 className="text-3xl font-bold mb-4">¿Listo para Optimizar su Sistema de Refrigeración?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Contáctenos hoy mismo para una cotización personalizada y descubra cómo nuestros chillers pueden mejorar
                  la eficiencia de su operación.
                </p>
                <div className="flex justify-center">
                  <button 
                    className="bg-white text-[#2b9b8d] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                    onClick={() => {
                      const phoneNumber = '+573167137081';
                      const message = 'Hola, me gustaría solicitar una cotización para el Chiller Carrier 100 Toneladas.';
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
  
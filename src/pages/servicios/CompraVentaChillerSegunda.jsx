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
    DollarSign,
    RefreshCw,
    Truck,
  } from "lucide-react"
  
  export default function CompraVentaChillerSegunda() {
    return (
      <div className="min-h-screen bg-white pt-0">
        {/* Detailed Information Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <RefreshCw className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Compra y Venta de Chillers de Segunda Mano en Colombia
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Ofrecemos servicios especializados de compra y venta de chillers de segunda mano, 
                  proporcionando equipos de refrigeración industrial reacondicionados con garantía y 
                  a precios competitivos para aplicaciones comerciales e industriales.
                </p>
              </div>

              {/* Características Destacadas */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Características de Nuestros Chillers de Segunda Mano
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Reacondicionamiento Profesional</h3>
                    <p className="text-gray-700">
                      Todos nuestros equipos pasan por un proceso completo de reacondicionamiento 
                      que incluye limpieza, reparación y pruebas de funcionamiento.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Garantía Incluida</h3>
                    <p className="text-gray-700">
                      Ofrecemos garantía en todos nuestros equipos de segunda mano, 
                      asegurando su funcionamiento óptimo y confiabilidad.
                    </p>
                  </div>
                  <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)' }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Precios Competitivos</h3>
                    <p className="text-gray-700">
                      Acceso a equipos de alta calidad a una fracción del costo de equipos nuevos, 
                      sin comprometer el rendimiento.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Disponibilidad Inmediata</h3>
                    <p className="text-gray-700">
                      Inventario disponible para entrega rápida, ideal para proyectos 
                      que requieren implementación inmediata.
                    </p>
                  </div>
                </div>
              </div>

              {/* Beneficios del Servicio */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <DollarSign className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Beneficios de Nuestro Servicio
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Ahorro significativo de costos:</strong>
                      <span className="text-gray-700 ml-2">
                        Reduzca hasta un 60% en la inversión inicial comparado con equipos nuevos.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Evaluación profesional:</strong>
                      <span className="text-gray-700 ml-2">
                        Evaluamos su equipo actual y le ofrecemos el mejor precio del mercado.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Logística completa:</strong>
                      <span className="text-gray-700 ml-2">
                        Nos encargamos del desmontaje, transporte e instalación de su equipo.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Financiamiento disponible:</strong>
                      <span className="text-gray-700 ml-2">
                        Opciones de pago flexibles para facilitar su inversión.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Servicio de Compra */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Servicio de Compra de Chillers Usados
                </h2>
                <div className="p-8 rounded-xl" style={{ background: 'linear-gradient(to right, rgba(43, 155, 141, 0.1), rgba(107, 114, 128, 0.1))' }}>
                  <p className="text-gray-700 text-lg mb-6">
                    ¿Tiene un chiller que ya no necesita? Le ofrecemos el mejor precio del mercado 
                    por su equipo usado. Nuestro proceso incluye:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Clock className="w-12 h-12 mx-auto mb-3" style={{ color: '#2b9b8d' }} />
                      <h3 className="font-semibold text-gray-900 mb-2">Evaluación Gratuita</h3>
                      <p className="text-gray-600 text-sm">Inspección técnica sin costo</p>
                    </div>
                    <div className="text-center">
                      <DollarSign className="w-12 h-12 mx-auto mb-3" style={{ color: '#2b9b8d' }} />
                      <h3 className="font-semibold text-gray-900 mb-2">Mejor Precio</h3>
                      <p className="text-gray-600 text-sm">Cotización competitiva inmediata</p>
                    </div>
                    <div className="text-center">
                      <Truck className="w-12 h-12 mx-auto mb-3" style={{ color: '#2b9b8d' }} />
                      <h3 className="font-semibold text-gray-900 mb-2">Retiro Incluido</h3>
                      <p className="text-gray-600 text-sm">Desmontaje y transporte gratis</p>
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
                      Más de 15 años de experiencia en el mercado de equipos de refrigeración 
                      usados, con cientos de transacciones exitosas.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparencia Total</h3>
                    <p className="text-gray-700">
                      Evaluación honesta y transparente de su equipo, con reporte detallado 
                      del estado técnico y valor de mercado.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Soporte Integral</h3>
                    <p className="text-gray-700 mb-4">
                      Desde la evaluación inicial hasta la instalación del nuevo equipo, 
                      ofrecemos soporte completo en todo el proceso.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Garantía de Calidad</h3>
                    <p className="text-gray-700">
                      Todos nuestros equipos reacondicionados incluyen garantía y 
                      certificado de funcionamiento.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tipos de Equipos */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Factory className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Tipos de Equipos que Compramos y Vendemos
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Chillers Enfriados por Aire</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Equipos de 5 a 500 toneladas de refrigeración.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Carrier, Trane, York</li>
                      <li>• McQuay, Daikin</li>
                      <li>• Todas las marcas</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Chillers Enfriados por Agua</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Mayor eficiencia energética para grandes capacidades.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 50 a 1000 toneladas</li>
                      <li>• Centrífugos y tornillo</li>
                      <li>• Todas las marcas</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Equipos Modulares</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Flexibilidad para diferentes necesidades de capacidad.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Sistemas modulares</li>
                      <li>• Torres de enfriamiento</li>
                      <li>• Bombas y accesorios</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Proceso de Compra/Venta */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building2 className="w-8 h-8 mr-3" style={{ color: '#2b9b8d' }} />
                  Nuestro Proceso de Compra y Venta
                </h2>
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Contacto Inicial</h3>
                    <p className="text-gray-700">
                      Llámenos o envíenos un mensaje con los detalles de su equipo. 
                      Le responderemos en menos de 24 horas.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Evaluación Técnica</h3>
                    <p className="text-gray-700">
                      Nuestros técnicos especializados evalúan su equipo in situ, 
                      determinando su estado y valor de mercado.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Cotización</h3>
                    <p className="text-gray-700">
                      Recibe una cotización detallada con el mejor precio del mercado 
                      y las condiciones de la transacción.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Cierre y Retiro</h3>
                    <p className="text-gray-700">
                      Una vez aceptada la oferta, procedemos con el desmontaje, 
                      retiro y pago inmediato por su equipo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action Final */}
              <div className="rounded-2xl p-8 text-center text-white" style={{ background: 'linear-gradient(to right, #2b9b8d, #1a7a6f)' }}>
                <h2 className="text-3xl font-bold mb-4">¿Tiene un Chiller para Vender o Necesita Comprar?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Contáctenos hoy mismo para una evaluación gratuita y obtenga el mejor precio 
                  por su equipo o encuentre el chiller que necesita.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    className="bg-white text-[#2b9b8d] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                    onClick={() => {
                      const phoneNumber = '+573167137081';
                      const message = 'Hola, me gustaría vender mi chiller usado. ¿Podrían evaluarlo?';
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Vender mi Chiller
                  </button>
                  <button 
                    className="bg-white text-[#2b9b8d] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                    onClick={() => {
                      const phoneNumber = '+573167137081';
                      const message = 'Hola, me gustaría comprar un chiller de segunda mano. ¿Qué tienen disponible?';
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Comprar Chiller Usado
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    )
  }

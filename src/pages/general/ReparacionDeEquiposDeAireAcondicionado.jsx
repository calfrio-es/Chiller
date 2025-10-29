import React from 'react';
import heroImg from '../../assets/img/layout/hero1.png';

const ReparacionDeEquiposDeAireAcondicionado = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <section className="relative h-120 w-full overflow-hidden flex items-center justify-center pt-18">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="ReparacionDeEquiposDeAireAcondicionado" 
            className="w-full h-full object-cover"
          />
          {/* Overlay oscuro para mejorar legibilidad del texto */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Texto centrado */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
            ReparacionDeEquiposDeAireAcondicionado
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-6 drop-shadow-md">
            Reparación, mantenimiento e instalación de sistemas de aire central
          </p>
          
          {/* Botón de contacto */}
          <div className="flex justify-center mt-8">
            <button 
              className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-700 text-gray-700 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 group shadow-lg"
              onClick={() => {
                const phoneNumber = '+573167137081';
                const message = 'Hola, necesito información sobre ReparacionDeEquiposDeAireAcondicionado.';
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              <span className="mr-3">Contactar Ahora</span>
              <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <svg className="w-3 h-3 text-white transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Cards de información */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-2">
          <div className="w-full">
            <div className="grid md:grid-cols-2 gap-4 relative">
              
              {/* Card de Diagnóstico */}
              <div className="bg-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
               <div className="text-center mb-6">
                 <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                   <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                   </svg>
                 </div>
                 <h3 className="text-2xl font-bold text-gray-800 mb-4">Diagnóstico y Reparación</h3>
               </div>
               <div className="text-gray-700 space-y-4">
                 <p>
                   Atendemos fallas frecuentes y complejas en sistemas residenciales y comerciales:
                 </p>
                 <ul className="list-disc list-inside space-y-2 text-sm">
                   <li>Fugas de refrigerante y reparación de líneas</li>
                   <li>Cambio de compresor, ventiladores y motores</li>
                   <li>Reparación de tarjetas electrónicas y termostatos</li>
                   <li>Limpieza profunda de serpentines y drenajes</li>
                 </ul>
               </div>
             </div>

             {/* Card de Mantenimiento */}
             <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
               <div className="text-center mb-6">
                 <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                   <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                   </svg>
                 </div>
                 <h3 className="text-2xl font-bold text-gray-800 mb-4">Mantenimiento Preventivo</h3>
               </div>
               <div className="text-gray-700 space-y-4">
                 <p>Planes para maximizar eficiencia y vida útil.</p>
                 <ul className="list-disc list-inside space-y-2 text-sm">
                   <li>Limpieza de filtros y serpentines</li>
                   <li>Verificación eléctrica y protecciones</li>
                   <li>Medición de presiones, vacío y carga de gas</li>
                   <li>Calibración de termostatos y controladores</li>
                 </ul>
               </div>
             </div>

           </div>
         </div>
       </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto relative">
          <div className="relative z-10">
            <div className="mb-8"><h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">Reparación de Aire Acondicionado</h2></div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">Solucionamos baja capacidad de enfriamiento, ruidos, fugas, fallos eléctricos y más.</p>
              <p className="text-lg text-gray-700 leading-relaxed">Servicio con repuestos originales y pruebas de hermeticidad, vacío y carga de refrigerante.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Beneficios de contratarnos */}
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10">Beneficios de contratarnos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"><div className="w-12 h-12 mb-4 bg-blue-100 rounded-full flex items-center justify-center"><svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg></div><h3 className="text-lg font-semibold text-gray-800 mb-2">Diagnóstico preciso</h3><p className="text-sm text-gray-600">Instrumentación profesional.</p></div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"><div className="w-12 h-12 mb-4 bg-blue-100 rounded-full flex items-center justify-center"><svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div><h3 className="text-lg font-semibold text-gray-800 mb-2">Técnicos certificados</h3><p className="text-sm text-gray-600">Experiencia en múltiples marcas.</p></div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"><div className="w-12 h-12 mb-4 bg-blue-100 rounded-full flex items-center justify-center"><svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M8 7v10m8-10v10M5 21h14" /></svg></div><h3 className="text-lg font-semibold text-gray-800 mb-2">Repuestos originales</h3><p className="text-sm text-gray-600">Compatibilidad y durabilidad.</p></div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"><div className="w-12 h-12 mb-4 bg-blue-100 rounded-full flex items-center justify-center"><svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><h3 className="text-lg font-semibold text-gray-800 mb-2">Atención oportuna</h3><p className="text-sm text-gray-600">Respuesta rápida.</p></div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"><div className="w-12 h-12 mb-4 bg-blue-100 rounded-full flex items-center justify-center"><svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><h3 className="text-lg font-semibold text-gray-800 mb-2">Garantía por escrito</h3><p className="text-sm text-gray-600">Respaldo en reparaciones.</p></div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"><div className="w-12 h-12 mb-4 bg-blue-100 rounded-full flex items-center justify-center"><svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" /></svg></div><h3 className="text-lg font-semibold text-gray-800 mb-2">Eficiencia energética</h3><p className="text-sm text-gray-600">Ajustes para menor consumo.</p></div>
          </div>
        </div>
      </div>
     </div>
  );
};

export default ReparacionDeEquiposDeAireAcondicionado;




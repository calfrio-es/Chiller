import React from 'react';

const RepuestosOriginales = () => {
  const repuestos = [
    {
      nombre: "Compresor",
      descripcion: "Compresores originales de alta eficiencia",
    },
    {
      nombre: "Válvula Presostática",
      descripcion: "Control de presión preciso y confiable",
    },
    {
      nombre: "Condensador",
      descripcion: "Intercambiadores de calor de máximo rendimiento",
    },
  ];

  const marcas = ["Carrier", "Trane", "Daikin", "York", "McQuay"];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#2b9b8d' }}>
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Repuestos Originales</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
            Garantizamos la calidad con repuestos 100% originales de las mejores marcas
          </p>

          {/* Marcas */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {marcas.map((marca, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium rounded-full"
                style={{ backgroundColor: 'rgba(43, 155, 141, 0.1)', color: '#2b9b8d' }}
              >
                {marca}
              </span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Contenido de repuestos */}
          <div className="grid md:grid-cols-3 gap-6">
            {repuestos.map((repuesto, index) => (
              <div key={index} className="border-0 shadow-md bg-white rounded-lg p-6">
                <div className="text-center">
                  <div className="mx-auto p-3 bg-slate-100 rounded-full w-fit mb-3">
                    <svg className="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4 2V5c0-.55.45-1 1-1s1 .45 1 1v10h-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg text-slate-800 font-semibold mb-2">{repuesto.nombre}</h3>
                </div>
                <div className="text-slate-600 text-center">
                  <p>{repuesto.descripcion}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Imagen de repuestos */}
          <div>
            <img 
              src="/src/assets/img/layout/repuestos.png" 
              alt="Repuestos y componentes HVAC" 
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Garantía destacada */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span className="font-semibold">100% Repuestos Originales Garantizados</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepuestosOriginales;

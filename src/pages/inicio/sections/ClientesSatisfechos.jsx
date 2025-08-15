import React from 'react';

const ClientesSatisfechos = () => {
  const kpis = [
    {
      number: "12,670",
      description: "Clientes satisfechos"
    },
    {
      number: "9,800",
      description: "Ventas realizadas"
    },
    {
      number: "32,030",
      description: "Visitas técnicas"
    },
    {
      number: "14,400",
      description: "Reparaciones realizadas"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Patrón de puntos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-20 gap-4 opacity-30">
            {Array.from({ length: 200 }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-[#2b9b8d] rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {kpis.map((kpi, index) => (
            <div key={index} className="relative group">
              {/* Barra vertical de fondo */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#2b9b8d] to-[#1a7a6f] rounded-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              {/* Contenido */}
              <div className="relative z-10 text-center py-8 px-4">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                  {kpi.number}
                </div>
                <div className="text-lg text-white/90 font-medium">
                  {kpi.description}
                </div>
              </div>
              
              {/* Barra vertical destacada */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 bg-[#2b9b8d] h-full rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientesSatisfechos;

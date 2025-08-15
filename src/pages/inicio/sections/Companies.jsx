export default function Companies() {
    // Lista de logos de marcas de refrigeración
    const companies = [
      { name: "Carrier", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Logo_of_the_Carrier_Corporation.svg/1200px-Logo_of_the_Carrier_Corporation.svg.png" },
      { name: "Johnson Controls", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Johnson_Controls.svg/1200px-Johnson_Controls.svg.png" },
      { name: "Trane", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Trane_logo.svg/1200px-Trane_logo.svg.png" },
      { name: "Daikin", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/DAIKIN_logo.svg/2560px-DAIKIN_logo.svg.png" },
      { name: "York", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV2y5b0VWbrI0EiQTiB6QtddqH_XmbM1oBg98RhHwAHSrQjk8EuAwP9CrDHZtMYqpcXw&usqp=CAU" },
      { name: "LG", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/LG_logo_%282014%29.svg/250px-LG_logo_%282014%29.svg.png" },
    ];
  
    return (
      <section className="w-full py-6 md:py-10 overflow-hidden relative">
        <div className="container mx-auto px-4">
          {/* Título de la sección */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-wide text-center mb-3">
              Marcas <span style={{ color: '#2b9b8d' }}>Especializadas</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
              Nos especializamos en venta, mantenimiento y reparación de equipos de refrigeración de las mejores marcas del mercado.
            </p>
          </div>
  
          {/* Contenedor de carruseles */}
          <div className="space-y-8">
            {/* Fila superior - desplazamiento hacia la derecha */}
            <div className="relative">
              <div className="flex animate-scroll-right">
                {/* Primera serie de logos */}
                {companies.map((company, index) => (
                  <div key={`top-${index}`} className="flex-shrink-0 mx-6 group">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-gray-200">
                      <img
                        src={company.logo || "/placeholder.svg"}
                        alt={`${company.name} logo`}
                        title={company.name}
                        className="h-12 w-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                ))}
                {/* Segunda serie de logos para efecto infinito */}
                {companies.map((company, index) => (
                  <div key={`top-duplicate-${index}`} className="flex-shrink-0 mx-6 group">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-gray-200">
                      <img
                        src={company.logo || "/placeholder.svg"}
                        alt={`${company.name} logo`}
                        title={company.name}
                        className="h-12 w-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Fila inferior - desplazamiento hacia la izquierda */}
            <div className="relative">
              <div className="flex animate-scroll-left">
                {/* Primera serie de logos */}
                {companies
                  .slice()
                  .reverse()
                  .map((company, index) => (
                    <div key={`bottom-${index}`} className="flex-shrink-0 mx-6 group">
                      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-gray-200">
                        <img
                          src={company.logo || "/placeholder.svg"}
                          alt={`${company.name} logo`}
                          title={company.name}
                          className="h-12 w-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                        />
                      </div>
                    </div>
                  ))}
                {/* Segunda serie de logos para efecto infinito */}
                {companies
                  .slice()
                  .reverse()
                  .map((company, index) => (
                    <div key={`bottom-duplicate-${index}`} className="flex-shrink-0 mx-6 group">
                      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-gray-200">
                        <img
                          src={company.logo || "/placeholder.svg"}
                          alt={`${company.name} logo`}
                          title={company.name}
                          className="h-12 w-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
  
          {/* Gradientes laterales para efecto de desvanecimiento - Solo en pantallas medianas y grandes */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10 hidden md:block"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10 hidden md:block"></div>
        </div>
  
        <style>{`
          @keyframes scroll-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }
  
          @keyframes scroll-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
  
          .animate-scroll-right {
            animation: scroll-right 40s linear infinite;
          }
  
          .animate-scroll-left {
            animation: scroll-left 40s linear infinite;
          }
  
          /* Animación más rápida en pantallas pequeñas */
          @media (max-width: 768px) {
            .animate-scroll-right {
              animation: scroll-right 20s linear infinite;
            }
  
            .animate-scroll-left {
              animation: scroll-left 20s linear infinite;
            }
          }
  
          /* Pausa la animación al hacer hover */
          .animate-scroll-right:hover,
          .animate-scroll-left:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    );
  }
import React from 'react';
import logo from '../../assets/img/layout/logo-grande.svg';

const Footer = () => {
  return (
    <footer className="bg-slate-800 py-12 px-4 border-t-1 border-slate-700">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sección izquierda - Logo, descripción y redes sociales */}
          <div className="space-y-4 text-center lg:text-left">
            {/* Logo */}
            <div className="flex items-center justify-center lg:justify-start">
              <img src={logo} alt="Chiller Colombia Logo" className="w-86 h-20 object-contain" />
            </div>
            
            {/* Descripción */}
            <div className="text-gray-300 text-sm max-w-md mx-auto lg:mx-0">
              <p className="font-semibold text-white mb-2">Chiller Colombia | Soluciones Integrales en Enfriamiento Industrial</p>
              <p>Marcas premium, repuestos originales servicio técnico Colombia.</p>
            </div>
            
            {/* Redes sociales */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="#" className="text-white hover:text-cyan-400 transition-colors duration-300 no-underline">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-cyan-400 transition-colors duration-300 no-underline">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Sección derecha - Columnas de navegación */}
          <div className="space-y-6 sm:space-y-0">
            {/* Fila superior - Servicios y Cuartos Fríos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center sm:text-left">
              {/* Columna 1: Servicios */}
              <div>
                <h3 className="font-bold text-white mb-3 text-sm">Servicios</h3>
                <ul className="space-y-1">
                  <li className="text-gray-300 text-sm">Servicio Técnico Chiller</li>
                  <li className="text-gray-300 text-sm">Mantenimiento Chiller</li>
                  <li className="text-gray-300 text-sm">Reparación Chiller</li>
                  <li className="text-gray-300 text-sm">Instalación Chiller</li>
                  <li className="text-gray-300 text-sm">Diseño Chiller</li>
                </ul>
              </div>

              {/* Columna 2: Cuartos Fríos */}
              <div>
                <h3 className="font-bold text-white mb-3 text-sm">CUARTOS FRIOS</h3>
                <ul className="space-y-1">
                  <li className="text-gray-300 text-sm">CUARTOS FRIOS COLOMBIA</li>
                  <li className="text-gray-300 text-sm">CONGELACION</li>
                  <li className="text-gray-300 text-sm">CONSERVACION</li>
                  <li className="text-gray-300 text-sm">DISEÑO</li>
                </ul>
              </div>

              {/* Columna 3: Contacto */}
              <div className="col-span-2 sm:col-span-1 text-center sm:text-left">
                <h3 className="font-bold text-white mb-3 text-sm">Contáctanos</h3>
                <ul className="space-y-1">
                  <li className="flex items-center justify-center sm:justify-start">
                    <svg className="w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-white text-sm">+57 316 7137081</span>
                  </li>
                  <li>
                    <a 
                      href="https://wa.me/573167137081?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20productos%20y%20servicios." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-400 transition-colors duration-300 text-sm no-underline flex items-center justify-center sm:justify-start"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 



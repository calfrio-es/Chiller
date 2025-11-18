import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/layout/logo-grande-negro.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hideTimeout, setHideTimeout] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    chiller: false,
    cuartosFrios: false,
    aires: false,
    electrodomesticos: false,
    servicios: false
  });

  useEffect(() => {
    return () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [hideTimeout]);

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 300);
    }
  };

  const closeMobileMenu = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 300);
  };

  const handleDropdownEnter = (dropdown) => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Delay de 150ms antes de ocultar
    setHideTimeout(timeout);
  };

  const handleDropdownStay = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
  };

  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };



  return (
    <>
      {/* Top Contact Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center text-xs md:text-sm">
            <span className="font-semibold mb-1 md:mb-0 md:mr-4 text-center">Llámanos en las principales ciudades de Colombia!</span>
                          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                <span className="flex items-center">
                  <span className="mr-1">Medellín:</span>
                  <span>3012914925</span>
                </span>
                <span className="flex items-center">
                  <span className="mr-1">Bogotá:</span>
                  <span>3012914925</span>
                </span>
                <span className="flex items-center">
                  <span className="mr-1">Barranquilla:</span>
                  <span>3012914925</span>
                </span> 
                <span className="flex items-center">
                  <span className="mr-1">Bucaramanga:</span>
                  <span>3012914925</span>
                </span>
                <span className="flex items-center">
                  <span className="mr-1">Cali:</span>
                  <span>3012914925</span>
                </span>
                <span className="flex items-center">
                  <span className="mr-1">Pereira:</span>
                  <span>3012914925</span>
                </span>
                <span className="flex items-center">
                  <span className="mr-1">Fusagasugá:</span>
                  <span>3012914925</span>
                </span>
              </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="fixed top-18 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg h-16">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-16">
            {/* Navegación con dropdowns */}
            <nav className="hidden md:flex items-center space-x-8 ml-8">
              {/* Inicio - sin dropdown */}
              <Link 
                to="/inicio" 
                className="text-black hover:text-cyan-400 font-medium text-base transition-colors duration-300 no-underline"
              >
                Inicio
              </Link>

              {/* Chiller - con dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleDropdownEnter('chiller')}
                onMouseLeave={handleDropdownLeave}
              >
                <button 
                  className="text-black hover:text-blue-800 font-medium text-base transition-colors duration-300 no-underline flex items-center bg-transparent border-none cursor-pointer"
                >
                  Chiller
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'chiller' && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                    onMouseEnter={handleDropdownStay}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="p-4 grid grid-cols-1 gap-1 text-xs">
                      <Link to="/producto/chiller-100-toneladas" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Chiller 100 Toneladas</Link>
                      <Link to="/producto/chiller-7-5-toneladas" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Chiller 7.5 toneladas</Link>
                      <Link to="/producto/chiller-5-toneladas" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Chiller 5 tr</Link>
                      <Link to="/producto/chiller-5-tonelada" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Chiller 5 Toneladas</Link>
                      <Link to="/producto/chiller-60000-btu" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Chiller 60000 BTU</Link>
                      <Link to="/producto/chiller-3-toneladas" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Chiller 3 tr</Link>
                      <Link to="/producto/chiller-12000-btu" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Chiller 12000 BTU</Link>
                      <Link to="/producto/chiller-10-tr" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Chiller 10 TR</Link>
                      <Link to="/producto/chiller-9000-btu" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Chiller 9000 BTU</Link>
                      <Link to="/producto/chiller-20-tr" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Chiller 20 TR</Link>
                      <Link to="/producto/chiller-25-tr" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Chiller 25 TR</Link>
                      <Link to="/producto/chiller-cw-3000" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Chiller CW 3000</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Cuartos Fríos - con dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleDropdownEnter('cuartos-frios')}
                onMouseLeave={handleDropdownLeave}
              >
                <button 
                  className="text-black hover:text-blue-800 font-medium text-base transition-colors duration-300 no-underline flex items-center bg-transparent border-none cursor-pointer"
                >
                  Cuartos Fríos
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'cuartos-frios' && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                    onMouseEnter={handleDropdownStay}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="p-4 grid grid-cols-1 gap-1 text-xs">
                      <Link to="/congelacion" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Congelación</Link>
                      <Link to="/conservacion" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Conservación</Link>
                      <Link to="/diseno-cuartos" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Diseño Cuartos Fríos</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Aires - con dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleDropdownEnter('aires')}
                onMouseLeave={handleDropdownLeave}
              >
                <button 
                  className="text-black hover:text-blue-800 font-medium text-base transition-colors duration-300 no-underline flex items-center bg-transparent border-none cursor-pointer"
                >
                  Aires
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'aires' && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                    onMouseEnter={handleDropdownStay}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="p-4 grid grid-cols-1 gap-1 text-xs">
                      <Link to="/mini-split" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Mini Split</Link>
                      <Link to="/piso-techo" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Piso Techo</Link>
                      <Link to="/multi-split" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Multi Split</Link>
                      <Link to="/diseno-calculo" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Diseño y Cálculo Aire</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Electrodomésticos - con dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleDropdownEnter('electrodomesticos')}
                onMouseLeave={handleDropdownLeave}
              >
                <button 
                  className="text-black hover:text-blue-800 font-medium text-base transition-colors duration-300 no-underline flex items-center bg-transparent border-none cursor-pointer"
                >
                  Electrodomésticos
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'electrodomesticos' && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                    onMouseEnter={handleDropdownStay}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="p-4 grid grid-cols-1 gap-1 text-xs">
                      <Link to="/televisores" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Televisores</Link>
                      <Link to="/lavavajillas" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Lavavajillas</Link>
                      <Link to="/estufas" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Estufas</Link>
                      <Link to="/calentadores" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Calentadores</Link>
                      <Link to="/neveras" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Neveras</Link>
                      <Link to="/lavadoras" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Lavadoras</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Servicios - con dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleDropdownEnter('servicios')}
                onMouseLeave={handleDropdownLeave}
              >
                <button 
                  className="text-black hover:text-blue-800 font-medium text-base transition-colors duration-300 no-underline flex items-center bg-transparent border-none cursor-pointer"
                >
                  Servicios
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'servicios' && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                    onMouseEnter={handleDropdownStay}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="p-4 grid grid-cols-1 gap-1 text-xs">
                      <Link to="/servicio-tecnico-chiller" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Servicio Técnico Especializado</Link>
                      <Link to="/mantenimiento-chiller" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Mantenimiento Preventivo</Link>
                      <Link to="/reparacion-chiller" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Reparación Correctiva</Link>
                      <Link to="/instalacion-chiller" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Instalación Profesional</Link>
                      <Link to="/diseno-chiller" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 no-underline py-1">• Diseño Chiller</Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Logo - ahora a la derecha */}
            <div className="flex items-center">
              <Link to="/inicio" className="flex items-center">
                <img src={logo} alt="Chiller Colombia Logo" className="w-40 h-24 object-contain" />
              </Link>
            </div>

            {/* Icono de hamburguesa - solo el icono sin envolver */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-black hover:text-cyan-400 transition-colors duration-300 absolute right-4"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Sheet móvil */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay para cerrar al tocar fuera */}
          <div 
            className={`fixed inset-0 transition-opacity duration-300 z-40 md:hidden ${
              isAnimating ? 'bg-opacity-30' : 'bg-opacity-0'
            }`}
            onClick={closeMobileMenu}
          />
          
          {/* Sheet */}
          <div 
            className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden ${
              isAnimating ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
                         <div className="flex flex-col h-full">
               {/* Header del sheet - fijo */}
               <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
                 <div className="flex items-center">
                   <img src={logo} alt="Chiller Colombia Logo" className="w-32 h-20 object-contain" />
                 </div>
                 <button 
                   onClick={closeMobileMenu}
                   className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                 >
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                   </svg>
                 </button>
               </div>

               {/* Navegación móvil - con scroll */}
               <nav className="flex-1 overflow-y-auto p-6">
                 <div className="space-y-4">
                   <Link 
                     to="/inicio" 
                     onClick={closeMobileMenu}
                     className="block text-lg font-medium text-gray-800 hover:text-cyan-400 transition-colors duration-300"
                   >
                     Inicio
                   </Link>
                   
                   {/* Chiller - Acordeón */}
                   <div>
                     <button 
                       onClick={() => toggleMobileDropdown('chiller')}
                       className="flex items-center justify-between w-full text-lg font-medium text-gray-800 hover:text-cyan-400 transition-colors duration-300"
                     >
                       Chiller
                       <svg 
                         className={`w-5 h-5 transition-transform duration-300 ${mobileDropdowns.chiller ? 'rotate-180' : ''}`} 
                         fill="none" 
                         stroke="currentColor" 
                         viewBox="0 0 24 24"
                       >
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                       </svg>
                     </button>
                     {mobileDropdowns.chiller && (
                       <div className="mt-3 ml-4 space-y-2">
                         <Link to="/producto/chiller-100-toneladas" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Chiller 100 Toneladas</Link>
                         <Link to="/producto/chiller-7-5-toneladas" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Chiller 7.5 toneladas</Link>
                         <Link to="/producto/chiller-5-toneladas" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Chiller 5 tr</Link>
                         <Link to="/producto/chiller-5-tonelada" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Chiller 5 Toneladas</Link>
                         <Link to="/producto/chiller-60000-btu" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Chiller 60000 BTU</Link>
                         <Link to="/producto/chiller-3-toneladas" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Chiller 3 tr</Link>
                         <Link to="/producto/chiller-12000-btu" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Chiller 12000 BTU</Link>
                         <Link to="/producto/chiller-10-tr" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Chiller 10 TR</Link>
                         <Link to="/producto/chiller-9000-btu" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Chiller 9000 BTU</Link>
                         <Link to="/producto/chiller-20-tr" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Chiller 20 TR</Link>
                         <Link to="/producto/chiller-25-tr" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Chiller 25 TR</Link>
                         <Link to="/producto/chiller-cw-3000" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Chiller CW 3000</Link>
                       </div>
                     )}
                   </div>

                   {/* Cuartos Fríos - Acordeón */}
                   <div>
                     <button 
                       onClick={() => toggleMobileDropdown('cuartosFrios')}
                       className="flex items-center justify-between w-full text-lg font-medium text-gray-800 hover:text-cyan-400 transition-colors duration-300"
                     >
                       Cuartos Fríos
                       <svg 
                         className={`w-5 h-5 transition-transform duration-300 ${mobileDropdowns.cuartosFrios ? 'rotate-180' : ''}`} 
                         fill="none" 
                         stroke="currentColor" 
                         viewBox="0 0 24 24"
                       >
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                       </svg>
                     </button>
                     {mobileDropdowns.cuartosFrios && (
                       <div className="mt-3 ml-4 space-y-2">
                         <Link to="/congelacion" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Congelación</Link>
                         <Link to="/conservacion" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Conservación</Link>
                         <Link to="/diseno-cuartos" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Diseño Cuartos Fríos</Link>
                       </div>
                     )}
                   </div>

                   {/* Aires - Acordeón */}
                   <div>
                     <button 
                       onClick={() => toggleMobileDropdown('aires')}
                       className="flex items-center justify-between w-full text-lg font-medium text-gray-800 hover:text-cyan-400 transition-colors duration-300"
                     >
                       Aires
                       <svg 
                         className={`w-5 h-5 transition-transform duration-300 ${mobileDropdowns.aires ? 'rotate-180' : ''}`} 
                         fill="none" 
                         stroke="currentColor" 
                         viewBox="0 0 24 24"
                       >
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                       </svg>
                     </button>
                     {mobileDropdowns.aires && (
                       <div className="mt-3 ml-4 space-y-2">
                         <Link to="/mini-split" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Mini Split</Link>
                         <Link to="/piso-techo" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Piso Techo</Link>
                         <Link to="/multi-split" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Multi Split</Link>
                         <Link to="/diseno-calculo" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Diseño y Cálculo Aire</Link>
                       </div>
                     )}
                   </div>

                   {/* Electrodomésticos - Acordeón */}
                   <div>
                     <button 
                       onClick={() => toggleMobileDropdown('electrodomesticos')}
                       className="flex items-center justify-between w-full text-lg font-medium text-gray-800 hover:text-cyan-400 transition-colors duration-300"
                     >
                       Electrodomésticos
                       <svg 
                         className={`w-5 h-5 transition-transform duration-300 ${mobileDropdowns.electrodomesticos ? 'rotate-180' : ''}`} 
                         fill="none" 
                         stroke="currentColor" 
                         viewBox="0 0 24 24"
                       >
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                       </svg>
                     </button>
                     {mobileDropdowns.electrodomesticos && (
                       <div className="mt-3 ml-4 space-y-2">
                         <Link to="/televisores" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Televisores</Link>
                         <Link to="/lavavajillas" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Lavavajillas</Link>
                         <Link to="/estufas" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Estufas</Link>
                         <Link to="/calentadores" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Calentadores</Link>
                         <Link to="/neveras" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Neveras</Link>
                         <Link to="/lavadoras" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Lavadoras</Link>
                       </div>
                     )}
                   </div>

                   {/* Servicios - Acordeón */}
                   <div>
                     <button 
                       onClick={() => toggleMobileDropdown('servicios')}
                       className="flex items-center justify-between w-full text-lg font-medium text-gray-800 hover:text-cyan-400 transition-colors duration-300"
                     >
                       Servicios
                       <svg 
                         className={`w-5 h-5 transition-transform duration-300 ${mobileDropdowns.servicios ? 'rotate-180' : ''}`} 
                         fill="none" 
                         stroke="currentColor" 
                         viewBox="0 0 24 24"
                       >
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                       </svg>
                     </button>
                     {mobileDropdowns.servicios && (
                       <div className="mt-3 ml-4 space-y-2">
                         <Link to="/servicio-tecnico-chiller" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Servicio Técnico Especializado</Link>
                         <Link to="/mantenimiento-chiller" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Mantenimiento Preventivo</Link>
                         <Link to="/reparacion-chiller" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Reparación Correctiva</Link>
                         <Link to="/instalacion-chiller" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Instalación Profesional</Link>
                         <Link to="/diseno-chiller" onClick={closeMobileMenu} className="block text-sm text-gray-600 hover:text-cyan-400 transition-colors duration-300">• Diseño Chiller</Link>
                       </div>
                     )}
                   </div>
                 </div>
               </nav>


             </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;

import React from 'react';
import HeroInicio from './sections/HeroInicio';
import Companies from './sections/Companies';
import TecnicosDomicilio from './sections/TecnicosDomicilio';
import RepuestosOriginales from './sections/RepuestosOriginales';
import CompraVenta from './sections/CompraVenta';
import NuestrosServicios from './sections/NuestrosServicios';
import ClientesSatisfechos from './sections/ClientesSatisfechos';
import ContenidoExtenso from './sections/ContenidoExtenso';

const Inicio = () => {
  return (
    <main>
      <HeroInicio />
      <CompraVenta />
      <TecnicosDomicilio />
      <NuestrosServicios />
      <ClientesSatisfechos />
      <RepuestosOriginales />
      <Companies />
      <ContenidoExtenso />
    </main>
  );
};

export default Inicio;

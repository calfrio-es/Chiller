import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/layout/Header'
import ButtonWhatsap from './components/layout/ButtonWhatsap'
import ScrollToTop from './components/ScrollToTop'
import Inicio from './pages/inicio/inicio'
import ServicioTecnicoChiller from './pages/servicios/ServicioTecnicoChiller'
import ServicioTecnicoLGFusagasuga from './pages/servicios/ServicioTecnicoLGFusagasuga'
import ServicioTecnicoHacebMedellin from './pages/servicios/ServicioTecnicoHacebMedellin'
import ServicioTecnicoLGBucaramanga from './pages/servicios/ServicioTecnicoLGBucaramanga'
import MantenimientoDeEstufasBarranquilla from './pages/servicios/MantenimientoDeEstufasBarranquilla'
import MantenimientoLavadorasWhirlpoolBarranquilla from './pages/servicios/MantenimientoLavadorasWhirlpoolBarranquilla'
import MantenimientoAiresAcondicionados from './pages/servicios/MantenimientoAiresAcondicionados'
import AlquilerChiller from './pages/servicios/AlquilerChiller'
import MantenimientoLavadorasBucaramanga from './pages/servicios/MantenimientoLavadorasBucaramanga'
import CompraVentaChillerSegunda from './pages/servicios/CompraVentaChillerSegunda'
import ServicioTecnicoMabeMedellin from './pages/servicios/ServicioTecnicoMabeMedellin'
import MantenimientoEstufasBucaramanga from './pages/servicios/MantenimientoEstufasBucaramanga'
import ServicioTecnicoSamsungBarranquilla from './pages/servicios/ServicioTecnicoSamsungBarranquilla'
import ServicioTecnicoWhirlpoolFusagasuga from './pages/servicios/ServicioTecnicoWhirlpoolFusagasuga'
import ReparacionNeverasWhirlpoolBarranquilla from './pages/servicios/ReparacionNeverasWhirlpoolBarranquilla'
import ServicioTecnicoSamsungBucaramanga from './pages/servicios/ServicioTecnicoSamsungBucaramanga'
import AlquilerChillerBogota from './pages/servicios/AlquilerChillerBogota'
import MantenimientoTecnicoChiller from './pages/servicios/MantenimientoTecnicoChiller'
import ReparacionChiller from './pages/servicios/ReparacionChiller'
import InstalacionChiller from './pages/servicios/InstalacionChiller'
import DisenoChiller from './pages/servicios/DiseñoChiller'
import Chiller100Toneladas from './pages/chiller/Chiller100Toneladas'
import Chiller75toneladas from './pages/chiller/Chiller7-5toneladas'
import Chiller5t from './pages/chiller/Chiller5t'
import Chiller60000btu from './pages/chiller/Chiller60000btu'
import Chiller5toneladas from './pages/chiller/Chiller5toneladas'
import Chiller3tr from './pages/chiller/Chiller3tr'
import Chiller1200Btu from './pages/chiller/Chiller1200Btu'
import Chiller10tr from './pages/chiller/Chiller10tr'
import Chiller9000Btu from './pages/chiller/Chiller9000Btu'
import Chiller20 from './pages/chiller/Chiller20'
import Chiller25 from './pages/chiller/Chiller25'
import ChillerCw3000 from './pages/chiller/ChillerCw3000'
import PrincipalChiller from './pages/chiller/PrincipalChiller'
import ProductoEspecifico from './pages/chiller/ProductoEspecifico'
import Congelacion from './pages/cuartosfrios/Congelacion'
import Conservacion from './pages/cuartosfrios/Conservacion'
import Diseño from './pages/cuartosfrios/Diseño'
import MiniSplit from './pages/aires/MiniSplit'
import MultiSplit from './pages/aires/MultiSplit'
import DiseñoCalculo from './pages/aires/DiseñoCalculo'
import PisoTechoSplit from './pages/aires/PisoTechoSplit'
import Televisores from './pages/electrodomesticos/Televisores'
import Neveras from './pages/electrodomesticos/Neveras'
import Lavavajillas from './pages/electrodomesticos/Lavavajillas'
import Estufas from './pages/electrodomesticos/Estufas'
import Calentadores from './pages/electrodomesticos/Calentadores'
import Lavadoras from './pages/electrodomesticos/Lavadoras'
import Footer from './components/layout/Footer'
import AireAcondicionadoCentralReparacion from './pages/general/AireAcondicionadoCentralReparacion'
import AireAcondicionadoDeVentanaReparacion from './pages/general/AireAcondicionadoDeVentanaReparacion'
import AireAcondicionadoReparacionYMantenimiento from './pages/general/AireAcondicionadoReparacionYMantenimiento'
import AiresAcondicionadosReparacionYMantenimiento from './pages/general/AiresAcondicionadosReparacionYMantenimiento'
import AiresAcondicionadosArreglos from './pages/general/AiresAcondicionadosArreglos'
import ArreglarAireAcondicionado from './pages/general/ArreglarAireAcondicionado'
import ArreglarAireAcondicionadoPortatil from './pages/general/ArreglarAireAcondicionadoPortatil'
import ArreglarElAireAcondicionado from './pages/general/ArreglarElAireAcondicionado'
import ArreglarUnAireAcondicionado from './pages/general/ArreglarUnAireAcondicionado'
import ArreglarAireAcondicionadoCasa from './pages/general/ArreglarAireAcondicionadoCasa'
import ArregloAireAcondicionado from './pages/general/ArregloAireAcondicionado'
import ArregloAireAcondicionadoCasa from './pages/general/ArregloAireAcondicionadoCasa'
import ArregloCompresorAireAcondicionado from './pages/general/ArregloCompresorAireAcondicionado'
import ArregloDeAireAcondicionado from './pages/general/ArregloDeAireAcondicionado'
import ArregloDeAireAcondicionadoDeCasa from './pages/general/ArregloDeAireAcondicionadoDeCasa'
import ArregloDeAiresAcondicionadosDeAutos from './pages/general/ArregloDeAiresAcondicionadosDeAutos'
import ChillerGeneral from './pages/general/Chiller'
import Chiller5ToneladasPrecio from './pages/general/Chiller5ToneladasPrecio'
import Chiller5TrGeneral from './pages/general/Chiller5Tr'
import ChillerColombia from './pages/general/ChillerColombia'
import ReparacionAireAcondicionadoSamsung from './pages/general/ReparacionAireAcondicionadoSamsung'
import ReparacionAireAcondicionados from './pages/general/ReparacionAireAcondicionados'
import ReparacionAireAcondicionadoVentana from './pages/general/ReparacionAireAcondicionadoVentana'
import ReparacionChillerGeneral from './pages/general/ReparacionChiller'
import ReparacionDeAireAcondicionado from './pages/general/ReparacionDeAireAcondicionado'
import ReparacionAireAcondicionadoSplitGeneral from './pages/general/ReparacionAireAcondicionadoSplit'
import RepararFugaDeGasAireAcondicionado from './pages/general/RepararFugaDeGasAireAcondicionado'
import RepararFugaEnAireAcondicionado from './pages/general/RepararFugaEnAireAcondicionado'
import ChillerEnfriadoPorAire from './pages/general/ChillerEnfriadoPorAire'
import ChillerMantenimiento from './pages/general/ChillerMantenimiento'
import CuartoFrio from './pages/general/CuartoFrio'
import CuartoFrioPrecio from './pages/general/CuartoFrioPrecio'
import CuartosFriosMantenimiento from './pages/general/CuartosFriosMantenimiento'
import EmpresasDeReparacionDeAireAcondicionado from './pages/general/EmpresasDeReparacionDeAireAcondicionado'
import EquipoChiller from './pages/general/EquipoChiller'
import EspecialistaAireAcondicionado from './pages/general/EspecialistaAireAcondicionado'
import EspecialistasAireAcondicionado from './pages/general/EspecialistasAireAcondicionado'
import InstalacionDeChillerGeneral from './pages/general/InstalacionDeChiller'
import InstalacionDeChillerEnfriadoPorAgua from './pages/general/InstalacionDeChillerEnfriadoPorAgua'
import InstalacionDeCuartosFrios from './pages/general/InstalacionDeCuartosFrios'
import InstalacionYReparacionDeAireAcondicionado from './pages/general/InstalacionYReparacionDeAireAcondicionado'
import MantenimientoAChillers from './pages/general/MantenimientoAChillers'
import LaserChiller from './pages/general/LaserChiller'
import MantenimientoAChillerEnfriadoPorAgua from './pages/general/MantenimientoAChillerEnfriadoPorAgua'
import MantenimientoAEquiposDeAireAcondicionadoYRefrigeracion from './pages/general/MantenimientoAEquiposDeAireAcondicionadoYRefrigeracion'
import MantenimientoASistemasDeRefrigeracion from './pages/general/MantenimientoASistemasDeRefrigeracion'
import MantenimientoChiller from './pages/general/MantenimientoChiller'
import MantenimientoChillers from './pages/general/MantenimientoChillers'
import MantenimientoCorrectivoDelSistemaDeRefrigeracion from './pages/general/MantenimientoCorrectivoDelSistemaDeRefrigeracion'
import MantenimientoCuartosFrios from './pages/general/MantenimientoCuartosFrios'
import MantenimientoDeAireAcondicionadoYRefrigeracion from './pages/general/MantenimientoDeAireAcondicionadoYRefrigeracion'
import MantenimientoDeCavasDeRefrigeracion from './pages/general/MantenimientoDeCavasDeRefrigeracion'
import MantenimientoDeChiller from './pages/general/MantenimientoDeChiller'
import MantenimientoDeCuartosFrios from './pages/general/MantenimientoDeCuartosFrios'
import MantenimientoDeEquiposDeRefrigeracion from './pages/general/MantenimientoDeEquiposDeRefrigeracion'
import MantenimientoDeEquiposDeRefrigeracionVentilacionYClimatizacion from './pages/general/MantenimientoDeEquiposDeRefrigeracionVentilacionYClimatizacion'
import MantenimientoDeRefrigeracion from './pages/general/MantenimientoDeRefrigeracion'
import MantenimientoDeRefrigeraciones from './pages/general/MantenimientoDeRefrigeraciones'
import MantenimientoDeRefrigeracionVentilacionYClimatizacion from './pages/general/MantenimientoDeRefrigeracionVentilacionYClimatizacion'
import MantenimientoDeRefrigeracionYAireAcondicionado from './pages/general/MantenimientoDeRefrigeracionYAireAcondicionado'
import MantenimientoDeSistemasDeAireAcondicionadoYRefrigeracion from './pages/general/MantenimientoDeSistemasDeAireAcondicionadoYRefrigeracion'
import MantenimientoDeUnaTorreDeEnfriamiento from './pages/general/MantenimientoDeUnaTorreDeEnfriamiento'
import MantenimientoPreventivoAChiller from './pages/general/MantenimientoPreventivoAChiller'
import MantenimientoPreventivoAEquiposDeRefrigeracionIndustrial from './pages/general/MantenimientoPreventivoAEquiposDeRefrigeracionIndustrial'
import MantenimientoPreventivoASistemasDeRefrigeracion from './pages/general/MantenimientoPreventivoASistemasDeRefrigeracion'
import MantenimientoPreventivoChiller from './pages/general/MantenimientoPreventivoChiller'
import MantenimientoPreventivoDelSistemaDeRefrigeracion from './pages/general/MantenimientoPreventivoDelSistemaDeRefrigeracion'
import MantenimientoPreventivoDeUnChiller from './pages/general/MantenimientoPreventivoDeUnChiller'
import MantenimientoPreventivoEnRefrigeracion from './pages/general/MantenimientoPreventivoEnRefrigeracion'
import MantenimientoPreventivoEnSistemasDeRefrigeracion from './pages/general/MantenimientoPreventivoEnSistemasDeRefrigeracion'
import MantenimientoPreventivoRefrigeracion from './pages/general/MantenimientoPreventivoRefrigeracion'
import MantenimientoPreventivoSistemaDeRefrigeracion from './pages/general/MantenimientoPreventivoSistemaDeRefrigeracion'
import MantenimientoRefrigeracion from './pages/general/MantenimientoRefrigeracion'
import MantenimientoRefrigeración from './pages/general/MantenimientoRefrigeración'
import MantenimientoRefrigeracionIndustrial from './pages/general/MantenimientoRefrigeracionIndustrial'
import MantenimientoYReparacionAireAcondicionado from './pages/general/MantenimientoYReparacionAireAcondicionado'
import MantenimientoRefrigeracionYAireAcondicionado from './pages/general/MantenimientoRefrigeracionYAireAcondicionado'
import MantenimientoYReparacionDeAiresAcondicionados from './pages/general/MantenimientoYReparacionDeAiresAcondicionados'
import ParaArreglarAireAcondicionado from './pages/general/ParaArreglarAireAcondicionado'
import MantenimientoYReparacionDeMinisplit from './pages/general/MantenimientoYReparacionDeMinisplit'
import MiniChiller from './pages/general/MiniChiller'
import RefrigeracionIndustrial from './pages/general/RefrigeracionIndustrial'
import RefrigeracionYMantenimiento from './pages/general/RefrigeracionYMantenimiento'
import ReparacionAire from './pages/general/ReparacionAire'
import ReparacionAireAcondicionado from './pages/general/ReparacionAireAcondicionado'
import ReparacionAireAcondicionadoAutomotriz from './pages/general/ReparacionAireAcondicionadoAutomotriz'
import ReparacionAireAcondicionadoCasa from './pages/general/ReparacionAireAcondicionadoCasa'
import ReparacionAireAcondicionadoCentral from './pages/general/ReparacionAireAcondicionadoCentral'
import ReparacionAireAcondicionadoCercaDeMi from './pages/general/ReparacionAireAcondicionadoCercaDeMi'
import ReparacionAireAcondicionadoComercial from './pages/general/ReparacionAireAcondicionadoComercial'
import ReparacionAireAcondicionadoDeVentana from './pages/general/ReparacionAireAcondicionadoDeVentana'
import ReparacionAireAcondicionadoIndustrial from './pages/general/ReparacionAireAcondicionadoIndustrial'
import ReparacionAireAcondicionadoInverter from './pages/general/ReparacionAireAcondicionadoInverter'
import ReparacionAireAcondicionadoMiniSplit from './pages/general/ReparacionAireAcondicionadoMiniSplit'
import ReparacionAireAcondicionadoPortatil from './pages/general/ReparacionAireAcondicionadoPortatil'
import ReparacionAireAcondicionadoResidencial from './pages/general/ReparacionAireAcondicionadoResidencial'
import ReparacionDeAireAcondicionadoADomicilio from './pages/general/ReparacionDeAireAcondicionadoADomicilio'
import ReparacionDeAireAcondicionadoCercaDeMi from './pages/general/ReparacionDeAireAcondicionadoCercaDeMi'
import ReparacionDeAireAcondicionadoMiniSplit from './pages/general/ReparacionDeAireAcondicionadoMiniSplit'
import ReparacionDeAireAcondicionadoParaCasa from './pages/general/ReparacionDeAireAcondicionadoParaCasa'
import ReparacionDeAireAcondicionadoPortatil from './pages/general/ReparacionDeAireAcondicionadoPortatil'
import ReparacionDeAireAcondicionadoPrecio from './pages/general/ReparacionDeAireAcondicionadoPrecio'
import ReparacionDeAireAcondicionadoSplit from './pages/general/ReparacionDeAireAcondicionadoSplit'
import ReparacionDeAireAcondicionadoVentana from './pages/general/ReparacionDeAireAcondicionadoVentana'
import ReparacionDeAireAcondicionadoYCalefaccion from './pages/general/ReparacionDeAireAcondicionadoYCalefaccion'
import ReparacionDeAireCentral from './pages/general/ReparacionDeAireCentral'
import ReparacionDeAireDeVentana from './pages/general/ReparacionDeAireDeVentana'
import ReparacionDeAires from './pages/general/ReparacionDeAires'
import ReparacionDeAiresAcondicionadosDeCasa from './pages/general/ReparacionDeAiresAcondicionadosDeCasa'
import ReparacionDeAiresAcondicionadosInverter from './pages/general/ReparacionDeAiresAcondicionadosInverter'
import ReparacionDeChillers from './pages/general/ReparacionDeChillers'
import ReparacionDeEnfriadoresDeAire from './pages/general/ReparacionDeEnfriadoresDeAire'
import ReparacionDeEquiposDeAireAcondicionado from './pages/general/ReparacionDeEquiposDeAireAcondicionado'
import ReparacionDeFugaDeGasRefrigerante from './pages/general/ReparacionDeFugaDeGasRefrigerante'
import ReparacionDeMinisplit from './pages/general/ReparacionDeMinisplit'
import ReparacionDeMotorDeAireAcondicionado from './pages/general/ReparacionDeMotorDeAireAcondicionado'
import ReparacionDePlacasAireAcondicionado from './pages/general/ReparacionDePlacasAireAcondicionado'
import ReparacionDeSplit from './pages/general/ReparacionDeSplit'
import ReparacionEvaporadorAireAcondicionado from './pages/general/ReparacionEvaporadorAireAcondicionado'
import ReparacionManguerasAireAcondicionado from './pages/general/ReparacionManguerasAireAcondicionado'
import RepararAireAcondicionadoCasa from './pages/general/RepararAireAcondicionadoCasa'
import RepararAireAcondicionadoSplit from './pages/general/RepararAireAcondicionadoSplit'
import RepararBobinaCompresorAireAcondicionado from './pages/general/RepararBobinaCompresorAireAcondicionado'
import RepararFugaAireAcondicionado from './pages/general/RepararFugaAireAcondicionado'
import RepararFugaGasAireAcondicionado from './pages/general/RepararFugaGasAireAcondicionado'
import RepararMangueraDeAireAcondicionado from './pages/general/RepararMangueraDeAireAcondicionado'
import RepararMiniSplit from './pages/general/RepararMiniSplit'
import ServicioDeMantenimientoDeRefrigeracion from './pages/general/ServicioDeMantenimientoDeRefrigeracion'
import ServiceDeAiresAcondicionados from './pages/general/ServiceDeAiresAcondicionados'
import ServicioDeMantenimientoAChillers from './pages/general/ServicioDeMantenimientoAChillers'
import ServicioDeReparacionDeAireAcondicionado from './pages/general/ServicioDeReparacionDeAireAcondicionado'
import SplitAireAcondicionado from './pages/general/SplitAireAcondicionado'
import ServicioDeReparacionDeAiresAcondicionados from './pages/general/ServicioDeReparacionDeAiresAcondicionados'
import ServicioReparacionAireAcondicionado from './pages/general/ServicioReparacionAireAcondicionado'
import TecnicoAire from './pages/general/TecnicoAire'
import TecnicoAireAcondicionado from './pages/general/TecnicoAireAcondicionado'
import TecnicoDeAire from './pages/general/TecnicoDeAire'
import TecnicoAireAcondicionadoCercaDeMiGeneral from './pages/general/TecnicoAireAcondicionadoCercaDeMi'
import TecnicoDeAireAcondicionadoGeneral from './pages/general/TecnicoDeAireAcondicionado'
import TecnicoDeAireAcondicionadoCercaDeMiGeneral from './pages/general/TecnicoDeAireAcondicionadoCercaDeMi'
import TecnicoEnAire from './pages/general/TecnicoEnAire'
import TecnicoEnAireAcondicionadoSplit from './pages/general/TecnicoEnAireAcondicionadoSplit'
import TecnicoEnMantenimientoDeAiresAcondicionados from './pages/general/TecnicoEnMantenimientoDeAiresAcondicionados'
import TecnicoEnMantenimientoDeEquiposDeRefrigeracionVentilacionYClimatizacion from './pages/general/TecnicoEnMantenimientoDeEquiposDeRefrigeracionVentilacionYClimatizacion'
import TecnicoEnMantenimientoDeRefrigeracionYClimatizacion from './pages/general/TecnicoEnMantenimientoDeRefrigeracionYClimatizacion'
import TecnicoEnRefrigeracionComercial from './pages/general/TecnicoEnRefrigeracionComercial'
import TecnicoEnRefrigeracionIndustrial from './pages/general/TecnicoEnRefrigeracionIndustrial'
import TecnicoEnRefrigeracionSena from './pages/general/TecnicoEnRefrigeracionSena'
import TecnicoRefrigeracionSena from './pages/general/TecnicoRefrigeracionSena'
import TecnicoRefrigeracionYClimatizacion from './pages/general/TecnicoRefrigeracionYClimatizacion'
import TecnicoReparacionAireAcondicionado from './pages/general/TecnicoReparacionAireAcondicionado'
import TecnicoReparacionDeAireAcondicionado from './pages/general/TecnicoReparacionDeAireAcondicionado'
import TecnicosAireAcondicionadoCercaDeMi from './pages/general/TecnicosAireAcondicionadoCercaDeMi'
import TecnicosParaRepararAireAcondicionado from './pages/general/TecnicosParaRepararAireAcondicionado'
import TecnicosDeAiresAcondicionados from './pages/general/TecnicosDeAiresAcondicionados'
import TecnicosEnReparacionDeAiresAcondicionados from './pages/general/TecnicosEnReparacionDeAiresAcondicionados'
import VentaDeCuartosFrios from './pages/general/VentaDeCuartosFrios'
import VentaDeChiller from './pages/general/VentaDeChiller'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <ButtonWhatsap />
        <div className="main-content pt-16">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/producto/:id" element={<ProductoEspecifico />} />
            <Route path="/chiller-100-toneladas" element={<Chiller100Toneladas />} />
            <Route path="/chiller-7-5-toneladas" element={<Chiller75toneladas />} />
            <Route path="/chiller-5-tr" element={<Chiller5t />} />
            <Route path="/chiller-60000-btu" element={<Chiller60000btu />} />
            <Route path="/chiller-5-tonelada" element={<Chiller5toneladas />} />
            <Route path="/chiller-3-toneladas" element={<Chiller3tr />} />
            <Route path="/chiller-1200-btu" element={<Chiller1200Btu />} />
            <Route path="/chiller-10-tr" element={<Chiller10tr />} />
            <Route path="/chiller-9000-btu" element={<Chiller9000Btu />} />
            <Route path="/chiller-20-tr" element={<Chiller20 />} />
            <Route path="/chiller-25-tr" element={<Chiller25 />} />
            <Route path="/chiller-cw-3000" element={<ChillerCw3000 />} />
            <Route path="/congelacion" element={<Congelacion />} />
            <Route path="/conservacion" element={<Conservacion />} />
            <Route path="/diseno-cuartos" element={<Diseño />} />
            <Route path="/mini-split" element={<MiniSplit />} />
            <Route path="/multi-split" element={<MultiSplit />} />
            <Route path="/diseno-calculo" element={<DiseñoCalculo />} />
            <Route path="/piso-techo" element={<PisoTechoSplit />} />
            <Route path="/televisores" element={<Televisores />} />
            <Route path="/neveras" element={<Neveras />} />
            <Route path="/lavavajillas" element={<Lavavajillas />} />
            <Route path="/estufas" element={<Estufas />} />
            <Route path="/calentadores" element={<Calentadores />} />
            <Route path="/lavadoras" element={<Lavadoras />} />
            <Route path="/servicio-tecnico-chiller" element={<ServicioTecnicoChiller />} />
            <Route path="/servicio-tecnico-lg-fusagasuga" element={<ServicioTecnicoLGFusagasuga />} />
            <Route path="/servicio-tecnico-haceb-medellin" element={<ServicioTecnicoHacebMedellin />} />
            <Route path="/servicio-tecnico-lg-bucaramanga" element={<ServicioTecnicoLGBucaramanga />} />
            <Route path="/mantenimiento-estufas-barranquilla" element={<MantenimientoDeEstufasBarranquilla />} />
            <Route path="/mantenimiento-lavadoras-whirlpool-barranquilla" element={<MantenimientoLavadorasWhirlpoolBarranquilla />} />
            <Route path="/mantenimiento-aires-acondicionados" element={<MantenimientoAiresAcondicionados />} />
            <Route path="/alquiler-chiller" element={<AlquilerChiller />} />
            <Route path="/mantenimiento-lavadoras-bucaramanga" element={<MantenimientoLavadorasBucaramanga />} />
            <Route path="/compra-venta-chiller-segunda" element={<CompraVentaChillerSegunda />} />
            <Route path="/servicio-tecnico-mabe-medellin" element={<ServicioTecnicoMabeMedellin />} />
            <Route path="/mantenimiento-estufas-bucaramanga" element={<MantenimientoEstufasBucaramanga />} />
            <Route path="/servicio-tecnico-samsung-barranquilla" element={<ServicioTecnicoSamsungBarranquilla />} />
            <Route path="/servicio-tecnico-whirlpool-fusagasuga" element={<ServicioTecnicoWhirlpoolFusagasuga />} />
            <Route path="/reparacion-neveras-whirlpool-barranquilla" element={<ReparacionNeverasWhirlpoolBarranquilla />} />
            <Route path="/servicio-tecnico-samsung-bucaramanga" element={<ServicioTecnicoSamsungBucaramanga />} />
            <Route path="/alquiler-chiller-bogota" element={<AlquilerChillerBogota />} />
            <Route path="/mantenimiento-chiller" element={<MantenimientoTecnicoChiller />} />
            <Route path="/reparacion-chiller" element={<ReparacionChiller />} />
            <Route path="/instalacion-chiller" element={<InstalacionChiller />} />
            <Route path="/diseno-chiller" element={<DisenoChiller />} />
            <Route path="/aire-acondicionado-central-reparacion" element={<AireAcondicionadoCentralReparacion />} />
          {/* Rutas General (SEO friendly) */}
          <Route path="/aire-acondicionado-de-ventana-reparacion" element={<AireAcondicionadoDeVentanaReparacion />} />
          <Route path="/aire-acondicionado-reparacion-y-mantenimiento" element={<AireAcondicionadoReparacionYMantenimiento />} />
          <Route path="/aires-acondicionados-reparacion-y-mantenimiento" element={<AiresAcondicionadosReparacionYMantenimiento />} />
          <Route path="/aires-acondicionados-arreglos" element={<AiresAcondicionadosArreglos />} />
          <Route path="/arreglar-aire-acondicionado" element={<ArreglarAireAcondicionado />} />
          <Route path="/arreglar-aire-acondicionado-portatil" element={<ArreglarAireAcondicionadoPortatil />} />
          <Route path="/arreglar-el-aire-acondicionado" element={<ArreglarElAireAcondicionado />} />
          <Route path="/arreglar-un-aire-acondicionado" element={<ArreglarUnAireAcondicionado />} />
          <Route path="/arreglar-aire-acondicionado-casa" element={<ArreglarAireAcondicionadoCasa />} />
          <Route path="/arreglo-aire-acondicionado" element={<ArregloAireAcondicionado />} />
          <Route path="/arreglo-aire-acondicionado-casa" element={<ArregloAireAcondicionadoCasa />} />
          <Route path="/arreglo-compresor-aire-acondicionado" element={<ArregloCompresorAireAcondicionado />} />
          <Route path="/arreglo-de-aire-acondicionado" element={<ArregloDeAireAcondicionado />} />
          <Route path="/arreglo-de-aire-acondicionado-de-casa" element={<ArregloDeAireAcondicionadoDeCasa />} />
          <Route path="/arreglo-de-aires-acondicionados-de-autos" element={<ArregloDeAiresAcondicionadosDeAutos />} />
          <Route path="/chiller-general" element={<ChillerGeneral />} />
          <Route path="/chiller-5-toneladas-precio" element={<Chiller5ToneladasPrecio />} />
          <Route path="/chiller-5-tr-general" element={<Chiller5TrGeneral />} />
          <Route path="/chiller-colombia" element={<ChillerColombia />} />
          <Route path="/reparacion-aire-acondicionado-samsung" element={<ReparacionAireAcondicionadoSamsung />} />
          <Route path="/reparacion-aire-acondicionados" element={<ReparacionAireAcondicionados />} />
          <Route path="/reparacion-aire-acondicionado-ventana-general" element={<ReparacionAireAcondicionadoVentana />} />
          <Route path="/reparacion-chiller-general" element={<ReparacionChillerGeneral />} />
          <Route path="/reparacion-de-aire-acondicionado" element={<ReparacionDeAireAcondicionado />} />
          <Route path="/reparacion-aire-acondicionado-split-general" element={<ReparacionAireAcondicionadoSplitGeneral />} />
          <Route path="/reparar-fuga-de-gas-aire-acondicionado" element={<RepararFugaDeGasAireAcondicionado />} />
          <Route path="/reparar-fuga-en-aire-acondicionado" element={<RepararFugaEnAireAcondicionado />} />
          <Route path="/chiller-enfriado-por-aire-general" element={<ChillerEnfriadoPorAire />} />
          <Route path="/chiller-mantenimiento-general" element={<ChillerMantenimiento />} />
          <Route path="/cuarto-frio" element={<CuartoFrio />} />
          <Route path="/cuarto-frio-precio" element={<CuartoFrioPrecio />} />
          <Route path="/cuartos-frios-mantenimiento" element={<CuartosFriosMantenimiento />} />
          <Route path="/empresas-de-reparacion-de-aire-acondicionado" element={<EmpresasDeReparacionDeAireAcondicionado />} />
          <Route path="/equipo-chiller" element={<EquipoChiller />} />
          <Route path="/especialista-aire-acondicionado" element={<EspecialistaAireAcondicionado />} />
          <Route path="/especialistas-aire-acondicionado" element={<EspecialistasAireAcondicionado />} />
          <Route path="/instalacion-de-chiller-general" element={<InstalacionDeChillerGeneral />} />
          <Route path="/instalacion-de-chiller-enfriado-por-agua" element={<InstalacionDeChillerEnfriadoPorAgua />} />
          <Route path="/instalacion-de-cuartos-frios" element={<InstalacionDeCuartosFrios />} />
          <Route path="/instalacion-y-reparacion-de-aire-acondicionado" element={<InstalacionYReparacionDeAireAcondicionado />} />
          <Route path="/mantenimiento-a-chillers" element={<MantenimientoAChillers />} />
          <Route path="/laser-chiller" element={<LaserChiller />} />
          <Route path="/mantenimiento-a-chiller-enfriado-por-agua" element={<MantenimientoAChillerEnfriadoPorAgua />} />
          <Route path="/mantenimiento-a-equipos-de-aire-acondicionado-y-refrigeracion" element={<MantenimientoAEquiposDeAireAcondicionadoYRefrigeracion />} />
          <Route path="/mantenimiento-a-sistemas-de-refrigeracion" element={<MantenimientoASistemasDeRefrigeracion />} />
          <Route path="/mantenimiento-chiller-general" element={<MantenimientoChiller />} />
          <Route path="/mantenimiento-chillers-general" element={<MantenimientoChillers />} />
          <Route path="/mantenimiento-correctivo-del-sistema-de-refrigeracion" element={<MantenimientoCorrectivoDelSistemaDeRefrigeracion />} />
          <Route path="/mantenimiento-cuartos-frios" element={<MantenimientoCuartosFrios />} />
          <Route path="/mantenimiento-de-aire-acondicionado-y-refrigeracion" element={<MantenimientoDeAireAcondicionadoYRefrigeracion />} />
          <Route path="/mantenimiento-de-cavas-de-refrigeracion" element={<MantenimientoDeCavasDeRefrigeracion />} />
          <Route path="/mantenimiento-de-chiller" element={<MantenimientoDeChiller />} />
          <Route path="/mantenimiento-de-cuartos-frios" element={<MantenimientoDeCuartosFrios />} />
          <Route path="/mantenimiento-de-equipos-de-refrigeracion" element={<MantenimientoDeEquiposDeRefrigeracion />} />
          <Route path="/mantenimiento-de-equipos-de-refrigeracion-ventilacion-y-climatizacion" element={<MantenimientoDeEquiposDeRefrigeracionVentilacionYClimatizacion />} />
          <Route path="/mantenimiento-de-refrigeracion" element={<MantenimientoDeRefrigeracion />} />
          <Route path="/mantenimiento-de-refrigeraciones" element={<MantenimientoDeRefrigeraciones />} />
          <Route path="/mantenimiento-de-refrigeracion-ventilacion-y-climatizacion" element={<MantenimientoDeRefrigeracionVentilacionYClimatizacion />} />
          <Route path="/mantenimiento-de-refrigeracion-y-aire-acondicionado" element={<MantenimientoDeRefrigeracionYAireAcondicionado />} />
          <Route path="/mantenimiento-de-sistemas-de-aire-acondicionado-y-refrigeracion" element={<MantenimientoDeSistemasDeAireAcondicionadoYRefrigeracion />} />
          <Route path="/mantenimiento-de-una-torre-de-enfriamiento" element={<MantenimientoDeUnaTorreDeEnfriamiento />} />
          <Route path="/mantenimiento-preventivo-a-chiller" element={<MantenimientoPreventivoAChiller />} />
          <Route path="/mantenimiento-preventivo-a-equipos-de-refrigeracion-industrial" element={<MantenimientoPreventivoAEquiposDeRefrigeracionIndustrial />} />
          <Route path="/mantenimiento-preventivo-a-sistemas-de-refrigeracion" element={<MantenimientoPreventivoASistemasDeRefrigeracion />} />
          <Route path="/mantenimiento-preventivo-chiller" element={<MantenimientoPreventivoChiller />} />
          <Route path="/mantenimiento-preventivo-del-sistema-de-refrigeracion" element={<MantenimientoPreventivoDelSistemaDeRefrigeracion />} />
          <Route path="/mantenimiento-preventivo-de-un-chiller" element={<MantenimientoPreventivoDeUnChiller />} />
          <Route path="/mantenimiento-preventivo-en-refrigeracion" element={<MantenimientoPreventivoEnRefrigeracion />} />
          <Route path="/mantenimiento-preventivo-en-sistemas-de-refrigeracion" element={<MantenimientoPreventivoEnSistemasDeRefrigeracion />} />
          <Route path="/mantenimiento-preventivo-refrigeracion" element={<MantenimientoPreventivoRefrigeracion />} />
          <Route path="/mantenimiento-preventivo-sistema-de-refrigeracion" element={<MantenimientoPreventivoSistemaDeRefrigeracion />} />
          <Route path="/mantenimiento-refrigeracion-general" element={<MantenimientoRefrigeracion />} />
          <Route path="/mantenimiento-refrigeracion-acento" element={<MantenimientoRefrigeración />} />
          <Route path="/mantenimiento-refrigeracion-industrial" element={<MantenimientoRefrigeracionIndustrial />} />
          <Route path="/mantenimiento-y-reparacion-aire-acondicionado" element={<MantenimientoYReparacionAireAcondicionado />} />
          <Route path="/mantenimiento-refrigeracion-y-aire-acondicionado" element={<MantenimientoRefrigeracionYAireAcondicionado />} />
          <Route path="/mantenimiento-y-reparacion-de-aires-acondicionados" element={<MantenimientoYReparacionDeAiresAcondicionados />} />
          <Route path="/para-arreglar-aire-acondicionado" element={<ParaArreglarAireAcondicionado />} />
          <Route path="/mantenimiento-y-reparacion-de-minisplit" element={<MantenimientoYReparacionDeMinisplit />} />
          <Route path="/mini-chiller" element={<MiniChiller />} />
          <Route path="/refrigeracion-industrial-general" element={<RefrigeracionIndustrial />} />
          <Route path="/refrigeracion-y-mantenimiento" element={<RefrigeracionYMantenimiento />} />
          <Route path="/reparacion-aire-general" element={<ReparacionAire />} />
          <Route path="/reparacion-aire-acondicionado" element={<ReparacionAireAcondicionado />} />
          <Route path="/reparacion-aire-acondicionado-automotriz" element={<ReparacionAireAcondicionadoAutomotriz />} />
          <Route path="/reparacion-aire-acondicionado-casa" element={<ReparacionAireAcondicionadoCasa />} />
          <Route path="/reparacion-aire-acondicionado-central" element={<ReparacionAireAcondicionadoCentral />} />
          <Route path="/reparacion-aire-acondicionado-cerca-de-mi" element={<ReparacionAireAcondicionadoCercaDeMi />} />
          <Route path="/reparacion-aire-acondicionado-comercial" element={<ReparacionAireAcondicionadoComercial />} />
          <Route path="/reparacion-aire-acondicionado-de-ventana" element={<ReparacionAireAcondicionadoDeVentana />} />
          <Route path="/reparacion-aire-acondicionado-industrial" element={<ReparacionAireAcondicionadoIndustrial />} />
          <Route path="/reparacion-aire-acondicionado-inverter" element={<ReparacionAireAcondicionadoInverter />} />
          <Route path="/reparacion-aire-acondicionado-minisplit" element={<ReparacionAireAcondicionadoMiniSplit />} />
          <Route path="/reparacion-aire-acondicionado-portatil" element={<ReparacionAireAcondicionadoPortatil />} />
          <Route path="/reparacion-aire-acondicionado-residencial" element={<ReparacionAireAcondicionadoResidencial />} />
          <Route path="/reparacion-de-aire-acondicionado-a-domicilio" element={<ReparacionDeAireAcondicionadoADomicilio />} />
          <Route path="/reparacion-de-aire-acondicionado-cerca-de-mi" element={<ReparacionDeAireAcondicionadoCercaDeMi />} />
          <Route path="/reparacion-de-aire-acondicionado-minisplit" element={<ReparacionDeAireAcondicionadoMiniSplit />} />
          <Route path="/reparacion-de-aire-acondicionado-para-casa" element={<ReparacionDeAireAcondicionadoParaCasa />} />
          <Route path="/reparacion-de-aire-acondicionado-portatil" element={<ReparacionDeAireAcondicionadoPortatil />} />
          <Route path="/reparacion-de-aire-acondicionado-precio" element={<ReparacionDeAireAcondicionadoPrecio />} />
          <Route path="/reparacion-de-aire-acondicionado-split" element={<ReparacionDeAireAcondicionadoSplit />} />
          <Route path="/reparacion-de-aire-acondicionado-ventana" element={<ReparacionDeAireAcondicionadoVentana />} />
          <Route path="/reparacion-de-aire-acondicionado-y-calefaccion" element={<ReparacionDeAireAcondicionadoYCalefaccion />} />
          <Route path="/reparacion-de-aire-central" element={<ReparacionDeAireCentral />} />
          <Route path="/reparacion-de-aire-de-ventana" element={<ReparacionDeAireDeVentana />} />
          <Route path="/reparacion-de-aires" element={<ReparacionDeAires />} />
          <Route path="/reparacion-de-aires-acondicionados-de-casa" element={<ReparacionDeAiresAcondicionadosDeCasa />} />
          <Route path="/reparacion-de-aires-acondicionados-inverter" element={<ReparacionDeAiresAcondicionadosInverter />} />
          <Route path="/reparacion-de-chillers" element={<ReparacionDeChillers />} />
          <Route path="/reparacion-de-enfriadores-de-aire" element={<ReparacionDeEnfriadoresDeAire />} />
          <Route path="/reparacion-de-equipos-de-aire-acondicionado" element={<ReparacionDeEquiposDeAireAcondicionado />} />
          <Route path="/reparacion-de-fuga-de-gas-refrigerante" element={<ReparacionDeFugaDeGasRefrigerante />} />
          <Route path="/reparacion-de-minisplit" element={<ReparacionDeMinisplit />} />
          <Route path="/reparacion-de-motor-de-aire-acondicionado" element={<ReparacionDeMotorDeAireAcondicionado />} />
          <Route path="/reparacion-de-placas-aire-acondicionado" element={<ReparacionDePlacasAireAcondicionado />} />
          <Route path="/reparacion-de-split" element={<ReparacionDeSplit />} />
          <Route path="/reparacion-evaporador-aire-acondicionado" element={<ReparacionEvaporadorAireAcondicionado />} />
          <Route path="/reparacion-mangueras-aire-acondicionado" element={<ReparacionManguerasAireAcondicionado />} />
          <Route path="/reparar-aire-acondicionado-casa" element={<RepararAireAcondicionadoCasa />} />
          <Route path="/reparar-aire-acondicionado-split" element={<RepararAireAcondicionadoSplit />} />
          <Route path="/reparar-bobina-compresor-aire-acondicionado" element={<RepararBobinaCompresorAireAcondicionado />} />
          <Route path="/reparar-fuga-aire-acondicionado" element={<RepararFugaAireAcondicionado />} />
          <Route path="/reparar-fuga-gas-aire-acondicionado" element={<RepararFugaGasAireAcondicionado />} />
          <Route path="/reparar-manguera-de-aire-acondicionado" element={<RepararMangueraDeAireAcondicionado />} />
          <Route path="/reparar-minisplit" element={<RepararMiniSplit />} />
          <Route path="/servicio-de-mantenimiento-de-refrigeracion" element={<ServicioDeMantenimientoDeRefrigeracion />} />
          <Route path="/service-de-aires-acondicionados" element={<ServiceDeAiresAcondicionados />} />
          <Route path="/servicio-de-mantenimiento-a-chillers" element={<ServicioDeMantenimientoAChillers />} />
          <Route path="/servicio-de-reparacion-de-aire-acondicionado" element={<ServicioDeReparacionDeAireAcondicionado />} />
          <Route path="/split-aire-acondicionado" element={<SplitAireAcondicionado />} />
          <Route path="/servicio-de-reparacion-de-aires-acondicionados" element={<ServicioDeReparacionDeAiresAcondicionados />} />
          <Route path="/servicio-reparacion-aire-acondicionado" element={<ServicioReparacionAireAcondicionado />} />
          <Route path="/tecnico-aire" element={<TecnicoAire />} />
          <Route path="/tecnico-aire-acondicionado" element={<TecnicoAireAcondicionado />} />
          <Route path="/tecnico-de-aire" element={<TecnicoDeAire />} />
          <Route path="/tecnico-aire-acondicionado-cerca-de-mi-general" element={<TecnicoAireAcondicionadoCercaDeMiGeneral />} />
          <Route path="/tecnico-de-aire-acondicionado-general" element={<TecnicoDeAireAcondicionadoGeneral />} />
          <Route path="/tecnico-de-aire-acondicionado-cerca-de-mi-general" element={<TecnicoDeAireAcondicionadoCercaDeMiGeneral />} />
          <Route path="/tecnico-en-aire" element={<TecnicoEnAire />} />
          <Route path="/tecnico-en-aire-acondicionado-split" element={<TecnicoEnAireAcondicionadoSplit />} />
          <Route path="/tecnico-en-mantenimiento-de-aires-acondicionados" element={<TecnicoEnMantenimientoDeAiresAcondicionados />} />
          <Route path="/tecnico-en-mantenimiento-de-equipos-de-refrigeracion-ventilacion-y-climatizacion" element={<TecnicoEnMantenimientoDeEquiposDeRefrigeracionVentilacionYClimatizacion />} />
          <Route path="/tecnico-en-mantenimiento-de-refrigeracion-y-climatizacion" element={<TecnicoEnMantenimientoDeRefrigeracionYClimatizacion />} />
          <Route path="/tecnico-en-refrigeracion-comercial" element={<TecnicoEnRefrigeracionComercial />} />
          <Route path="/tecnico-en-refrigeracion-industrial" element={<TecnicoEnRefrigeracionIndustrial />} />
          <Route path="/tecnico-en-refrigeracion-sena" element={<TecnicoEnRefrigeracionSena />} />
          <Route path="/tecnico-refrigeracion-sena" element={<TecnicoRefrigeracionSena />} />
          <Route path="/tecnico-refrigeracion-y-climatizacion" element={<TecnicoRefrigeracionYClimatizacion />} />
          <Route path="/tecnico-reparacion-aire-acondicionado" element={<TecnicoReparacionAireAcondicionado />} />
          <Route path="/tecnico-reparacion-de-aire-acondicionado" element={<TecnicoReparacionDeAireAcondicionado />} />
          <Route path="/tecnicos-aire-acondicionado-cerca-de-mi" element={<TecnicosAireAcondicionadoCercaDeMi />} />
          <Route path="/tecnicos-para-reparar-aire-acondicionado" element={<TecnicosParaRepararAireAcondicionado />} />
          <Route path="/tecnicos-de-aires-acondicionados" element={<TecnicosDeAiresAcondicionados />} />
          <Route path="/tecnicos-en-reparacion-de-aires-acondicionados" element={<TecnicosEnReparacionDeAiresAcondicionados />} />
          <Route path="/venta-de-cuartos-frios" element={<VentaDeCuartosFrios />} />
          <Route path="/venta-de-chiller" element={<VentaDeChiller />} />
            {/* Ruta catch-all que redirige a la página principal */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App

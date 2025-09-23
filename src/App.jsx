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

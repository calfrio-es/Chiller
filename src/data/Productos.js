// Importar todas las imágenes de productos
import chiller100toneladasImg from '../assets/img/layout/chiller100toneladas.png';
import chiller75Img from '../assets/img/layout/chiiller7-5.jpeg';
import chiller5tImg from '../assets/img/layout/chiller5t.jpeg';
import chiller3trImg from '../assets/img/layout/chiller3tr.jpeg';
import chiller1200Img from '../assets/img/layout/chiller1200.jpeg';
import chiller10trImg from '../assets/img/layout/chiller10tr.jpeg';
import chiller9000btuImg from '../assets/img/layout/chiller9000btu.jpeg';
import chiller20trImg from '../assets/img/layout/chiller20tr.jpeg';
import chiller25trImg from '../assets/img/layout/chiller25tr.jpeg';
import chillercw3000Img from '../assets/img/layout/chillercw3000.webp';

export const productosChiller = [
  {
    id: 'chiller-100-toneladas',
    nombre: 'Chiller Carrier – 100 Toneladas',
    modelo: '30XAA1004N-B2-33',
    marca: 'Carrier',
    imagen: chiller100toneladasImg,
    ruta: '/chiller-100-toneladas',
    especificaciones: [
      '220 voltios, 3 fases',
      'Aluminum Fin/Copper Tube, Standard Ambient Temperature',
      '2 Bombas Dual Pump, 10 HP',
      '1200 litros por minuto'
    ],
    descripcion: 'Chiller Carrier 100 Toneladas',
    categoria: 'chiller',
    capacidad: '100 TR',
    destacado: true
  },
  {
    id: 'chiller-7-5-toneladas',
    nombre: 'Chiller Alpunto – 7.5 Toneladas',
    modelo: 'CCAI-07,5U3E',
    marca: 'Alpunto',
    imagen: chiller75Img,
    ruta: '/chiller-7-5-toneladas',
    especificaciones: [
      'Capacidad: 7,5 TR (90.000 BTU/hr)',
      'Color arena (beige) o gris',
      'Refrigerante: R-410',
      'Flujo de agua: 90 L/M'
    ],
    descripcion: 'Chiller Alpunto 7.5 Toneladas',
    categoria: 'chiller',
    capacidad: '7.5 TR',
    destacado: true
  },
  {
    id: 'chiller-5-toneladas',
    nombre: 'Chiller Alpunto – 5 Toneladas',
    modelo: 'CCAI-005U3E',
    marca: 'Alpunto',
    imagen: chiller5tImg,
    ruta: '/chiller-5-toneladas',
    especificaciones: [
      'Capacidad: 5 TR (60.000 BTU/hr)',
      'Refrigerante: R-507C',
      'Flujo de agua: 60LPM',
      'Sistema de refrigeración de un (1) circuitos independientes'
    ],
    descripcion: 'Chiller Alpunto 5 Toneladas',
    categoria: 'chiller',
    capacidad: '5 TR',
    destacado: true
  },
  {
    id: 'chiller-3-toneladas',
    nombre: 'Chiller Alpunto – 3 Toneladas',
    modelo: 'CCAI-003U3M',
    marca: 'Alpunto',
    imagen: chiller3trImg,
    ruta: '/chiller-3-toneladas',
    especificaciones: [
      'Capacidad: 3 TR (36.000 BTU/hr)',
      'Refrigerante: R-410A',
      'Flujo de agua: 32LPM',
      'Sistema de refrigeración de un (1) circuitos independientes'
    ],
    descripcion: 'Chiller Alpunto 3 Toneladas',
    categoria: 'chiller',
    capacidad: '3 TR',
    destacado: true
  },
  {
    id: 'chiller-12000-btu',
    nombre: 'Chiller 12000 BTU',
    modelo: 'CCAI-001U2B',
    marca: 'Alpunto',
    imagen: chiller1200Img,
    ruta: '/chiller-12000-btu',
    especificaciones: [
      'Capacidad: 1 TR (12.000 BTU/hr)',
      'Refrigerante: R-410A',
      'Flujo de agua: 10LPM',
      'Sistema de refrigeración de un (1) circuitos independientes'
    ],
    descripcion: 'Chiller 12000 BTU',
    categoria: 'chiller',
    capacidad: '1 TR',
    destacado: false
  },
  {
    id: 'chiller-10-tr',
    nombre: 'Chiller 10 TR',
    modelo: 'CCAI-010U3G',
    marca: 'Alpunto',
    imagen: chiller10trImg,
    ruta: '/chiller-10-tr',
    especificaciones: [
      'Capacidad: 10 TR (120.000 BTU/hr)',
      'Refrigerante: R-410A',
      'Flujo de agua: 130 LPM',
      'Sistema de refrigeración de un (2) circuitos independientes'
    ],
    descripcion: 'Chiller 10 TR',
    categoria: 'chiller',
    capacidad: '10 TR',
    destacado: false
  },
  {
    id: 'chiller-9000-btu',
    nombre: 'Chiller 9000 BTU',
    modelo: 'CCAI-0.75T2A',
    marca: 'Alpunto',
    imagen: chiller9000btuImg,
    ruta: '/chiller-9000-btu',
    especificaciones: [
      'Capacidad: 0.75 TR (9.000 BTU/hr)',
      'Refrigerante: R-410A',
      'Flujo de agua: 8LPM',
      'Sistema de refrigeración de un (1) circuitos independientes'
    ],
    descripcion: 'Chiller 9000 BTU en venta',
    categoria: 'chiller',
    capacidad: '0.75 TR',
    destacado: false
  },
  {
    id: 'chiller-20-tr',
    nombre: 'Chiller 20 TR',
    modelo: 'CCAI-020U3J',
    marca: 'Alpunto',
    imagen: chiller20trImg,
    ruta: '/chiller-20-tr',
    especificaciones: [
      'Capacidad: 20 TR (240.000 BTU/hr)',
      'Refrigerante: R-410A',
      'Flujo de agua: 220 LPM',
      'Sistema de refrigeración de un (4) circuitos independientes'
    ],
    descripcion: 'Chiller 20 TR en venta',
    categoria: 'chiller',
    capacidad: '20 TR',
    destacado: false
  },
  {
    id: 'chiller-25-tr',
    nombre: 'Chiller 25 TR',
    modelo: 'CCAI-020U3J',
    marca: 'Alpunto',
    imagen: chiller25trImg,
    ruta: '/chiller-25-tr',
    especificaciones: [
      'Capacidad: 25 TR (240.000 BTU/hr)',
      'Refrigerante: R-410A',
      'Flujo de agua: 270 LPM',
      'Sistema de refrigeración de un (4) circuitos independientes'
    ],
    descripcion: 'Chiller 25 TR en venta',
    categoria: 'chiller',
    capacidad: '25 TR',
    destacado: false
  },
  {
    id: 'chiller-cw-3000',
    nombre: 'Chiller CW 3000',
    modelo: 'Industrial chiller',
    marca: 'Industrial chiller',
    imagen: chillercw3000Img,
    ruta: '/chiller-cw-3000',
    especificaciones: [
      'Potencia: 80 WATTS',
      '110 VOLTIOS',
      'Proporciona condiciones de trabajo estables para los dispositivos láser',
      'Puerto de salida de alarma puede proteger rápidamente a los componentes sensibles',
      'Puede extender la vida que usa del tubo láser y asegurar el efecto de grabado mejor'
    ],
    descripcion: 'Chiller cw 3000 en venta',
    categoria: 'chiller',
    capacidad: 'CW 3000',
    destacado: false
  }
];

// Función para obtener un producto por ID
export const getProductoById = (id) => {
  return productosChiller.find(producto => producto.id === id);
};

// Función para obtener productos por categoría
export const getProductosByCategoria = (categoria) => {
  return productosChiller.filter(producto => producto.categoria === categoria);
};

// Función para obtener productos destacados
export const getProductosDestacados = () => {
  return productosChiller.filter(producto => producto.destacado);
};

// Función para obtener productos por capacidad
export const getProductosByCapacidad = (capacidad) => {
  return productosChiller.filter(producto => producto.capacidad === capacidad);
};

// Función para obtener todos los productos
export const getAllProductos = () => {
  return productosChiller;
};

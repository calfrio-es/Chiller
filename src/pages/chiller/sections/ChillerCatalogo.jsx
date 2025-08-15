import React from 'react';
import { Link } from 'react-router-dom';
import { getAllProductos } from '../../../data/Productos';

const ChillerCatalogo = () => {
  const productos = getAllProductos();

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Catálogo de Chillers
          </h2>
        </div>

        {/* Contenedor con scroll horizontal */}
        <div className="overflow-x-auto">
          <div className="flex gap-4 pb-4" style={{ minWidth: 'max-content' }}>
            {productos.map((producto) => (
              <Link
                key={producto.id} 
                to={`/producto/${producto.id}`}
                className="overflow-hidden hover:opacity-80 transition-opacity cursor-pointer bg-gray-100 p-4 flex-shrink-0"
                style={{ width: '280px' }}
              >
                {/* Imagen del producto */}
                <div className="relative h-48 bg-gray-100 p-2">
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre}
                    className="w-full h-full object-cover"
                  />
                  {producto.destacado && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#2b9b8d] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Destacado
                      </span>
                    </div>
                  )}
                </div>

                {/* Información del producto */}
                <div className="p-4">
                  {/* Nombre del producto */}
                  <h3 className="text-lg font-semibold text-gray-900">
                    {producto.nombre}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChillerCatalogo;

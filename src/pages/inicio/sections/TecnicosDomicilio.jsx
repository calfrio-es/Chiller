import React from 'react';
import tecnicoDomicilioImg from '../../../assets/img/layout/tecnicodomicilio.jpg';

export default function TecnicosDomicilio() {
  return (
    <section className="relative py-20 flex items-center overflow-hidden">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${tecnicoDomicilioImg})`
        }}
      />
      
      {/* Máscara difuminada */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm "></div>
      
      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 text-left text-white max-w-4xl">
        <div className="mb-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Servicio Técnico a Domicilio para <span style={{ color: '#2b9b8d' }}>Chillers</span>
          </h2>
          <p className="text-lg md:text-xl font-semibold mb-4">
            Reparación y Mantenimiento Express en Todo Colombia
          </p>
        </div>
        
        <div className="mb-6">
          <p className="text-base md:text-lg mb-3 leading-relaxed">
            ¿Falla en tu chiller? 🚑 Nuestros técnicos certificados llegan a tu empresa en el menor tiempo posible.
          </p>
          <p className="text-base md:text-lg mb-4 leading-relaxed">
            Reparación in situ, mantenimiento preventivo y repuestos originales. ¡Soporte 24/7! 📞 Contacta ahora al 
            <span className="font-bold text-[#2b9b8d]"> 316 7137081</span>
          </p>
        </div>
        
        {/* Botón de contacto */}
        <div className="flex justify-start">
          <button 
            className="bg-[#2b9b8d] hover:bg-[#1a7a6f] text-white px-6 py-3 rounded-lg font-semibold text-base flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => {
              const phoneNumber = '+573167137081';
              const message = 'Hola, necesito servicio técnico a domicilio para mi chiller.';
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Solicitar →
          </button>
        </div>
        
        {/* Información adicional */}
        <div className="mt-6 text-xs opacity-90">
          <p>* Disponibilidad 24/7 en las principales ciudades de Colombia</p>
        </div>
      </div>
    </section>
  );
}

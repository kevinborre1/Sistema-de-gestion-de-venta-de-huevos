import React from 'react';

export default function HuevosLSPage() {
  // Enlace directo a WhatsApp con mensaje predeterminado
  const whatsappUrl = "https://wa.me/5491168922030?text=Hola!%20Quiero%20hacer%20un%20pedido%20de%20maples%20de%20huevos";

  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#2C221E] font-sans antialiased py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* ================= HEADER / LOGO ================= */}
        <header className="text-center py-4">
          <div className="inline-flex items-center justify-center gap-2 mb-1">
            <span className="text-3xl">🥚</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2C221E]">
              HUEVOS LS
            </h1>
          </div>
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#9E8B70] uppercase">
            Frescos y Seleccionados
          </p>
        </header>

        {/* ================= SECCIÓN: HISTORIA Y CALIDAD ================= */}
        <section className="bg-[#FAF7F2] border border-[#EBE3D5] rounded-3xl p-6 sm:p-10 shadow-sm transition-all hover:shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Texto informativo */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2C221E] leading-tight">
                Nuestra Calidad.<br />
                <span className="text-[#D86231]">Tu Sabor.</span>
              </h2>
              
              <div className="space-y-3 text-sm sm:text-base text-[#52443C] leading-relaxed">
                <p>
                  Nuestros huevos de calidad premium provienen de gallinas criadas con el mejor cuidado y alimentación natural.
                </p>
                <p>
                  Frescos, seleccionados a mano día a día, y garantizados directamente para la mesa de tu hogar o comercio.
                </p>
                <p className="font-medium text-[#2C221E]">
                  Nutrición, sabor y confianza en cada huevo.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-[#D86231] font-semibold text-sm">
                <span>¡Elegí la calidad de LS Huevos!</span>
                <span>🧡</span>
              </div>
            </div>

            {/* Imagen + Badge */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-md border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?q=80&w=800&auto=format&fit=crop"
                  alt="Maple de Huevos LS Frescos"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Badge "Maples de 30 huevos" */}
              <div className="mt-3 bg-white border border-[#E2D8C7] text-[#2C221E] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-sm flex items-center gap-1.5">
                <span>📦</span> ¡Maples de 30 huevos!
              </div>
            </div>

          </div>
        </section>

        {/* ================= SECCIÓN: OFERTA Y BOTÓN DE COMPRA ================= */}
        <section className="bg-white border border-[#EBE3D5] rounded-3xl p-6 sm:p-10 text-center shadow-sm space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#9E8B70]">
              Oferta Especial
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#2C221E] mt-1">
              PRECIO POR MAPLE
            </h3>
            <div className="text-4xl sm:text-6xl font-black text-[#D86231] mt-2 tracking-tight">
              $6000
            </div>
          </div>

          {/* Características (Iconos) */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto pt-2">
            {/* Envío */}
            <div className="flex flex-col items-center p-3 rounded-xl bg-[#FBF9F5] border border-[#F0EA9]">
              <div className="w-10 h-10 rounded-full bg-[#F5ECE0] text-[#D86231] flex items-center justify-center text-xl mb-2">
                🛵
              </div>
              <span className="font-bold text-xs sm:text-sm text-[#2C221E]">ENVÍOS A DOMICILIO</span>
              <span className="text-[11px] text-[#78685A] mt-0.5">Rápido y confiable</span>
            </div>

            {/* Calidad */}
            <div className="flex flex-col items-center p-3 rounded-xl bg-[#FBF9F5] border border-[#F0EA39]">
              <div className="w-10 h-10 rounded-full bg-[#F5ECE0] text-[#D86231] flex items-center justify-center text-xl mb-2">
                🛡️
              </div>
              <span className="font-bold text-xs sm:text-sm text-[#2C221E]">CALIDAD GARANTIZADA</span>
              <span className="text-[11px] text-[#78685A] mt-0.5">Seleccionados a mano</span>
            </div>
          </div>

          {/* Botón Principal CTA - WhatsApp */}
          <div className="pt-4 max-w-md mx-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-[#D86231] hover:bg-[#C25224] text-white font-bold text-lg sm:text-xl py-4 px-8 rounded-2xl shadow-lg shadow-[#D86231]/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {/* Icono WhatsApp SVG */}
              <svg 
                className="w-7 h-7 fill-current" 
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>HACER PEDIDO (WHATSAPP)</span>
            </a>
          </div>

          {/* Pie de oferta / Venta al por mayor */}
          <div className="pt-2 border-t border-[#F3EDDF] text-xs sm:text-sm text-[#78685A] space-y-1">
            <p className="font-semibold text-[#2C221E]">
              Consultá por ventas al por mayor
            </p>
            <p>
              PEDÍ LOS TUYOS: <span className="font-bold text-[#D86231]">1168922030</span>
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
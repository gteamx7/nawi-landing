export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-orange-900/10 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-indigo-300 text-sm font-medium">Disponible en Guatemala</span>
        </div>

        <h1 className="text-7xl md:text-9xl font-black text-white mb-4 tracking-tight">
          Nawi
        </h1>
        
        <p className="text-xl md:text-2xl text-indigo-300 font-medium mb-6">
          Tu nawal empresarial
        </p>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          La primera app con agentes IA diseñada para negocios guatemaltecos. 
          Administrá tu restaurante, tienda o negocio desde tu celular — 
          mientras la IA trabaja por vos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#precios" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:scale-105">
            Empezar gratis
          </a>
          <a href="#agentes" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all">
            Ver agentes IA →
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-gray-500 text-sm">
          <span>✓ Gratis para empezar</span>
          <span>✓ Sin tarjeta requerida</span>
          <span>✓ En español guatemalteco</span>
          <span>✓ FEL incluido</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

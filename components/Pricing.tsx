const plans = [
  {
    name: 'Free',
    price: 'Q0',
    period: 'para siempre',
    desc: 'Para conocer Nawi',
    features: ['1 usuario', '50 productos', 'POS básico', 'Dashboard básico'],
    cta: 'Empezar gratis',
    highlighted: false,
  },
  {
    name: 'Emprendedor',
    price: 'Q99',
    period: '/mes',
    desc: 'Para negocios en crecimiento',
    features: ['1 usuario', 'Productos ilimitados', 'POS completo', 'Reportes con gráficas', "No'j — Asistente IA"],
    cta: 'Empezar ahora',
    highlighted: false,
  },
  {
    name: 'Negocio',
    price: 'Q199',
    period: '/mes',
    desc: 'El más popular',
    features: ['4 usuarios', 'Todo del plan anterior', "Tz'ikin Pro — PDF contable", 'Kej — Análisis de inventario', 'Soporte prioritario'],
    cta: 'Elegir Negocio',
    highlighted: true,
  },
]

export default function Pricing() {
  return (
    <section id="precios" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Precios claros</h2>
          <p className="text-gray-400 text-lg">Sin contratos. Sin sorpresas. Cancelá cuando quieras.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl p-6 flex flex-col ${p.highlighted ? 'bg-indigo-500 border-2 border-indigo-400' : 'bg-white/5 border border-white/10'}`}>
              {p.highlighted && (
                <div className="text-center mb-4">
                  <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">MÁS POPULAR</span>
                </div>
              )}
              <h3 className="font-black text-xl text-white mb-1">{p.name}</h3>
              <p className={`text-sm mb-4 ${p.highlighted ? 'text-indigo-200' : 'text-gray-500'}`}>{p.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">{p.price}</span>
                <span className={`text-sm ${p.highlighted ? 'text-indigo-200' : 'text-gray-500'}`}>{p.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${p.highlighted ? 'text-indigo-100' : 'text-gray-400'}`}>
                    <span className="mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`text-center font-bold py-3 px-6 rounded-xl transition-all ${p.highlighted ? 'bg-white text-indigo-600 hover:bg-indigo-50' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 text-sm mt-8">
          Precios en Quetzales guatemaltecos. Pagos via Google Play y App Store.
        </p>
      </div>
    </section>
  )
}

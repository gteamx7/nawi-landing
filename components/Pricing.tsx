const plans = [
  {
    name: 'Free',
    price: 'Q0',
    period: 'para siempre',
    desc: 'Para empezar a conocer Nawi',
    features: ['1 usuario', '50 productos', 'Agente Asesor (1x/día)', 'Dashboard básico'],
    cta: 'Empezar gratis',
    highlighted: false,
  },
  {
    name: 'Emprendedor',
    price: 'Q99',
    period: '/mes',
    desc: 'Para negocios en crecimiento',
    features: ['3 usuarios', 'Productos ilimitados', 'Agente Asesor diario', 'Agente Contador (5x/mes)', 'Reportes básicos'],
    cta: 'Empezar ahora',
    highlighted: false,
  },
  {
    name: 'Negocio',
    price: 'Q199',
    period: '/mes',
    desc: 'El más popular',
    features: ['10 usuarios', 'Todo ilimitado', 'Todos los agentes básicos', 'Reportes avanzados', 'Soporte prioritario'],
    cta: 'Elegir Negocio',
    highlighted: true,
  },
  {
    name: 'Pro',
    price: 'Q449',
    period: '/mes',
    desc: 'Para negocios establecidos',
    features: ['Usuarios ilimitados', 'FEL incluido', 'Agente WhatsApp', 'Agente Marketing', 'Multi-sucursal'],
    cta: 'Elegir Pro',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="precios" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Precios claros
          </h2>
          <p className="text-gray-400 text-lg">
            Sin contratos. Sin sorpresas. Cancelá cuando quieras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl p-6 flex flex-col ${p.highlighted ? 'bg-indigo-500 border-2 border-indigo-400' : 'bg-white/5 border border-white/10'}`}>
              {p.highlighted && (
                <div className="text-center mb-4">
                  <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">MÁS POPULAR</span>
                </div>
              )}
              <h3 className={`font-black text-xl mb-1 ${p.highlighted ? 'text-white' : 'text-white'}`}>{p.name}</h3>
              <p className={`text-sm mb-4 ${p.highlighted ? 'text-indigo-200' : 'text-gray-500'}`}>{p.desc}</p>
              <div className="mb-6">
                <span className={`text-4xl font-black ${p.highlighted ? 'text-white' : 'text-white'}`}>{p.price}</span>
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
          Los pagos se procesan de forma segura via Stripe. Precios en Quetzales guatemaltecos.
        </p>
      </div>
    </section>
  )
}

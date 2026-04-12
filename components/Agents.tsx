const agents = [
  {
    nawal: "Ajpu'",
    emoji: '🌅',
    name: 'Agente Asesor',
    nawalDesc: 'El cazador visionario — ve todo lo que otros no ven',
    desc: 'Cada mañana te dice cómo va tu negocio, qué vendiste, qué se está acabando y qué hacer hoy.',
    example: '"Buenos días María. Ayer vendiste Q1,200. Tu platillo estrella fue la pasta alfredo. Te quedan ingredientes para 8 porciones — pedí hoy."',
    plan: 'Todos los planes',
    color: 'from-amber-900/40 to-orange-900/20',
    border: 'border-amber-500/20',
    badge: 'bg-amber-500/10 border-amber-500/20 text-amber-300',
  },
  {
    nawal: "Tz'ikin",
    emoji: '📊',
    name: 'Agente Contador',
    nawalDesc: 'El pájaro de la abundancia — trae claridad financiera',
    desc: 'Reporte financiero completo en lenguaje simple. Balance, márgenes, productos más rentables.',
    example: '"Este mes ganaste Q8,500 limpio. Tu margen es 38%. La pasta alfredo es tu producto más rentable — vendé más de ese."',
    plan: 'Plan Negocio y Pro',
    color: 'from-green-900/40 to-teal-900/20',
    border: 'border-green-500/20',
    badge: 'bg-green-500/10 border-green-500/20 text-green-300',
  },
  {
    nawal: 'Kej',
    emoji: '🛒',
    name: 'Agente Compras',
    nawalDesc: 'El venado proveedor — cuida que nunca te falte nada',
    desc: 'Analiza tu inventario y te dice exactamente qué pedir y cuándo antes de quedarte sin stock.',
    example: '"En 3 días te vas a quedar sin arroz y aceite. Te recomiendo pedir hoy: 5 bolsas de arroz, 3 cajas de aceite."',
    plan: 'Plan Pro',
    color: 'from-blue-900/40 to-indigo-900/20',
    border: 'border-blue-500/20',
    badge: 'bg-blue-500/10 border-blue-500/20 text-blue-300',
  },
  {
    nawal: 'Toj',
    emoji: '📱',
    name: 'Agente WhatsApp',
    nawalDesc: 'El comunicador — equilibra y conecta con tus clientes',
    desc: 'Atiende a tus clientes 24/7, responde preguntas, toma pedidos y escala a vos cuando es necesario.',
    example: '"Cliente: ¿A qué hora abren? Toj: ¡Hola! Abrimos a las 8am. ¿Te puedo ayudar con algo más?"',
    plan: 'Plan Enterprise',
    color: 'from-purple-900/40 to-violet-900/20',
    border: 'border-purple-500/20',
    badge: 'bg-purple-500/10 border-purple-500/20 text-purple-300',
  },
  {
    nawal: "Iq'",
    emoji: '📣',
    name: 'Agente Marketing',
    nawalDesc: 'El viento mensajero — lleva tu mensaje a todos lados',
    desc: 'Crea publicidad para Facebook e Instagram basada en tus productos y ventas reales.',
    example: '"Generé 3 opciones de post para tu pasta alfredo. La opción 2 tiene mejor potencial para sábados por la tarde."',
    plan: 'Plan Pro y Enterprise',
    color: 'from-pink-900/40 to-rose-900/20',
    border: 'border-pink-500/20',
    badge: 'bg-pink-500/10 border-pink-500/20 text-pink-300',
  },
]

export default function Agents() {
  return (
    <section id="agentes" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Los nawales de tu negocio
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cada agente lleva el nombre de un nawal maya K'iche'. 
            Espíritus guías que trabajan por vos mientras vos atendés a tus clientes.
          </p>
        </div>

        <div className="space-y-6">
          {agents.map((a) => (
            <div key={a.name} className={`bg-gradient-to-br ${a.color} border ${a.border} rounded-2xl p-6 md:p-8`}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{a.emoji}</span>
                    <div>
                      <div className="text-white font-black text-2xl">{a.nawal}</div>
                      <div className="text-gray-400 text-sm italic">{a.nawalDesc}</div>
                    </div>
                  </div>
                  <h3 className="text-gray-300 font-bold text-lg mb-2">{a.name}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{a.desc}</p>
                  <span className={`inline-block border text-xs font-medium px-3 py-1 rounded-full ${a.badge}`}>
                    {a.plan}
                  </span>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-black/30 border border-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-500 text-xs font-medium">{a.nawal} — Nawi IA</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed italic">{a.example}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

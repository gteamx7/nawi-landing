const features = [
  { emoji: '🍽️', title: 'Restaurantes', desc: 'Mesas, órdenes, platillos y cobro en segundos. Tu mesero y cajero en un solo celular.' },
  { emoji: '🏪', title: 'Abarroterías', desc: 'Control de inventario, alertas de stock bajo y despacho rápido para tu tienda.' },
  { emoji: '👗', title: 'Ropa y moda', desc: 'Colecciones, tallas, ventas y clientes. Tu boutique organizada desde el celular.' },
  { emoji: '💇', title: 'Salones de belleza', desc: 'Citas, servicios, clientas y productos. Tu salón profesional y ordenado.' },
  { emoji: '🔧', title: 'Ferreterías', desc: 'Materiales, bodega, despachos y clientes. Tu ferretería bajo control.' },
  { emoji: '🔩', title: 'Talleres', desc: 'Trabajos, repuestos, clientes y cobros. Tu taller siempre al día.' },
]

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Se adapta a tu negocio
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Nawi cambia sus colores, terminología y personalidad según tu tipo de negocio. 
            No es una app genérica — es tuya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-all hover:border-indigo-500/30">
              <div className="text-4xl mb-4">{f.emoji}</div>
              <h3 className="text-white font-bold text-xl mb-2">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-white font-black text-2xl">Nawi</h3>
            <p className="text-gray-500 text-sm mt-1">Tu nawal empresarial</p>
          </div>
          <div className="flex gap-8 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
        <div className="border-t border-white/5 mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>© 2026 Nawi. Hecho con ❤️ en Guatemala 🇬🇹</p>
          <p className="mt-1">Una palabra K'iche' que significa sabiduría y guía</p>
        </div>
      </div>
    </footer>
  )
}

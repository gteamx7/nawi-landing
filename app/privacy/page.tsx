export default function Privacy() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif', lineHeight: 1.7, color: '#1a1a1a' }}>
      <h1>Política de Privacidad — Nawi</h1>
      <p><strong>Última actualización:</strong> 14 de abril de 2026</p>

      <h2>1. Información que recopilamos</h2>
      <p>Nawi recopila la información que usted nos proporciona al registrarse: nombre del negocio, correo electrónico, contraseña, tipo de negocio y datos de operación como productos, ventas y clientes.</p>

      <h2>2. Uso de la información</h2>
      <p>Usamos su información para operar la aplicación, generar reportes de su negocio, proveer asistencia de inteligencia artificial y mejorar nuestros servicios.</p>

      <h2>3. Inteligencia Artificial</h2>
      <p>Nawi utiliza la API de Anthropic para proveer asistentes de IA (Nawales). Los datos de su negocio pueden ser procesados por estos servicios para generar análisis y recomendaciones.</p>

      <h2>4. Compartir información</h2>
      <p>No vendemos ni compartimos su información personal con terceros, excepto con proveedores de servicios necesarios para operar la app (Supabase, Railway, Anthropic) y cuando sea requerido por ley.</p>

      <h2>5. Facturación electrónica (FEL)</h2>
      <p>Si utiliza el módulo FEL, sus credenciales de certificador son almacenadas de forma segura y solo se usan para emitir facturas en su nombre ante la SAT de Guatemala.</p>

      <h2>6. Seguridad</h2>
      <p>Protegemos su información con cifrado JWT, conexiones HTTPS y almacenamiento seguro. Sin embargo, ningún sistema es 100% seguro.</p>

      <h2>7. Sus derechos</h2>
      <p>Puede solicitar acceso, corrección o eliminación de sus datos en cualquier momento contactándonos a <a href="mailto:soporte@nawi.app">soporte@nawi.app</a>.</p>

      <h2>8. Retención de datos</h2>
      <p>Conservamos sus datos mientras su cuenta esté activa. Al eliminar su cuenta, sus datos serán eliminados en un plazo de 30 días.</p>

      <h2>9. Contacto</h2>
      <p>Para consultas sobre privacidad: <a href="mailto:soporte@nawi.app">soporte@nawi.app</a> | WhatsApp: +502 5575-3099</p>

      <h2>10. Cambios a esta política</h2>
      <p>Notificaremos cambios importantes por correo electrónico o mediante aviso en la aplicación.</p>
    </main>
  )
}

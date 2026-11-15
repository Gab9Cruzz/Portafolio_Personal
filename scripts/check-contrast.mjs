// Verifica que los pares de color de la paleta cumplan WCAG AA.
// Uso: npm run check:contrast
const palette = {
  ink: '#0B0F17',
  midnight: '#0B0B4F',
  navy: '#002B5E',
  royal: '#00538C',
  sky: '#5AA9E6',
  silver: '#B8C4CA',
  snow: '#F5F7FA',
  white: '#FFFFFF',
  mutedLight: '#3D4B55',
}

// [texto, fondo, mínimo, descripción]
// 4.5 = texto normal AA · 3 = texto grande / componentes de interfaz
const pairs = [
  // Tema oscuro
  ['snow', 'ink', 4.5, 'oscuro: texto principal sobre fondo'],
  ['snow', 'midnight', 4.5, 'oscuro: texto principal sobre tarjeta'],
  ['snow', 'navy', 4.5, 'oscuro: texto principal sobre superficie 2'],
  ['silver', 'ink', 4.5, 'oscuro: texto secundario sobre fondo'],
  ['silver', 'midnight', 4.5, 'oscuro: texto secundario sobre tarjeta'],
  ['silver', 'navy', 4.5, 'oscuro: texto secundario sobre superficie 2'],
  ['sky', 'ink', 4.5, 'oscuro: enlaces/acentos sobre fondo'],
  ['sky', 'midnight', 4.5, 'oscuro: enlaces/acentos sobre tarjeta'],
  ['sky', 'navy', 4.5, 'oscuro: enlaces/acentos sobre superficie 2'],
  ['snow', 'royal', 4.5, 'botón primario (texto claro sobre royal)'],
  // Nota: `royal` sobre `ink` da ~2.4:1, por eso royal NUNCA se usa como texto en tema oscuro.
  // Solo es relleno de botón (con texto claro, par de arriba) o detalle decorativo.
  // Tema claro
  ['ink', 'snow', 4.5, 'claro: texto principal sobre fondo'],
  ['mutedLight', 'snow', 4.5, 'claro: texto secundario sobre fondo'],
  ['mutedLight', 'white', 4.5, 'claro: texto secundario sobre tarjeta'],
  ['royal', 'snow', 4.5, 'claro: enlaces/acentos sobre fondo'],
  ['royal', 'white', 4.5, 'claro: enlaces/acentos sobre tarjeta'],
]

const channel = (v) => {
  const c = v / 255
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
}
const luminance = (hex) => {
  const n = parseInt(hex.slice(1), 16)
  return (
    0.2126 * channel((n >> 16) & 255) + 0.7152 * channel((n >> 8) & 255) + 0.0722 * channel(n & 255)
  )
}
const ratio = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

let failed = 0
for (const [fg, bg, min, label] of pairs) {
  const r = ratio(palette[fg], palette[bg])
  const ok = r >= min
  if (!ok) failed++
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${r.toFixed(2).padStart(5)}:1 (mín ${min})  ${label}`)
}

if (failed) {
  console.error(`\n${failed} par(es) no cumplen WCAG AA.`)
  process.exit(1)
}
console.log('\nTodos los pares cumplen WCAG AA.')

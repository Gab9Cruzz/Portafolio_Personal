// Genera public/og-image.png (1200x630) para Open Graph. Uso: npm run assets
import sharp from 'sharp'

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0B0F17"/>
      <stop offset="0.55" stop-color="#0B0B4F"/>
      <stop offset="1" stop-color="#002B5E"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <g fill="none" stroke="#5AA9E6" stroke-opacity="0.12" stroke-width="3">
    <rect x="40" y="40" width="1120" height="550"/>
    <line x1="600" y1="40" x2="600" y2="590"/>
    <circle cx="600" cy="315" r="100"/>
    <rect x="40" y="165" width="180" height="300"/>
    <rect x="980" y="165" width="180" height="300"/>
  </g>
  <text x="90" y="120" font-family="Consolas, monospace" font-size="28" fill="#5AA9E6">// gabrielcruz.dev</text>
  <text x="90" y="290" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="120" fill="#F5F7FA">GABRIEL CRUZ</text>
  <text x="90" y="372" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="44" fill="#5AA9E6">Cybersecurity &amp; Networking</text>
  <text x="90" y="430" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="#B8C4CA">Ingeniería en Sistemas Inteligentes · Guayaquil, Ecuador</text>
  <rect x="90" y="500" width="150" height="6" fill="#00538C"/>
  <text x="1110" y="560" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="190" fill="#F5F7FA" fill-opacity="0.07">77</text>
</svg>`

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og-image.png')
console.log('Generado public/og-image.png')

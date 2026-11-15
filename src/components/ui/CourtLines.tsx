/**
 * Líneas de cancha de fútbol muy tenues, usadas como patrón de fondo (guiño deportivo sutil).
 * Dibujo genérico propio; no reproduce ningún escudo ni marca.
 */
export function CourtLines({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1050 680"
      preserveAspectRatio="xMidYMid slice"
      className={`h-full w-full text-accent opacity-[0.06] ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      aria-hidden="true"
      focusable="false"
    >
      {/* Perímetro y línea central */}
      <rect x="25" y="25" width="1000" height="630" />
      <line x1="525" y1="25" x2="525" y2="655" />
      <circle cx="525" cy="340" r="91.5" />
      <circle cx="525" cy="340" r="4" fill="currentColor" />
      {/* Áreas izquierda */}
      <rect x="25" y="138" width="165" height="403" />
      <rect x="25" y="230" width="55" height="220" />
      <path d="M190 280 A91.5 91.5 0 0 1 190 400" />
      {/* Áreas derecha */}
      <rect x="860" y="138" width="165" height="403" />
      <rect x="970" y="230" width="55" height="220" />
      <path d="M860 280 A91.5 91.5 0 0 0 860 400" />
    </svg>
  )
}

import type { Lang } from '../data/types'

const LOCALES: Record<Lang, string> = { es: 'es-EC', en: 'en-US' }

/** '2026-10' → 'oct. 2026' / 'Oct 2026' */
export function formatMonth(ym: string, lang: Lang): string {
  const [y, m] = ym.split('-').map(Number)
  return new Intl.DateTimeFormat(LOCALES[lang], { month: 'short', year: 'numeric' }).format(
    new Date(y, m - 1, 1),
  )
}

/** Temporada tipo fútbol (arranca en agosto): '2026-10' → '2026/27'; '2024-05' → '2023/24'. */
export function seasonLabel(ym: string): string {
  const [y, m] = ym.split('-').map(Number)
  const startYear = m >= 8 ? y : y - 1
  return `${startYear}/${String((startYear + 1) % 100).padStart(2, '0')}`
}

export function formatNumber(n: number, lang: Lang): string {
  return new Intl.NumberFormat(LOCALES[lang]).format(n)
}

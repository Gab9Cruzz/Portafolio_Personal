import type { L10n } from './types'

export interface Stat {
  id: string
  value: number
  prefix?: string
  suffix?: string
  label: L10n
}

// Solo cifras reales del CV. No inventes números aquí.
export const scoreboard: Stat[] = [
  {
    id: 'tickets',
    value: 1000,
    suffix: '+',
    label: { es: 'Tickets resueltos en un año', en: 'Tickets resolved in a year' },
  },
  {
    id: 'identities',
    value: 100,
    prefix: '~',
    label: { es: 'Identidades gestionadas', en: 'Identities managed' },
  },
  {
    id: 'migration',
    value: 2,
    prefix: '~',
    suffix: ' TB',
    label: { es: 'Migrados a SharePoint', en: 'Migrated to SharePoint' },
  },
  {
    id: 'roles',
    value: 3,
    label: { es: 'Roles en TI', en: 'IT roles' },
  },
]

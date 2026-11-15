import { createContext, useContext } from 'react'
import type { L10n, Lang } from '../data/types'

export interface I18nValue {
  lang: Lang
  setLang: (lang: Lang) => void
  /** Texto de interfaz por ruta, p. ej. t('hero.cv') */
  t: (path: string) => string
  /** Elige el idioma activo de un texto { es, en } */
  l: (text: L10n) => string
}

export const I18nContext = createContext<I18nValue | null>(null)

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n debe usarse dentro de <I18nProvider>')
  return ctx
}

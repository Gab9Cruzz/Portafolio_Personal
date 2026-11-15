import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { L10n, Lang } from '../data/types'
import es from './es.json'
import en from './en.json'
import { I18nContext, type I18nValue } from './context'

const dictionaries: Record<Lang, unknown> = { es, en }
const STORAGE_KEY = 'gc-lang'

function readStoredLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'es' || stored === 'en') return stored
  } catch {
    /* sin acceso a localStorage */
  }
  return 'es' // español por defecto
}

function lookup(dict: unknown, path: string): string | undefined {
  let node: unknown = dict
  for (const key of path.split('.')) {
    if (node && typeof node === 'object' && key in node) {
      node = (node as Record<string, unknown>)[key]
    } else {
      return undefined
    }
  }
  return typeof node === 'string' ? node : undefined
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignorar */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = lookup(dictionaries[lang], 'meta.title') ?? document.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', lookup(dictionaries[lang], 'meta.description') ?? '')
  }, [lang])

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      setLang,
      t: (path) => lookup(dictionaries[lang], path) ?? lookup(dictionaries.es, path) ?? path,
      l: (text: L10n) => text[lang] ?? text.es,
    }),
    [lang, setLang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

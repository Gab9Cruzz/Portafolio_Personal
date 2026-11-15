import type { Lang } from '../../data/types'
import { useI18n } from '../../i18n/context'

const LANGS: Lang[] = ['es', 'en']

export function LangSwitch() {
  const { lang, setLang, t } = useI18n()

  return (
    <div
      role="group"
      aria-label={t('a11y.language')}
      className="inline-flex h-9 overflow-hidden rounded-md border border-line font-mono text-xs"
    >
      {LANGS.map((code) => {
        const active = lang === code
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-pressed={active}
            onClick={() => setLang(code)}
            className={`px-2.5 uppercase transition-colors ${
              active ? 'bg-primary text-on-primary' : 'text-muted hover:text-fg'
            }`}
          >
            {code}
          </button>
        )
      })}
    </div>
  )
}

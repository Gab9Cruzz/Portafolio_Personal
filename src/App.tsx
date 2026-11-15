import { I18nProvider } from './i18n/I18nProvider'
import { useI18n } from './i18n/context'
import { ThemeProvider } from './theme/ThemeProvider'
import { LangSwitch } from './components/ui/LangSwitch'
import { ThemeToggle } from './components/ui/ThemeToggle'
import { profile } from './data/profile'
import { experience } from './data/experience'
import { formatMonth, seasonLabel } from './lib/format'

// Página temporal de la etapa 2: comprueba datos, idioma y tema. La reemplaza el layout real (etapa 3).
function Preview() {
  const { t, l, lang } = useI18n()
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-6 px-4 py-16">
      <div className="flex gap-2">
        <LangSwitch />
        <ThemeToggle />
      </div>
      <p className="font-mono text-sm text-accent">{t('hero.eyebrow')}</p>
      <h1 className="font-display text-6xl font-bold tracking-tight uppercase">{profile.name}</h1>
      <p className="text-lg text-muted">{l(profile.role)}</p>
      <p>{l(profile.tagline)}</p>
      <ul className="grid gap-2 font-mono text-sm text-muted">
        {experience.map((e) => (
          <li key={e.id}>
            {t('experience.season')} {seasonLabel(e.start)} · {e.company} ·{' '}
            {formatMonth(e.start, lang)}
            {' → '}
            {e.end ? formatMonth(e.end, lang) : t('experience.present')}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default function App() {
  return (
    <I18nProvider>
      <ThemeProvider>
        <Preview />
      </ThemeProvider>
    </I18nProvider>
  )
}

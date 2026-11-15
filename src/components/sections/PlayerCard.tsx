import { profile } from '../../data/profile'
import { useI18n } from '../../i18n/context'

/** Ficha técnica estilo "ficha de jugador": guiño deportivo sutil con el dorsal 77. */
export function PlayerCard() {
  const { t, l } = useI18n()

  const rows: [string, string][] = [
    [t('card.current'), l(profile.card.current)],
    [t('card.base'), profile.location],
    [t('card.focus'), l(profile.card.focus)],
    [t('card.languages'), l(profile.card.languages)],
  ]

  return (
    <aside
      aria-label={t('card.title')}
      className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-xl shadow-black/20"
    >
      <div className="relative flex items-center gap-4 bg-gradient-to-br from-royal to-navy px-6 pt-5 pb-6 text-snow">
        <img
          src={`${import.meta.env.BASE_URL}${profile.photo}`}
          alt={l(profile.photoAlt)}
          width={96}
          height={96}
          fetchPriority="high"
          decoding="async"
          className="relative z-10 h-20 w-20 shrink-0 rounded-xl object-cover ring-2 ring-snow/40 sm:h-24 sm:w-24"
        />
        <div className="relative z-10 min-w-0">
          <p className="font-mono text-xs tracking-widest uppercase opacity-90">
            {t('card.title')}
          </p>
          <p className="mt-1 font-display text-3xl leading-none font-bold tracking-wide uppercase">
            {profile.name}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-2 right-3 font-display text-[7rem] leading-none font-bold text-snow/10 select-none"
        >
          {profile.jersey}
        </span>
      </div>

      <dl className="divide-y divide-line px-6 py-2">
        {rows.map(([label, value]) => (
          <div key={label} className="grid grid-cols-[6.5rem_1fr] gap-3 py-3 text-sm">
            <dt className="font-mono text-xs tracking-wide text-muted uppercase">{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
        <div className="grid grid-cols-[6.5rem_1fr] gap-3 py-3 text-sm">
          <dt className="font-mono text-xs tracking-wide text-muted uppercase">
            {t('card.number')}
          </dt>
          <dd className="font-display text-xl leading-none font-bold text-accent">
            {profile.jersey}
          </dd>
        </div>
      </dl>

      <p className="flex items-center gap-2 border-t border-line bg-bg/40 px-6 py-3 text-sm text-muted">
        <span aria-hidden="true" className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky" />
        </span>
        {l(profile.availability)}
      </p>
    </aside>
  )
}

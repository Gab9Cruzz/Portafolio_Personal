import { scoreboard } from '../../data/scoreboard'
import { useI18n } from '../../i18n/context'
import { Section } from '../layout/Section'
import { CountUp } from '../ui/CountUp'
import { CourtLines } from '../ui/CourtLines'
import { Reveal } from '../ui/Reveal'

/** Cifras clave presentadas como un marcador de estadio. Solo datos reales del CV. */
export function Scoreboard() {
  const { t, l } = useI18n()

  return (
    <Section
      id="scoreboard"
      eyebrow={t('sections.scoreboard.eyebrow')}
      title={t('sections.scoreboard.title')}
      background={<CourtLines />}
    >
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-royal/60 bg-midnight text-snow shadow-2xl shadow-black/30">
          <div className="flex items-center justify-between border-b border-royal/50 bg-navy/60 px-5 py-2.5 font-mono text-xs tracking-widest text-silver uppercase">
            <span>{t('scoreboard.caption')}</span>
            <span aria-hidden="true" className="hidden sm:inline">
              GC · 77
            </span>
          </div>

          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {scoreboard.map((stat, i) => (
              <div
                key={stat.id}
                className={`flex flex-col-reverse justify-between gap-3 px-5 py-8 sm:px-7 ${
                  i % 2 === 1 ? 'border-l border-royal/40' : ''
                } ${i > 1 ? 'border-t border-royal/40 lg:border-t-0' : ''} ${
                  i > 0 ? 'lg:border-l lg:border-royal/40' : ''
                }`}
              >
                <dt className="font-mono text-xs tracking-wide text-silver uppercase sm:text-sm">
                  {l(stat.label)}
                </dt>
                <dd className="font-display text-5xl leading-none font-bold tabular-nums sm:text-6xl xl:text-7xl">
                  {stat.prefix && <span className="text-sky">{stat.prefix}</span>}
                  <CountUp value={stat.value} />
                  {stat.suffix && <span className="text-sky">{stat.suffix}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </Section>
  )
}

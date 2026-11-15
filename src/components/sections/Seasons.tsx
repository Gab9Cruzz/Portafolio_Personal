import { experience } from '../../data/experience'
import { useI18n } from '../../i18n/context'
import { formatMonth, seasonLabel } from '../../lib/format'
import { Section } from '../layout/Section'
import { Reveal } from '../ui/Reveal'

/** Experiencia como línea de tiempo de "temporadas" (la temporada arranca en agosto). */
export function Seasons() {
  const { t, l, lang } = useI18n()

  return (
    <Section
      id="experience"
      eyebrow={t('sections.experience.eyebrow')}
      title={t('sections.experience.title')}
      alt
    >
      <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-8">
        {experience.map((job) => {
          const current = job.end === null
          return (
            <li key={job.id} className="relative">
              <span
                aria-hidden="true"
                className={`absolute top-2 -left-[1.9rem] h-3 w-3 rounded-full ring-4 ring-bg sm:-left-[2.4rem] ${
                  current ? 'bg-sky' : 'bg-royal'
                }`}
              />
              <Reveal>
                <article className="grid gap-4 md:grid-cols-[11rem_1fr] md:gap-8">
                  <header>
                    <p className="font-display text-3xl leading-none font-bold tracking-wide text-accent uppercase">
                      {t('experience.season')} {seasonLabel(job.start)}
                    </p>
                    <p className="mt-2 font-mono text-xs text-muted">
                      <time dateTime={job.start}>{formatMonth(job.start, lang)}</time>
                      {' – '}
                      {job.end ? (
                        <time dateTime={job.end}>{formatMonth(job.end, lang)}</time>
                      ) : (
                        t('experience.present')
                      )}
                    </p>
                    {current && (
                      <p className="mt-2 inline-block rounded-full border border-sky/50 px-2.5 py-0.5 font-mono text-[0.7rem] tracking-wide text-accent uppercase">
                        {t('experience.current')}
                      </p>
                    )}
                  </header>

                  <div className="rounded-xl border border-line bg-surface/70 p-5 sm:p-6">
                    <h3 className="font-display text-2xl font-semibold tracking-wide uppercase">
                      {job.company}
                    </h3>
                    <p className="text-muted">
                      {l(job.role)} · {job.location}
                    </p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.95rem] leading-relaxed marker:text-accent">
                      {job.bullets.map((b, i) => (
                        <li key={i}>{l(b)}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}

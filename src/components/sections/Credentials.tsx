import { certifications, education } from '../../data/education'
import { useI18n } from '../../i18n/context'
import { formatMonth } from '../../lib/format'
import { Section } from '../layout/Section'
import { Reveal } from '../ui/Reveal'
import { ArrowUpRightIcon } from '../ui/icons'

export function Credentials() {
  const { t, l, lang } = useI18n()
  const featured = certifications.filter((c) => c.featured)
  const others = certifications.filter((c) => !c.featured)

  return (
    <Section
      id="credentials"
      eyebrow={t('sections.credentials.eyebrow')}
      title={t('sections.credentials.title')}
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
        <Reveal>
          <h3 className="mb-4 font-mono text-sm tracking-wide text-accent uppercase">
            {t('credentials.education')}
          </h3>
          <article className="rounded-xl border border-line bg-surface/70 p-5 sm:p-6">
            <h4 className="font-display text-2xl font-semibold tracking-wide uppercase">
              {education.school}
            </h4>
            <p className="mt-1">{l(education.degree)}</p>
            <p className="text-muted">{l(education.status)}</p>
            <p className="mt-4 border-t border-line pt-3 font-mono text-xs text-muted">
              {t('credentials.graduation')}:{' '}
              <time dateTime={education.graduation} className="text-fg">
                {formatMonth(education.graduation, lang)}
              </time>
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="mb-4 font-mono text-sm tracking-wide text-accent uppercase">
            {t('credentials.certifications')}
          </h3>

          <ul className="space-y-4">
            {featured.map((c) => (
              <li
                key={c.id}
                className="rounded-xl border border-royal bg-gradient-to-br from-midnight to-navy/70 p-5 text-snow sm:p-6"
              >
                <p className="font-mono text-xs text-silver">
                  {c.issuer} · {c.year}
                </p>
                <h4 className="mt-1 font-display text-2xl font-semibold tracking-wide uppercase">
                  {c.name}
                </h4>
                {c.topics && (
                  <p className="mt-2 text-sm leading-relaxed text-silver">{l(c.topics)}</p>
                )}
                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-sky hover:underline"
                  >
                    {t('credentials.viewCredential')} <ArrowUpRightIcon />
                    <span className="sr-only"> {t('a11y.external')}</span>
                  </a>
                )}
              </li>
            ))}

            {others.map((c) => (
              <li key={c.id} className="rounded-xl border border-line bg-surface/50 px-5 py-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h4 className="font-semibold">{c.name}</h4>
                  <p className="font-mono text-xs text-muted">
                    {c.issuer !== '—' && `${c.issuer} · `}
                    {c.year}
                  </p>
                </div>
                {c.items && (
                  <ul className="mt-2 list-disc space-y-0.5 pl-5 text-sm text-muted marker:text-accent">
                    {c.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}

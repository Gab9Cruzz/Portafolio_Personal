import { profile } from '../../data/profile'
import { education } from '../../data/education'
import { useI18n } from '../../i18n/context'
import { Section } from '../layout/Section'
import { Reveal } from '../ui/Reveal'

export function About() {
  const { t, l } = useI18n()

  const facts: [string, string][] = [
    [t('about.location'), profile.location],
    [t('about.education'), `${education.school} · ${l(education.degree)}`],
    [t('about.languages'), l(profile.card.languages)],
  ]

  return (
    <Section id="about" eyebrow={t('sections.about.eyebrow')} title={t('sections.about.title')}>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {profile.summary.map((p, i) => (
            <p key={i}>{l(p)}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="divide-y divide-line rounded-xl border border-line bg-surface/70">
            {facts.map(([label, value]) => (
              <div key={label} className="px-5 py-4">
                <dt className="font-mono text-xs tracking-wide text-accent uppercase">{label}</dt>
                <dd className="mt-1">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}

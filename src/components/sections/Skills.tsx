import { skillGroups } from '../../data/skills'
import { useI18n } from '../../i18n/context'
import { Section } from '../layout/Section'
import { Chip } from '../ui/Chip'
import { Reveal } from '../ui/Reveal'

export function Skills() {
  const { t, l } = useI18n()

  return (
    <Section
      id="skills"
      eyebrow={t('sections.skills.eyebrow')}
      title={t('sections.skills.title')}
      intro={t('skills.intro')}
      alt
    >
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <li key={group.id} className="contents">
            <Reveal delay={(i % 3) * 0.08} className="h-full">
              <section
                aria-labelledby={`skills-${group.id}`}
                className="h-full rounded-xl border border-line bg-bg/50 p-5 sm:p-6"
              >
                <h3
                  id={`skills-${group.id}`}
                  className="font-display text-xl font-semibold tracking-wide text-accent uppercase"
                >
                  {l(group.title)}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const label = typeof item === 'string' ? item : l(item)
                    return (
                      <li key={label}>
                        <Chip>{label}</Chip>
                      </li>
                    )
                  })}
                </ul>
              </section>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}

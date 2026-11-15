import { profile } from '../../data/profile'
import { useI18n } from '../../i18n/context'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { GithubIcon, LinkedinIcon } from '../ui/icons'
import { ContactForm } from './ContactForm'

export function Contact() {
  const { t } = useI18n()

  return (
    <Section
      id="contact"
      eyebrow={t('sections.contact.eyebrow')}
      title={t('sections.contact.title')}
      alt
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="max-w-md text-lg leading-relaxed text-muted">{t('contact.intro')}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={profile.linkedin} variant="primary" icon={<LinkedinIcon />} external>
              {t('contact.linkedin')}
            </Button>
            <Button href={profile.github} icon={<GithubIcon />} external>
              {t('contact.github')}
            </Button>
          </div>
          <p className="mt-6 font-mono text-sm text-muted">{profile.location}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-xl border border-line bg-bg/60 p-5 sm:p-6">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

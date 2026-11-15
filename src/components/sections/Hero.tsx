import { profile } from '../../data/profile'
import { useI18n } from '../../i18n/context'
import { Button } from '../ui/Button'
import { DownloadIcon, GithubIcon, LinkedinIcon } from '../ui/icons'
import { PlayerCard } from './PlayerCard'

export function Hero() {
  const { t, l } = useI18n()
  const [first, ...rest] = profile.name.split(' ')

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      <div aria-hidden="true" className="hero-glow absolute inset-0 -z-10" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <div className="rise">
            <p className="font-mono text-sm text-accent">{t('hero.eyebrow')}</p>
            <p className="mt-6 text-muted">{t('hero.greeting')}</p>
            <h1
              id="hero-title"
              className="font-display text-7xl leading-[0.9] font-bold tracking-tight uppercase sm:text-9xl"
            >
              {first} <span className="block text-accent">{rest.join(' ')}</span>
            </h1>
          </div>

          <div className="rise" style={{ animationDelay: '0.1s' }}>
            <p className="mt-6 font-display text-2xl tracking-wide text-fg sm:text-3xl">
              {l(profile.role)}
            </p>
            <p className="mt-3 max-w-xl text-lg text-muted">{l(profile.tagline)}</p>
          </div>

          <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: '0.2s' }}>
            <Button
              href={`${import.meta.env.BASE_URL}${profile.cvFile}`}
              variant="primary"
              icon={<DownloadIcon />}
              external
            >
              {t('hero.cv')}
            </Button>
            <Button href={profile.github} icon={<GithubIcon />} external>
              {t('hero.github')}
            </Button>
            <Button href={profile.linkedin} icon={<LinkedinIcon />} external>
              {t('hero.linkedin')}
            </Button>
          </div>
        </div>

        <div className="rise" style={{ animationDelay: '0.25s' }}>
          <PlayerCard />
        </div>
      </div>
    </section>
  )
}

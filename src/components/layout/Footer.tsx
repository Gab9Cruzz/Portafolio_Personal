import { profile } from '../../data/profile'
import { useI18n } from '../../i18n/context'
import { NAV_ITEMS } from './Navbar'
import { GithubIcon, LinkedinIcon } from '../ui/icons'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl font-semibold tracking-wide">{profile.wordmark}</p>
          <p className="mt-1 text-sm text-muted">
            © {new Date().getFullYear()} {profile.fullName}. {t('footer.rights')}
          </p>
          <p className="text-sm text-muted">{t('footer.built')}</p>
        </div>

        <nav aria-label={t('a11y.mainNav')}>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
            {NAV_ITEMS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="rounded py-1 hover:text-fg">
                  {t(`nav.${id}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex gap-3 text-xl">
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub ${t('a11y.external')}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line hover:border-accent hover:text-accent"
            >
              <GithubIcon />
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn ${t('a11y.external')}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line hover:border-accent hover:text-accent"
            >
              <LinkedinIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

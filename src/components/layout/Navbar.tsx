import { useEffect, useRef, useState } from 'react'
import { profile } from '../../data/profile'
import { useI18n } from '../../i18n/context'
import { LangSwitch } from '../ui/LangSwitch'
import { ThemeToggle } from '../ui/ThemeToggle'
import { CloseIcon, MenuIcon } from '../ui/icons'
import { useActiveSection } from './useActiveSection'

export const NAV_ITEMS = ['about', 'experience', 'projects', 'skills', 'credentials', 'contact']

export function Navbar() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const active = useActiveSection(NAV_ITEMS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape cierra el menú móvil y devuelve el foco al botón.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const linkClass = (id: string) =>
    `rounded px-3 py-2 text-sm transition-colors hover:text-fg ${
      active === id ? 'text-fg' : 'text-muted'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled || open
          ? 'border-line bg-bg/85 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-md bg-midnight font-display text-lg font-bold text-snow ring-1 ring-royal"
          >
            {profile.initials}
          </span>
          <span className="hidden font-display text-xl font-semibold tracking-wide xs:inline">
            {profile.wordmark}
          </span>
          <span className="sr-only xs:hidden">{profile.siteName}</span>
        </a>

        <nav aria-label={t('a11y.mainNav')} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={linkClass(id)}
                  aria-current={active === id ? 'true' : undefined}
                >
                  {t(`nav.${id}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitch />
          <ThemeToggle />
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-xl md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t('a11y.closeMenu') : t('a11y.openMenu')}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label={t('a11y.mainNav')}
        hidden={!open}
        className="border-t border-line bg-bg/95 md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
          {NAV_ITEMS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block rounded px-3 py-3 font-display text-xl tracking-wide uppercase"
              >
                {t(`nav.${id}`)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

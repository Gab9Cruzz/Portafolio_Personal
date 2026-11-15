import { useI18n } from '../../i18n/context'
import { useTheme } from '../../theme/context'
import { MoonIcon, SunIcon } from './icons'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { t } = useI18n()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? t('a11y.switchToLight') : t('a11y.switchToDark')}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-lg text-fg transition-colors hover:border-accent hover:text-accent"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

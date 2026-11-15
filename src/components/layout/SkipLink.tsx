import { useI18n } from '../../i18n/context'

export function SkipLink() {
  const { t } = useI18n()
  return (
    <a
      href="#main"
      className="sr-only rounded-md bg-primary px-4 py-2 text-sm font-semibold text-on-primary focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100]"
    >
      {t('a11y.skip')}
    </a>
  )
}

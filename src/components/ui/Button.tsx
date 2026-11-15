import type { ReactNode } from 'react'
import { useI18n } from '../../i18n/context'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline'
  icon?: ReactNode
  /** Abre en pestaña nueva */
  external?: boolean
  className?: string
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-offset-4'

const variants = {
  primary: 'bg-primary text-on-primary hover:bg-navy hover:shadow-lg hover:shadow-primary/30',
  outline: 'border border-line text-fg hover:border-accent hover:text-accent',
}

export function Button({
  href,
  children,
  variant = 'outline',
  icon,
  external,
  className = '',
}: ButtonProps) {
  const { t } = useI18n()
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {icon && <span className="text-base">{icon}</span>}
      {children}
      {external && <span className="sr-only"> {t('a11y.external')}</span>}
    </a>
  )
}

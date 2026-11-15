import type { ReactNode } from 'react'
import { Reveal } from '../ui/Reveal'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
  /** Fondo alterno para dar ritmo entre secciones */
  alt?: boolean
  className?: string
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  alt,
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative py-20 md:py-28 ${alt ? 'bg-surface/60' : ''} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-10 md:mb-14">
          <p className="font-mono text-sm text-accent">{eyebrow}</p>
          <h2
            id={`${id}-title`}
            className="mt-2 font-display text-4xl font-bold tracking-tight uppercase sm:text-5xl"
          >
            {title}
          </h2>
          {intro && <p className="mt-3 max-w-2xl text-muted">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'
import { formatNumber } from '../../lib/format'
import { useI18n } from '../../i18n/context'

interface CountUpProps {
  value: number
  duration?: number
}

/** Cuenta de 0 al valor al entrar en pantalla. Con movimiento reducido muestra el valor final. */
export function CountUp({ value, duration = 1.4 }: CountUpProps) {
  const { lang } = useI18n()
  const reduce = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (reduce || !inView) return
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setShown(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reduce, value, duration])

  // Con movimiento reducido no se anima: se muestra directamente el valor final.
  const display = reduce ? value : shown

  return (
    <span ref={ref}>
      <span aria-hidden="true">{formatNumber(display, lang)}</span>
      <span className="sr-only">{formatNumber(value, lang)}</span>
    </span>
  )
}

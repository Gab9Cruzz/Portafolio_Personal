import { useEffect, useState } from 'react'

/** Devuelve el id de la sección visible, para resaltar el enlace activo del menú. */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState('')

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )

    // Las secciones bajo el hero se cargan de forma diferida: se reintenta hasta que existan.
    const observed = new Set<string>()
    const observeAvailable = () => {
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && !observed.has(id)) {
          observer.observe(el)
          observed.add(id)
        }
      }
      return observed.size === ids.length
    }
    let timer: number | undefined
    if (!observeAvailable()) {
      timer = window.setInterval(() => {
        if (observeAvailable()) window.clearInterval(timer)
      }, 250)
    }

    return () => {
      window.clearInterval(timer)
      observer.disconnect()
    }
  }, [ids])

  return active
}

import { useEffect } from 'react'
import { About } from './components/sections/About'
import { Scoreboard } from './components/sections/Scoreboard'
import { Seasons } from './components/sections/Seasons'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Credentials } from './components/sections/Credentials'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/layout/Footer'

/** Todo lo que está bajo el hero: se carga en un chunk aparte para acelerar el primer pintado. */
export default function Rest() {
  // Si la URL trae #seccion, se desplaza hasta ella cuando el contenido ya existe.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <>
      <About />
      <Scoreboard />
      <Seasons />
      <Projects />
      <Skills />
      <Credentials />
      <Contact />
      <Footer />
    </>
  )
}

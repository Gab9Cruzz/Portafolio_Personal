import { I18nProvider } from './i18n/I18nProvider'
import { ThemeProvider } from './theme/ThemeProvider'
import { SkipLink } from './components/layout/SkipLink'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Scoreboard } from './components/sections/Scoreboard'
import { Seasons } from './components/sections/Seasons'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Credentials } from './components/sections/Credentials'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/layout/Footer'

export default function App() {
  return (
    <I18nProvider>
      <ThemeProvider>
        <SkipLink />
        <Navbar />
        <main id="main" tabIndex={-1} className="outline-none">
          <Hero />
          <About />
          <Scoreboard />
          <Seasons />
          <Projects />
          <Skills />
          <Credentials />
          <Contact />
        </main>
        <Footer />
      </ThemeProvider>
    </I18nProvider>
  )
}

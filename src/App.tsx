import { I18nProvider } from './i18n/I18nProvider'
import { ThemeProvider } from './theme/ThemeProvider'
import { SkipLink } from './components/layout/SkipLink'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Scoreboard } from './components/sections/Scoreboard'
import { Seasons } from './components/sections/Seasons'

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
        </main>
      </ThemeProvider>
    </I18nProvider>
  )
}

import { I18nProvider } from './i18n/I18nProvider'
import { ThemeProvider } from './theme/ThemeProvider'
import { SkipLink } from './components/layout/SkipLink'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'

export default function App() {
  return (
    <I18nProvider>
      <ThemeProvider>
        <SkipLink />
        <Navbar />
        <main id="main" tabIndex={-1} className="outline-none">
          <Hero />
        </main>
      </ThemeProvider>
    </I18nProvider>
  )
}

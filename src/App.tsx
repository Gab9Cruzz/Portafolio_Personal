import { lazy, Suspense } from 'react'
import { LazyMotion } from 'framer-motion'
import { I18nProvider } from './i18n/I18nProvider'
import { ThemeProvider } from './theme/ThemeProvider'
import { SkipLink } from './components/layout/SkipLink'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'

const Rest = lazy(() => import('./Rest'))
const loadFeatures = () => import('./lib/motionFeatures').then((mod) => mod.default)

export default function App() {
  return (
    <LazyMotion features={loadFeatures} strict>
      <I18nProvider>
        <ThemeProvider>
          <SkipLink />
          <Navbar />
          <main id="main" tabIndex={-1} className="outline-none">
            <Hero />
            <Suspense fallback={<div aria-hidden="true" className="min-h-screen" />}>
              <Rest />
            </Suspense>
          </main>
        </ThemeProvider>
      </I18nProvider>
    </LazyMotion>
  )
}

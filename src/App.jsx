import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { HowItWorks, PlanStudy, SmartTools, CTA } from './components/Sections'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import AuthModal from './components/AuthModal'

function App() {
  const [authOpen, setAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState('login')

  const openAuth = (mode) => {
    setAuthMode(mode)
    setAuthOpen(true)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-gray-900 dark:text-white">
      <Navbar onOpenAuth={openAuth} />

      <main>
        <Hero onWatch={() => openAuth('login')} onStart={() => openAuth('signup')} />
        <HowItWorks />
        <PlanStudy />
        <SmartTools />
        <CTA />
        <FAQ />
      </main>

      <Footer />

      <AuthModal open={authOpen} mode={authMode} onClose={() => setAuthOpen(false)} />
    </div>
  )
}

export default App

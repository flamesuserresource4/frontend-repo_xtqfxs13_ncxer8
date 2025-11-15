import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Navbar({ onOpenAuth }) {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const initial = stored || 'light'
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  const NavLinks = ({ onClick }) => (
    <ul className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
      {['Features', 'Pricing', 'Automation'].map((item) => (
        <li key={item}>
          <a href={`#${item.toLowerCase()}`} onClick={onClick} className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-aivy-blue transition-colors">
            {item}
          </a>
        </li>
      ))}
      <li>
        <button onClick={() => onOpenAuth('login')} className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-aivy-blue transition-colors">Log In</button>
      </li>
      <li>
        <button onClick={() => onOpenAuth('signup')} className="rounded-full bg-gradient-to-r from-aivy-purple to-aivy-blue text-white px-5 py-2 text-sm font-semibold shadow-glow hover:opacity-90 transition">Sign Up</button>
      </li>
      <li>
        <button onClick={toggleTheme} aria-label="Toggle Theme" className="p-2 rounded-full bg-white/60 dark:bg-white/10 border border-white/50 backdrop-blur hover:bg-white/80 dark:hover:bg-white/20 transition">
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </li>
    </ul>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/50 bg-white/70 dark:bg-zinc-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/60 px-4 py-3 shadow-sm">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-aivy-purple to-aivy-blue shadow-glow" />
            <span className="font-semibold tracking-tight text-gray-900 dark:text-white">AIVY</span>
          </a>

          <nav className="hidden lg:block">
            <NavLinks />
          </nav>

          <button onClick={() => setOpen(true)} className="lg:hidden p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10">
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-zinc-900 p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-aivy-purple to-aivy-blue shadow-glow" />
                <span className="font-semibold tracking-tight text-gray-900 dark:text-white">AIVY</span>
              </div>
              <button onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10">
                <X />
              </button>
            </div>
            <NavLinks onClick={() => setOpen(false)} />
            <div className="mt-8 flex gap-4 text-gray-500">
              <a href="#" aria-label="Instagram" className="hover:text-gray-900 dark:hover:text-white"><Instagram size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-900 dark:hover:text-white"><Linkedin size={18} /></a>
              <a href="#" aria-label="YouTube" className="hover:text-gray-900 dark:hover:text-white"><Youtube size={18} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

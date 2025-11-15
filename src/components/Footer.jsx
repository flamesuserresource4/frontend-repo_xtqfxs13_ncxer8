import { Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/60">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-aivy-purple to-aivy-blue shadow-glow" />
          <span className="font-semibold tracking-tight text-gray-900 dark:text-white">AIVY</span>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-end text-sm text-gray-600 dark:text-gray-300">
          <nav className="flex gap-6">
            <a href="#about" className="hover:text-gray-900 dark:hover:text-white">About</a>
            <a href="#contact" className="hover:text-gray-900 dark:hover:text-white">Contact</a>
            <a href="#privacy" className="hover:text-gray-900 dark:hover:text-white">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-900 dark:hover:text-white">Terms</a>
          </nav>
          <div className="flex gap-4 text-gray-500">
            <a href="#" aria-label="Instagram" className="hover:text-gray-900 dark:hover:text-white"><Instagram size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-900 dark:hover:text-white"><Linkedin size={18} /></a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-900 dark:hover:text-white"><Youtube size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

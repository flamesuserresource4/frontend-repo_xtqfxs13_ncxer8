import { useEffect, useRef, useState } from 'react'

export default function AuthModal({ open, mode = 'login', onClose }) {
  const dialogRef = useRef(null)
  const videoRef = useRef(null)
  const [tab, setTab] = useState(mode)

  useEffect(() => {
    setTab(mode)
  }, [mode])

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal()
      videoRef.current && (videoRef.current.currentTime = 0)
    } else {
      dialogRef.current?.close()
    }
  }, [open])

  const videoSrcMp4 = tab === 'login' ? '/auth/login.mp4' : '/auth/signup.mp4'
  const imageSrcWebp = tab === 'login' ? '/auth/login.webp' : '/auth/signup.webp'

  return (
    <dialog ref={dialogRef} className="backdrop:bg-black/40 rounded-2xl p-0 w-[min(960px,92vw)] border border-white/70 bg-white/80 dark:bg-zinc-900/80 backdrop-blur">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-1/2 aspect-video md:aspect-auto">
          <video ref={videoRef} src={videoSrcMp4} poster={imageSrcWebp} autoPlay loop muted playsInline className="h-full w-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none" />
        </div>
        <div className="md:w-1/2 p-6">
          <div className="flex gap-2 mb-4">
            <button onClick={() => setTab('login')} className={`px-4 py-2 rounded-full text-sm font-semibold ${tab==='login' ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white/60 dark:bg-white/10'}`}>Log In</button>
            <button onClick={() => setTab('signup')} className={`px-4 py-2 rounded-full text-sm font-semibold ${tab==='signup' ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white/60 dark:bg-white/10'}`}>Sign Up</button>
          </div>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{tab === 'login' ? 'Welcome back' : 'Create your account'}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">Experience the AI study planner preview.</p>
          <div className="mt-4 grid gap-3">
            <input placeholder="Email" className="px-3 py-2 rounded-lg border border-white/60 bg-white/70 dark:bg-white/10" />
            <input type="password" placeholder="Password" className="px-3 py-2 rounded-lg border border-white/60 bg-white/70 dark:bg-white/10" />
            <button className="mt-2 rounded-full bg-gradient-to-r from-aivy-purple to-aivy-blue text-white px-6 py-2 font-semibold shadow-glow">Continue</button>
          </div>
          <button onClick={onClose} className="mt-6 text-sm text-gray-600 dark:text-gray-300 hover:underline">Close</button>
        </div>
      </div>
    </dialog>
  )
}

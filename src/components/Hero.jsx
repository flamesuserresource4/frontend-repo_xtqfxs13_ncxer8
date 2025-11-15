import Spline from '@splinetool/react-spline'

export default function Hero({ onWatch, onStart }) {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-aivy-radial" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-600 dark:bg-white/10 dark:text-gray-300">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-aivy-purple to-aivy-blue animate-pulse" />
              New: AI Smart Uploads + Gamified Planner
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white animate-fade-in">
              Your Notes. Your Plan. Your Success.
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl animate-fade-in" style={{animationDelay:'100ms'}}>
              AIVY centralizes your notes and builds a personalized AI study schedule — so you can focus on learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in" style={{animationDelay:'200ms'}}>
              <button onClick={onStart} className="rounded-full bg-gradient-to-r from-aivy-purple to-aivy-blue text-white px-6 py-3 font-semibold shadow-glow hover:opacity-90 transition">
                Start Your Plan with AI
              </button>
              <button onClick={onWatch} className="rounded-full border border-gray-200 dark:border-white/20 bg-white/70 dark:bg-white/10 backdrop-blur px-6 py-3 font-semibold text-gray-800 dark:text-white hover:bg-white/90 dark:hover:bg-white/20 transition">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/50 bg-white/50 dark:bg-white/10 backdrop-blur">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

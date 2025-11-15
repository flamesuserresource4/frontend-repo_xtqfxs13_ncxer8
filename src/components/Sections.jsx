import { motion } from 'framer-motion'

export function HowItWorks() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-aivy-gradient" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">AI-Powered Notes.</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">AIVY extracts text from PDFs, images, or documents and automatically organizes everything for faster learning.</p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-aivy-blue" /> Drag & drop PDFs or images</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-aivy-purple" /> OCR-powered text extraction</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-aivy-purple to-aivy-blue" /> Instant mind map + summary preview</li>
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[0,1,2,3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/50 bg-white/70 dark:bg-white/10 backdrop-blur p-4 shadow-sm"
              >
                <div className="h-36 rounded-lg bg-gradient-to-br from-aivy-purple/20 to-aivy-blue/20 border border-white/50" />
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Animated step {i+1}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function PlanStudy() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/50 bg-white/70 dark:bg-white/10 backdrop-blur p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">A Schedule That Works For You.</h3>
            <div className="h-80 rounded-xl bg-white dark:bg-zinc-900 border border-white/50 p-4 overflow-hidden">
              <div className="grid grid-cols-7 gap-2 text-xs text-gray-500">
                {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d) => (<div key={d} className="text-center">{d}</div>))}
              </div>
              <div className="mt-2 grid grid-cols-7 gap-2">
                {Array.from({ length: 7*4 }).map((_, i) => (
                  <div key={i} className="h-10 rounded bg-gradient-to-r from-aivy-purple/10 to-aivy-blue/10 border border-white/40" />
                ))}
              </div>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                • AI builds your plan from notes + deadlines
                <br/>• Difficulty-based planning (Easy/Medium/Hard)
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/50 bg-white/70 dark:bg-white/10 backdrop-blur p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Gamification</h3>
            <div className="flex-1 grid md:grid-rows-2 gap-6">
              <div className="rounded-xl border border-white/50 bg-gradient-to-br from-aivy-purple/20 to-aivy-blue/20 p-6">
                <p className="font-semibold text-gray-800 dark:text-white">XP</p>
                <div className="mt-4 h-3 rounded-full bg-white/50 overflow-hidden">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-aivy-purple to-aivy-blue shadow-glow" />
                </div>
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">420 / 600 XP</p>
              </div>
              <div className="rounded-xl border border-white/50 bg-gradient-to-br from-aivy-purple/20 to-aivy-blue/20 p-6">
                <p className="font-semibold text-gray-800 dark:text-white">Streak</p>
                <div className="mt-4 flex items-center gap-3">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className={`h-6 w-6 rounded-full ${i < 5 ? 'bg-gradient-to-r from-aivy-purple to-aivy-blue shadow-glow' : 'bg-white/60'} border border-white/50`} />
                  ))}
                </div>
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">5-day streak</p>
              </div>
            </div>
            <div className="mt-6 text-sm text-gray-600 dark:text-gray-300">• Streaks, XP, task rewards for motivation</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function SmartTools() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Beyond the Plan.</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>Smart reminders</li>
              <li>Integrated Pomodoro timer</li>
              <li>Progress analytics dashboard</li>
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/50 bg-white/70 dark:bg-white/10 backdrop-blur p-4">
              <div className="h-40 rounded-lg bg-gradient-to-br from-aivy-purple/20 to-aivy-blue/20 border border-white/50" />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Pomodoro Timer</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/50 bg-white/70 dark:bg-white/10 backdrop-blur p-4">
              <div className="h-40 rounded-lg bg-gradient-to-br from-aivy-purple/20 to-aivy-blue/20 border border-white/50" />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Analytics Snapshot</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Ready to Study Smarter?</h3>
        <p className="mt-3 text-gray-600 dark:text-gray-300">Join thousands of students transforming the way they learn with AIVY.</p>
        <div className="mt-6">
          <a href="#" className="inline-flex rounded-full bg-gradient-to-r from-aivy-purple to-aivy-blue text-white px-8 py-3 font-semibold shadow-glow hover:opacity-90 transition">Get Started for Free</a>
        </div>
      </div>
    </section>
  )
}

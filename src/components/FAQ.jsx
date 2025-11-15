import { useState } from 'react'

const faqs = [
  {
    q: 'What is AIVY?',
    a: 'AIVY is an AI study planner that centralizes your notes and builds a personalized schedule to help you learn smarter.'
  },
  {
    q: 'How does Smart Uploads work?',
    a: 'Upload PDFs, images, or documents. AIVY extracts the text and organizes it into structured notes with summaries and mind maps.'
  },
  {
    q: 'Is there a free plan?',
    a: 'Yes, you can get started for free and upgrade anytime for advanced automation and analytics.'
  },
  {
    q: 'Can I integrate my calendar?',
    a: 'Yes, AIVY supports schedule integration so your study plan works alongside your existing events and deadlines.'
  },
]

export default function FAQ() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <FAQItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-white/60 bg-white/70 dark:bg-white/10 backdrop-blur p-4 shadow-sm">
      <button onClick={() => setOpen((v) => !v)} className="w-full text-left">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-gray-900 dark:text-white">{q}</p>
          <span className="text-sm text-gray-500">{open ? '−' : '+'}</span>
        </div>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} mt-2`}>
        <div className="overflow-hidden">
          <p className="text-gray-600 dark:text-gray-300 pr-4 pb-2">{a}</p>
        </div>
      </div>
    </div>
  )
}

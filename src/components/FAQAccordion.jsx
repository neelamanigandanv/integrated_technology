import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from './Icon'

export default function FAQAccordion({ faqs, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
      {faqs.map((faq, index) => {
        const isOpen = open === index
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-surface/70 sm:px-7"
            >
              <span className="flex gap-4">
                <span className="mt-0.5 font-sans text-[13px] font-bold text-brand">{String(index + 1).padStart(2, '0')}</span>
                <span className={`font-sans text-[15px] font-semibold leading-6 transition-colors ${isOpen ? 'text-brand' : 'text-navy'}`}>
                  {faq.question}
                </span>
              </span>
              <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all ${isOpen ? 'border-brand bg-brand text-white rotate-180' : 'border-line text-muted'}`}>
                <Icon name="ChevronDown" className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-6 pl-[3.4rem] pr-6 text-[14px] leading-7 text-muted sm:px-7 sm:pl-[4.2rem]">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

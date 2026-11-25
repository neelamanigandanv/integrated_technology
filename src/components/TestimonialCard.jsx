import { motion } from 'framer-motion'
import Icon from './Icon'

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.25), ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-[0_14px_40px_-32px_rgba(16,27,53,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(37,99,235,0.35)] sm:p-7"
    >
      <div className="flex items-center justify-between">
        <Icon name="Quote" className="h-8 w-8 text-brand/25" />
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, star) => (
            <Icon key={star} name="Star" className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>
      <p className="mt-4 flex-1 text-[14px] leading-7 text-ink/85">“{testimonial.quote}”</p>
      <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-[12px] font-bold text-white">
          {testimonial.initials}
        </span>
        <div>
          <p className="text-[13px] font-bold text-navy">{testimonial.name}</p>
          <p className="text-[11.5px] text-muted">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function IndustryCard({ industry, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.25), ease: [0.22, 1, 0.36, 1] }}
      className="group h-full"
    >
      <Link
        to={`/services/${industry.serviceSlug}`}
        className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_24px_50px_-30px_rgba(37,99,235,0.5)]"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white transition-colors duration-300 group-hover:bg-brand">
            <Icon name={industry.icon} className="h-5 w-5" />
          </span>
          <h3 className="text-lg font-bold text-navy">{industry.title}</h3>
        </div>
        <p className="mt-4 flex-1 text-[13.5px] leading-6 text-muted">{industry.description}</p>
        <p className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-brand">{industry.focus}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 border-t border-line pt-4 text-[13px] font-bold text-navy group-hover:text-brand">
          Explore solutions
          <Icon name="ArrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  )
}

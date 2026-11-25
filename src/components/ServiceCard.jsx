import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function ServiceCard({ service, index = 0, compact = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link
        to={`/services/${service.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-brand/30 hover:shadow-[0_24px_50px_-28px_rgba(37,99,235,0.45)] sm:p-7"
      >
        <span className="absolute right-0 top-0 h-24 w-24 rounded-full bg-brand/5 blur-2xl transition-all duration-500 group-hover:bg-brand/10" />
        <div className="relative flex items-start justify-between gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 text-brand ring-1 ring-brand/10 transition-colors duration-300 group-hover:from-brand group-hover:to-blue-600 group-hover:text-white">
            <Icon name={service.icon} className="h-6 w-6" />
          </span>
          <span className="rounded-full bg-surface px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted">
            {service.category}
          </span>
        </div>

        <h3 className={`relative mt-6 font-bold leading-snug text-navy transition-colors group-hover:text-brand ${compact ? 'text-lg' : 'text-xl'}`}>
          {service.title}
        </h3>
        <p className="relative mt-3 flex-1 text-[13.5px] leading-6 text-muted">
          {service.summary}
        </p>

        <span className="relative mt-6 inline-flex items-center gap-2 text-[13px] font-bold text-brand">
          Learn more
          <Icon name="ArrowRight" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  )
}

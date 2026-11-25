import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function SolutionCard({ solution, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/[0.07] sm:p-7"
    >
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-[0_10px_20px_-10px_rgba(6,182,212,0.8)]">
          <Icon name={solution.icon} className="h-5 w-5" />
        </span>
        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">0{index + 1}</span>
      </div>

      <h3 className="mt-5 text-lg font-bold leading-snug text-white sm:text-xl">{solution.title}</h3>
      <p className="mt-3 flex-1 text-[13.5px] leading-6 text-slate-400">{solution.description}</p>

      <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
        {solution.points.slice(0, 3).map((point) => (
          <li key={point} className="flex items-start gap-2 text-[12.5px] text-slate-300">
            <Icon name="Check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" strokeWidth={2.5} />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
        <p className="text-[12px] italic leading-5 text-slate-400">{solution.outcome}</p>
        <Link
          to={`/services/${solution.serviceSlug}`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:border-cyan-300 group-hover:bg-cyan-400 group-hover:text-navy"
          aria-label={`Learn more about ${solution.title}`}
        >
          <Icon name="ArrowUpRight" className="h-4 w-4 transition-transform group-hover:rotate-45" />
        </Link>
      </div>
    </motion.div>
  )
}

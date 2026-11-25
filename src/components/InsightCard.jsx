import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function InsightCard({ article, index = 0, featured = false }) {
  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="group overflow-hidden rounded-3xl border border-line bg-white shadow-[0_30px_60px_-40px_rgba(16,27,53,0.4)]"
      >
        <Link to={`/insights/${article.slug}`} className="grid h-full md:grid-cols-2">
          <div className={`relative min-h-[240px] overflow-hidden bg-gradient-to-br ${article.accent} p-8 md:min-h-[380px]`}>
            <div className="absolute inset-0 dot-bg opacity-30" />
            <div className="absolute -bottom-16 -right-10 h-56 w-56 rounded-full border-[18px] border-white/15" />
            <div className="absolute right-8 top-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-sm">
              <Icon name="Sparkles" className="h-7 w-7" />
            </div>
            <div className="relative flex h-full flex-col justify-end">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">Featured insight</span>
              <p className="mt-3 max-w-sm font-sans text-3xl font-bold leading-tight text-white">
                {article.title}
              </p>
            </div>
          </div>
          <div className="flex flex-col p-7 sm:p-10">
            <div className="flex flex-wrap items-center gap-3 text-[12px] text-muted">
              <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-brand">{article.category}</span>
              <span className="flex items-center gap-1"><Icon name="CalendarDays" className="h-3.5 w-3.5" />{article.dateLabel}</span>
              <span className="flex items-center gap-1"><Icon name="Clock" className="h-3.5 w-3.5" />{article.readTime}</span>
            </div>
            <h3 className="mt-5 text-2xl font-bold leading-snug text-navy transition-colors group-hover:text-brand">
              {article.title}
            </h3>
            <p className="mt-4 flex-1 text-[14px] leading-7 text-muted">{article.excerpt}</p>
            <div className="mt-7 flex items-center justify-between border-t border-line pt-5">
              <span className="text-[13px] font-semibold text-ink">{article.author}</span>
              <span className="inline-flex items-center gap-2 text-[13px] font-bold text-brand">
                Read article
                <Icon name="ArrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>
      </motion.article>
    )
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3), ease: [0.22, 1, 0.36, 1] }}
      className="group h-full"
    >
      <Link to={`/insights/${article.slug}`} className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_24px_50px_-30px_rgba(37,99,235,0.45)]">
        <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${article.accent}`}>
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border-[12px] border-white/20" />
          <span className="absolute bottom-4 left-5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy">
            {article.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3 text-[11px] text-muted">
            <span>{article.dateLabel}</span>
            <span className="h-1 w-1 rounded-full bg-line" />
            <span>{article.readTime}</span>
          </div>
          <h3 className="mt-3 text-[17px] font-bold leading-snug text-navy transition-colors group-hover:text-brand">
            {article.title}
          </h3>
          <p className="mt-3 flex-1 text-[13px] leading-6 text-muted">{article.excerpt}</p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] font-bold text-brand">
            Read more
            <Icon name="ArrowRight" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}

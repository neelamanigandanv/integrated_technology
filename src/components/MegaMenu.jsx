import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { services } from '../data/services'
import Container from './Container'
import Icon from './Icon'
import Button from './Button'

export default function MegaMenu({ onNavigate }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute left-0 right-0 top-full border-b border-line bg-white/98 shadow-[0_24px_50px_-20px_rgba(16,27,53,0.25)] backdrop-blur-xl"
      onMouseDown={(event) => event.preventDefault()}
    >
      <Container className="py-8">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="border-b border-line pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Our expertise</span>
            <h3 className="mt-3 text-2xl font-bold leading-snug text-navy">
              Everything you need to move forward.
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Strategy, engineering, and intelligence — delivered by one senior team.
            </p>
            <Button to="/what-we-do" variant="secondary" size="sm" icon="ArrowRight" className="mt-6" onClick={onNavigate}>
              View all services
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              to="/what-we-do"
              onClick={onNavigate}
              className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-surface"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy text-white">
                <Icon name="Blocks" className="h-4 w-4" />
              </span>
              <span className="text-[13px] font-bold text-navy group-hover:text-brand">What We Do Overview</span>
            </Link>
            <Link
              to="/services/tech-engineering"
              onClick={onNavigate}
              className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-surface"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon name="Cpu" className="h-4 w-4" />
              </span>
              <span className="text-[13px] font-semibold leading-tight text-ink transition-colors group-hover:text-brand">
                Tech &amp; Engineering Services
              </span>
            </Link>
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                onClick={onNavigate}
                className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-surface"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={service.icon} className="h-4 w-4" />
                </span>
                <span className="text-[13px] font-semibold leading-tight text-ink transition-colors group-hover:text-brand">
                  {service.shortTitle}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </motion.div>
  )
}

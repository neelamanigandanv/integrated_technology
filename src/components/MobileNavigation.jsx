import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '../data/site'
import { services } from '../data/services'
import Icon from './Icon'
import Button from './Button'
import Container from './Container'

export default function MobileNavigation({ open, onClose }) {
  const location = useLocation()
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    onClose()
    setServicesOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden border-t border-line bg-white lg:hidden"
        >
          <Container className="py-5">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                if (!link.mega) {
                  const active = location.pathname === link.to
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={onClose}
                      className={`flex items-center justify-between border-b border-line/70 py-3.5 text-[15px] font-semibold ${active ? 'text-brand' : 'text-navy'}`}
                    >
                      {link.label}
                      <Icon name="ChevronRight" className="h-4 w-4 text-muted" />
                    </Link>
                  )
                }

                return (
                  <div key={link.to} className="border-b border-line/70">
                    <button
                      type="button"
                      onClick={() => setServicesOpen((value) => !value)}
                      aria-expanded={servicesOpen}
                      className={`flex w-full items-center justify-between py-3.5 text-[15px] font-semibold ${location.pathname.startsWith('/services') || location.pathname === '/what-we-do' ? 'text-brand' : 'text-navy'}`}
                    >
                      What We Do
                      <Icon name="ChevronDown" className={`h-4 w-4 text-muted transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {servicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-0.5 pb-4 pl-3">
                            <Link to="/what-we-do" onClick={onClose} className="rounded-lg px-3 py-2 text-sm font-semibold text-navy hover:bg-surface">
                              What We Do Overview
                            </Link>
                            <Link
                              to="/services/tech-engineering"
                              onClick={onClose}
                              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold text-navy hover:bg-surface hover:text-brand"
                            >
                              <Icon name="Cpu" className="h-4 w-4 shrink-0 text-brand" />
                              Tech &amp; Engineering Services
                            </Link>
                            {services.map((service) => (
                              <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                onClick={onClose}
                                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface hover:text-brand"
                              >
                                <Icon name={service.icon} className="h-4 w-4 shrink-0 text-brand" />
                                {service.shortTitle}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </nav>
            <Button to="/contact-us" onClick={onClose} variant="primary" size="lg" icon="ArrowRight" className="mt-6 w-full">
              Let&apos;s Talk
            </Button>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

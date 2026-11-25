import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/site'
import Container from './Container'
import Logo from './Logo'
import Icon from './Icon'
import Button from './Button'
import MegaMenu from './MegaMenu'
import MobileNavigation from './MobileNavigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMegaOpen(false)
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') setMegaOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/'
    return location.pathname === to || location.pathname.startsWith(`${to}/`)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled || megaOpen ? 'border-line bg-white/95 shadow-[0_8px_30px_-20px_rgba(16,27,53,0.35)] backdrop-blur-xl' : 'border-transparent bg-white'
      }`}
      onMouseLeave={() => setMegaOpen(false)}
    >
      <Container className="flex h-[74px] max-w-none items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = link.mega
              ? isActive(link.to) || location.pathname.startsWith('/services/')
              : isActive(link.to)

            return (
              <Link
                key={link.to}
                to={link.to}
                onMouseEnter={() => setMegaOpen(Boolean(link.mega))}
                onFocus={() => setMegaOpen(Boolean(link.mega))}
                onClick={() => setMegaOpen(Boolean(link.mega))}
                className={`relative flex items-center gap-1.5 rounded-lg px-3.5 py-2.5 text-[13.5px] font-semibold transition-colors ${
                  active ? 'text-brand' : 'text-ink hover:text-brand'
                }`}
              >
                {link.label}
                {link.mega && (
                  <Icon name="ChevronDown" className={`h-3.5 w-3.5 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} />
                )}
                {active && !megaOpen && (
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-brand" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button to="/contact-us" variant="primary" size="sm" icon="ArrowRight" className="hidden sm:inline-flex">
            Let&apos;s Talk
          </Button>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-navy transition-colors hover:bg-surface lg:hidden"
          >
            <Icon name={mobileOpen ? 'X' : 'Menu'} className="h-5 w-5" />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {megaOpen && <MegaMenu onNavigate={() => setMegaOpen(false)} />}
      </AnimatePresence>

      <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}

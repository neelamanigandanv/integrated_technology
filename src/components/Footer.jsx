import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { officeLocations, socialLinks } from '../data/site'
import Container from './Container'
import Logo from './Logo'
import Icon from './Icon'
import Button from './Button'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 dark-grid opacity-60" />
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-brand/15 blur-3xl" />

      <Container className="relative max-w-none py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1.1fr] lg:gap-10">
          <div>
            <Logo light />
            <p className="mt-6 max-w-sm text-[13.5px] leading-7 text-slate-400">
              Technova is a technology partner for ambitious organizations. We combine AI, engineering, and design to build solutions that create lasting value.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-slate-300 transition-all hover:border-accent hover:bg-accent hover:text-navy"
                >
                  <Icon name={social.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
            <Button to="/contact-us" variant="outlineLight" size="sm" icon="ArrowRight" className="mt-7">
              Start a project
            </Button>
          </div>

          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-white">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="text-[13px] text-slate-400 transition-colors hover:text-accent">
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/what-we-do" className="font-semibold text-accent transition-colors hover:text-white">
                  All services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-white">Company</h3>
            <ul className="mt-5 space-y-3">
              {[
                { label: 'About Us', to: '/about-us' },
                { label: 'What We Do', to: '/what-we-do' },
                { label: 'Solutions', to: '/solutions' },
                { label: 'Case Studies', to: '/case-studies' },
                { label: 'Insights', to: '/insights' },
                { label: 'Contact Us', to: '/contact-us' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-[13px] text-slate-400 transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-white">Our offices</h3>
            <ul className="mt-5 space-y-5">
              {officeLocations.map((office) => (
                <li key={office.city}>
                  <p className="flex items-center gap-2 text-[13px] font-bold text-white">
                    <Icon name="MapPin" className="h-3.5 w-3.5 text-accent" />
                    {office.city}
                  </p>
                  <p className="mt-1.5 text-[12.5px] leading-6 text-slate-400">{office.address}</p>
                  <a href={`mailto:${office.email}`} className="mt-1 block text-[12.5px] text-slate-400 transition-colors hover:text-accent">
                    {office.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-slate-500">© {new Date().getFullYear()} Technova. All rights reserved.</p>
          <p className="text-[12px] text-slate-500">Intelligent solutions. Measurable outcomes.</p>
        </div>
      </Container>
    </footer>
  )
}

import { motion } from 'framer-motion'
import Container from './Container'
import Icon from './Icon'
import Button from './Button'

const ease = [0.22, 1, 0.36, 1]

export default function HeroSection({
  eyebrow,
  eyebrowStars = false,
  title,
  description,
  primary,
  secondary,
  highlights = [],
  visual,
  dark = false,
  compact = false,
  children,
}) {
  return (
    <section className={`relative overflow-hidden ${dark ? 'bg-navy text-white' : 'bg-surface'}`}>
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      <div className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[340px] w-[340px] rounded-full bg-accent/10 blur-3xl" />

      <Container className={`relative ${compact ? 'py-16 sm:py-20' : 'py-20 sm:py-24 lg:py-28'}`}>
        <div className={`grid items-center gap-12 ${visual ? 'lg:grid-cols-[1.05fr_0.95fr] lg:gap-16' : ''}`}>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
          >
            {eyebrow && (
              <span className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] ${
                dark ? 'border-white/20 bg-white/5 text-cyan-300' : 'border-brand/20 bg-white text-brand shadow-sm'
              }`}>
                {eyebrowStars ? (
                  <span className="text-[13px] leading-none" aria-hidden="true">✦</span>
                ) : (
                  <Icon name="Sparkles" className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                {eyebrow}
                {eyebrowStars && <span className="text-[13px] leading-none" aria-hidden="true">✦</span>}
              </span>
            )}

            <h1 className={`mt-6 text-4xl font-bold leading-[1.12] sm:text-5xl lg:text-[56px] ${dark ? 'text-white' : ''}`}>
              {title}
            </h1>

            {description && (
              <p className={`mt-6 max-w-2xl text-base leading-7 sm:text-[17px] ${dark ? 'text-slate-300' : 'text-muted'}`}>
                {description}
              </p>
            )}

            {(primary || secondary) && (
              <div className="mt-9 flex flex-wrap items-center gap-3">
                {primary && (
                  <Button to={primary.to} href={primary.href} variant={dark ? 'light' : 'primary'} size="lg" icon={primary.icon || 'ArrowRight'}>
                    {primary.label}
                  </Button>
                )}
                {secondary && (
                  <Button to={secondary.to} href={secondary.href} variant={dark ? 'outlineLight' : 'secondary'} size="lg" icon={secondary.icon}>
                    {secondary.label}
                  </Button>
                )}
              </div>
            )}

            {highlights.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                {highlights.map((item) => (
                  <span key={item} className={`flex items-center gap-2 text-[13px] font-medium ${dark ? 'text-slate-300' : 'text-ink'}`}>
                    <span className={`flex h-5 w-5 items-center justify-center rounded-full ${dark ? 'bg-accent/20 text-cyan-300' : 'bg-brand/10 text-brand'}`}>
                      <Icon name="Check" className="h-3 w-3" strokeWidth={2.6} />
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            )}

            {children}
          </motion.div>

          {visual && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease }}
              className="relative"
            >
              {visual}
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  )
}

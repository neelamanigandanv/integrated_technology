import { motion } from 'framer-motion'
import Container from './Container'
import Button from './Button'
import Icon from './Icon'

export default function CTASection({
  eyebrow = 'LET’S BUILD SOMETHING MEANINGFUL',
  eyebrowStars = false,
  title = 'Ready to turn your next idea into a real advantage?',
  description = 'Tell us what you are working on. We will bring the right people, a clear plan, and the experience to deliver it.',
  primary = { label: 'Start a conversation', to: '/contact-us' },
  secondary,
  compact = false,
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 dark-grid" />
      <div className="pointer-events-none absolute -left-24 -top-32 h-[420px] w-[420px] rounded-full bg-brand/25 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[100px]" />
      <div className="pointer-events-none absolute right-10 top-10 hidden h-40 w-40 rounded-full border border-white/10 lg:block" />
      <div className="pointer-events-none absolute bottom-10 left-24 hidden h-24 w-24 rounded-full border border-white/10 lg:block" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`flex flex-col items-center text-center ${compact ? '' : 'lg:flex-row lg:items-center lg:justify-between lg:text-left'}`}
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              {eyebrowStars ? (
                <span className="text-[13px] leading-none" aria-hidden="true">✦</span>
              ) : (
                <span className="h-px w-7 bg-cyan-300" />
              )}
              {eyebrow}
              {eyebrowStars && <span className="text-[13px] leading-none" aria-hidden="true">✦</span>}
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[42px]">{title}</h2>
            <p className="mt-4 text-[15px] leading-7 text-slate-300">{description}</p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:mt-0">
            <Button to={primary.to} href={primary.href} variant="light" size="lg" icon="ArrowRight">
              {primary.label}
            </Button>
            {secondary && (
              <Button to={secondary.to} href={secondary.href} variant="outlineLight" size="lg">
                {secondary.label}
              </Button>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

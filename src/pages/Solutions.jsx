import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import Button from '../components/Button'
import SolutionCard from '../components/SolutionCard'
import IndustryCard from '../components/IndustryCard'
import CTASection from '../components/CTASection'
import useDocumentMeta from '../hooks/useDocumentMeta'
import { solutions, industries } from '../data/solutions'

export default function Solutions() {
  useDocumentMeta('Solutions', 'Business solutions for AI automation, digital transformation, custom software, data-driven decisions, cloud infrastructure, and every industry we serve.')

  return (
    <>
      <HeroSection
        eyebrow="SOLUTIONS"
        title={<>Solutions shaped around the problems you actually face.</>}
        description="We do not lead with a technology and hope it fits. We start with your business challenge, then assemble the right services, platforms, and people to solve it."
        highlights={['Outcome-led thinking', 'Cross-functional teams', 'Measurable impact']}
        primary={{ label: 'Discuss a challenge', to: '/contact-us' }}
        secondary={{ label: 'Browse our services', to: '/what-we-do' }}
        compact
      />

      <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 dark-grid" />
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Business solutions"
            title="From business problem to working solution"
            description="Each solution combines the capabilities needed to deliver a specific, measurable outcome."
            light
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution, index) => (
              <SolutionCard key={solution.title} solution={solution} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Why our approach works"
                title="Designed for the way decisions get made"
                description="Technology only matters when it changes what your business can do. We keep that connection visible throughout every engagement."
              />
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: 'Target', title: 'Start with the outcome', text: 'Every solution is anchored to a metric your leadership already cares about.' },
                  { icon: 'Blocks', title: 'Combine the right skills', text: 'Strategy, data, engineering, and design work as one team, not separate workstreams.' },
                  { icon: 'Clock', title: 'Deliver in visible steps', text: 'Working increments let you respond to what you learn instead of waiting for a big reveal.' },
                  { icon: 'TrendingUp', title: 'Keep improving', text: 'We measure real usage and refine the solution as your business evolves.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-line bg-white p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-brand">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-[15px] font-bold text-navy">{item.title}</h3>
                    <p className="mt-2 text-[12.5px] leading-6 text-muted">{item.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl bg-navy p-8 text-white sm:p-10">
                <div className="pointer-events-none absolute inset-0 dark-grid" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
                <div className="relative">
                  <Icon name="Gauge" className="h-9 w-9 text-cyan-300" />
                  <p className="mt-7 font-sans text-4xl font-extrabold">Real outcomes, not vanity metrics.</p>
                  <div className="mt-10 space-y-6 border-t border-white/15 pt-8">
                    {[
                      { value: '40%', label: 'less manual effort in automated workflows' },
                      { value: '2x', label: 'faster decision cycles with trusted data' },
                      { value: '98%', label: 'client satisfaction across engagements' },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <p className="font-sans text-3xl font-bold text-cyan-300">{stat.value}</p>
                        <p className="mt-1 text-[13px] text-slate-300">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Industry solutions"
            title="Built for the realities of your industry"
            description="We understand that sector context changes everything — from compliance and data models to the way users work day to day."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <IndustryCard key={industry.title} industry={industry} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-line bg-white p-8 sm:p-10">
            <div className="max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Not seeing your challenge?</span>
              <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
                Let&apos;s work it out together.
              </h2>
              <p className="mt-3 text-[14px] leading-7 text-muted">
                Many of our best projects started with a problem that did not fit a neat category. Tell us what you are dealing with.
              </p>
            </div>
            <Button to="/contact-us" variant="primary" size="lg" icon="ArrowRight">
              Start the conversation
            </Button>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="YOUR NEXT MOVE"
        title="The right solution starts with the right conversation."
        description="Bring us your challenge. We will bring clarity, experience, and a practical plan for moving forward."
      />
    </>
  )
}

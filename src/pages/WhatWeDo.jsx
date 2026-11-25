import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import ServiceCard from '../components/ServiceCard'
import IndustryCard from '../components/IndustryCard'
import CTASection from '../components/CTASection'
import useDocumentMeta from '../hooks/useDocumentMeta'
import { services } from '../data/services'
import { industries } from '../data/solutions'
import { processSteps, technologyGroups } from '../data/site'

export default function WhatWeDo() {
  useDocumentMeta('What We Do', 'Explore Technova services: AI, web and mobile development, custom software, UI/UX, cloud, data analytics, DevOps, consulting, transformation, and security.')

  const visual = (
    <div className="relative mx-auto w-full max-w-[470px]">
      <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-gradient-to-br from-blue-500/20 to-cyan-400/20 blur-3xl" />
      <div className="relative grid grid-cols-3 gap-3">
        {services.slice(0, 9).map((service, index) => (
          <Reveal key={service.slug} delay={index * 0.04}>
            <div className="flex h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-line bg-white text-center shadow-sm transition-transform hover:-translate-y-1">
              <Icon name={service.icon} className="h-5 w-5 text-brand" />
              <span className="px-1 text-[9.5px] font-bold leading-tight text-navy">{service.shortTitle}</span>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="relative mt-3 flex items-center justify-center gap-2 rounded-2xl bg-navy py-4 text-white">
        <Icon name="Plus" className="h-4 w-4 text-cyan-300" />
        <span className="text-[13px] font-semibold">2 more services, all built for impact</span>
      </div>
    </div>
  )

  return (
    <>
      <HeroSection
        eyebrow="WHAT WE DO"
        title={<>The full spectrum of technology, working together for you.</>}
        description="We bring strategy, design, engineering, data, and security under one roof — so you get one accountable partner from the first conversation to long after launch."
        highlights={['End-to-end delivery', 'Specialist teams on demand', 'Built around your goals']}
        visual={visual}
        primary={{ label: 'Discuss your project', to: '/contact-us' }}
        secondary={{ label: 'See our solutions', to: '/solutions' }}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our capabilities"
            title="Every service you need, one team you can trust"
            description="Explore our services to see how each capability is designed, delivered, and measured."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Technology expertise"
                title="Deep skills, chosen for the problem in front of us"
                description="We use mature, well-supported technology and adapt to your existing environment. No experimentation on your critical systems."
              />
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {technologyGroups.map((group) => (
                  <div key={group.label} className="rounded-2xl border border-line bg-white p-5">
                    <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-brand">
                      <Icon name="Cpu" className="h-4 w-4" />
                      {group.label}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-md bg-surface px-2.5 py-1.5 text-[11.5px] font-medium text-ink">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl bg-navy p-8 text-white sm:p-10">
                <div className="pointer-events-none absolute inset-0 dark-grid" />
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/25 blur-3xl" />
                <div className="relative">
                  <Icon name="Rocket" className="h-9 w-9 text-cyan-300" />
                  <h3 className="mt-7 text-2xl font-bold leading-snug">One partner, from strategy to scale.</h3>
                  <p className="mt-4 text-[14px] leading-7 text-slate-300">
                    Most projects need more than one discipline. Our teams work across services so your roadmap does not stall at the boundary between design, engineering, data, and operations.
                  </p>
                  <div className="mt-8 space-y-3 border-t border-white/15 pt-7">
                    {['Shared context across every workstream', 'One accountable delivery team', 'Clear handoffs and documented decisions'].map((item) => (
                      <p key={item} className="flex items-center gap-3 text-[13px] text-slate-200">
                        <Icon name="Check" className="h-4 w-4 shrink-0 text-accent" />
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="How we deliver, every time"
            description="A repeatable process that leaves room for the decisions that make your project unique."
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg">
                  <span className="font-sans text-3xl font-extrabold text-brand/20">{step.number}</span>
                  <h3 className="mt-3 text-[17px] font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-[12.5px] leading-6 text-muted">{step.description}</p>
                  <p className="mt-4 border-t border-line pt-4 text-[10.5px] font-semibold uppercase tracking-wider text-brand/70">{step.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Industries we serve"
            title="Experience that understands your context"
            description="We adapt our services to the regulations, customers, and operational realities of your sector."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <IndustryCard key={industry.title} industry={industry} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="FIND YOUR NEXT STEP"
        title="Not sure which service you need?"
        description="Describe the outcome you are aiming for and we will put together the right combination of capabilities for you."
      />
    </>
  )
}

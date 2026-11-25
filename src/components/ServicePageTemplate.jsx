import HeroSection from './HeroSection'
import SectionHeading from './SectionHeading'
import Container from './Container'
import Reveal from './Reveal'
import Icon from './Icon'
import Button from './Button'
import ServiceCard from './ServiceCard'
import FAQAccordion from './FAQAccordion'
import CTASection from './CTASection'
import useDocumentMeta from '../hooks/useDocumentMeta'
import { getService } from '../data/services'

export default function ServicePageTemplate({ service }) {
  useDocumentMeta(service.title, service.summary)

  const related = service.related.map((slug) => getService(slug)).filter(Boolean)

  const visual = (
    <div className="relative mx-auto w-full max-w-[470px]">
      <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-gradient-to-br from-blue-500/20 to-cyan-400/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-[0_40px_80px_-45px_rgba(16,27,53,0.6)]">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border-[20px] border-brand/5" />
        <div className="flex items-center justify-between">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-accent text-white shadow-[0_14px_28px_-12px_rgba(37,99,235,0.8)]">
            <Icon name={service.icon} className="h-7 w-7" />
          </span>
          <span className="rounded-full bg-surface px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
            {service.category}
          </span>
        </div>
        <h2 className="relative mt-7 text-2xl font-bold leading-snug text-navy">{service.shortTitle}</h2>
        <div className="relative mt-6 space-y-3 border-t border-line pt-6">
          {service.hero.highlights.map((item) => (
            <div key={item} className="flex items-start gap-3 text-[13.5px] font-medium text-ink">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Icon name="Check" className="h-3 w-3" strokeWidth={2.6} />
              </span>
              {item}
            </div>
          ))}
        </div>
        <div className="relative mt-7 flex items-center gap-3 rounded-xl bg-surface p-4">
          <Icon name="Sparkles" className="h-5 w-5 shrink-0 text-brand" />
          <p className="text-[12px] leading-5 text-muted">{service.summary}</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <HeroSection
        eyebrow={service.hero.eyebrow}
        title={service.hero.title}
        description={service.hero.description}
        highlights={service.hero.highlights}
        visual={visual}
        primary={{ label: 'Discuss this service', to: `/contact-us?interest=${encodeURIComponent(service.shortTitle)}` }}
        secondary={{ label: 'View all services', to: '/what-we-do' }}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <Reveal>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Introduction</span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl">{service.intro.heading}</h2>
              <div className="mt-6 space-y-5">
                {service.intro.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[15px] leading-7 text-muted">{paragraph}</p>
                ))}
              </div>
              <Button to="/contact-us" variant="secondary" size="md" icon="ArrowRight" className="mt-8">
                Talk to an expert
              </Button>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl bg-navy p-8 text-white shadow-[0_35px_70px_-40px_rgba(16,27,53,0.7)] sm:p-10">
                <div className="pointer-events-none absolute inset-0 dark-grid" />
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand/25 blur-3xl" />
                <div className="relative">
                  <Icon name={service.icon} className="h-9 w-9 text-cyan-300" />
                  <p className="mt-8 font-sans text-5xl font-extrabold tracking-tight sm:text-6xl">{service.intro.stat.value}</p>
                  <p className="mt-3 max-w-xs text-[14px] leading-6 text-slate-300">{service.intro.stat.label}</p>
                  <div className="mt-9 space-y-4 border-t border-white/15 pt-7">
                    {service.hero.highlights.slice(0, 3).map((item) => (
                      <p key={item} className="flex items-center gap-3 text-[13px] text-slate-200">
                        <Icon name="CircleCheck" className="h-4 w-4 shrink-0 text-accent" />
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

      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="The problem"
            title="Business challenges we solve"
            description="We begin with the friction in your operations — then remove it with the right combination of process, technology, and expertise."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.challenges.map((challenge, index) => (
              <Reveal key={challenge.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Icon name="AlertCircle" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-[16px] font-bold text-navy">{challenge.title}</h3>
                  <p className="mt-2.5 text-[13px] leading-6 text-muted">{challenge.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we offer"
            title="Our capabilities"
            description="A focused set of services designed to work together and deliver outcomes you can measure."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.capabilities.map((capability, index) => (
              <Reveal key={capability.title} delay={Math.min(index * 0.05, 0.25)}>
                <div className="group h-full rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_22px_44px_-30px_rgba(37,99,235,0.5)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon name={capability.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-[16px] font-bold text-navy">{capability.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-muted">{capability.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Why it matters"
                title="Key features and benefits"
                description="The practical value your teams and customers experience once the solution is in place."
              />
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <div key={benefit.title} className="rounded-xl border border-line bg-white p-5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                      <Icon name="Check" className="h-4 w-4" strokeWidth={2.6} />
                    </span>
                    <h3 className="mt-4 text-[15px] font-bold text-navy">{benefit.title}</h3>
                    <p className="mt-1.5 text-[12.5px] leading-6 text-muted">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-line bg-white p-7 sm:p-9">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                  <Icon name="Cpu" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-navy">Technologies and tools we use</h3>
                <p className="mt-2 text-[13px] leading-6 text-muted">
                  We choose proven, well-supported technology that fits your environment and your team.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {service.technologies.map((technology) => (
                    <span key={technology} className="rounded-lg border border-line bg-surface px-3 py-2 text-[12px] font-semibold text-ink">
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex items-start gap-3 rounded-xl bg-blue-50 p-4">
                  <Icon name="Lightbulb" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <p className="text-[12.5px] leading-6 text-ink/80">
                    Already using something different? We adapt to your stack rather than forcing a change for its own sake.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 dark-grid" />
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand/20 blur-3xl" />
        <Container className="relative">
          <SectionHeading
            eyebrow="How we work"
            title="Our implementation process"
            description="A clear, collaborative path from first conversation to measurable results — with working software at every stage."
            light
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {service.process.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.07}>
                <div className="relative h-full border-l border-white/15 pl-5 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-6">
                  <span className="absolute -left-[7px] top-0 h-3 w-3 rounded-full border-2 border-accent bg-navy lg:-top-[7px] lg:left-0" />
                  <span className="font-sans text-3xl font-extrabold text-white/15">{step.number}</span>
                  <h3 className="mt-3 text-[17px] font-bold text-white">{step.title}</h3>
                  <p className="mt-2.5 text-[12.5px] leading-6 text-slate-400">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Where it applies"
            title="Industry applications"
            description="The same disciplined approach, adapted to the realities and regulations of your sector."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.industries.map((industry, index) => (
              <Reveal key={industry.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-brand/30 hover:bg-white">
                  <h3 className="text-[16px] font-bold text-navy">{industry.title}</h3>
                  <p className="mt-2.5 text-[13px] leading-6 text-muted">{industry.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Keep exploring"
              title="Related services"
              description="Capabilities that work especially well alongside this service."
            />
            <Button to="/what-we-do" variant="secondary" size="md" icon="ArrowRight">
              All services
            </Button>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item, index) => (
              <ServiceCard key={item.slug} service={item} index={index} compact />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading
              eyebrow="Good to know"
              title="Frequently asked questions"
              description="Clear answers to the questions we hear most often. Still curious? Our team is happy to help."
            />
            <Reveal delay={0.1}>
              <FAQAccordion faqs={service.faqs} />
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow={`READY TO GET STARTED WITH ${service.shortTitle.toUpperCase()}?`}
        title="Let's shape the right solution together."
        description="Share your challenge with us. We will bring the right specialists to the conversation and outline a practical next step."
        primary={{ label: 'Talk to our team', to: `/contact-us?interest=${encodeURIComponent(service.shortTitle)}` }}
        secondary={{ label: 'Explore our work', to: '/what-we-do' }}
      />
    </>
  )
}

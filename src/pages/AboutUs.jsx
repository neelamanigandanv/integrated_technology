import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import useDocumentMeta from '../hooks/useDocumentMeta'
import { companyStats, drivingPrinciples, intelligencePillars, teamMembers, testimonials } from '../data/site'

function AnimatedStatValue({ value, active }) {
  const target = Number.parseInt(value, 10)
  const suffix = value.slice(String(target).length)
  const [count, setCount] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!active) return undefined
    if (prefersReducedMotion) {
      setCount(target)
      return undefined
    }

    const duration = 1400
    const startTime = performance.now()
    let frameId

    const updateCount = (time) => {
      const progress = Math.min((time - startTime) / duration, 1)
      const easedProgress = 1 - (1 - progress) ** 3
      setCount(Math.round(target * easedProgress))
      if (progress < 1) frameId = requestAnimationFrame(updateCount)
    }

    frameId = requestAnimationFrame(updateCount)
    return () => cancelAnimationFrame(frameId)
  }, [active, prefersReducedMotion, target])

  return <>{count}{suffix}</>
}

export default function AboutUs() {
  useDocumentMeta('About Us', 'Meet Technova — a technology partner combining strategy, engineering, AI, and design to help businesses grow with confidence.')

  const [activeDrivingIndex, setActiveDrivingIndex] = useState(1)
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0)
  const impactStatsRef = useRef(null)
  const impactStatsInView = useInView(impactStatsRef, { once: true, amount: 0.35 })
  const [productsStat, experienceStat, satisfactionStat, countriesStat] = companyStats
  const activeDrivingPrinciple = drivingPrinciples[activeDrivingIndex]
  const activeTestimonial = testimonials[activeTestimonialIndex]

  const visual = (
    <div className="relative mx-auto w-full max-w-[470px]">
      <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-gradient-to-br from-blue-500/20 to-cyan-400/20 blur-3xl" />
      <div className="relative grid grid-cols-2 gap-4">
        {companyStats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.06}>
            <div className={`rounded-2xl border border-line bg-white p-6 shadow-[0_20px_45px_-35px_rgba(16,27,53,0.6)] ${index % 3 === 0 ? '-translate-y-4' : ''}`}>
              <p className="font-sans text-3xl font-extrabold text-navy">{stat.value}</p>
              <p className="mt-2 text-[12px] leading-5 text-muted">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="relative mt-4 rounded-2xl bg-navy p-6 text-white">
        <p className="font-sans text-lg font-bold leading-snug">
          “We measure our work by the value our clients create.”
        </p>
        <p className="mt-3 text-[12px] text-slate-400">Our principle, since day one.</p>
      </div>
    </div>
  )

  return (
    <>
      <HeroSection
        eyebrow="ABOUT TECHNOVA"
        eyebrowStars
        title={<>A technology partner that understands the business behind the brief.</>}
        description="We are a team of strategists, engineers, designers, and data specialists. We work with ambitious organizations to turn complex challenges into practical, lasting solutions."
        primary={{ label: 'Work with us', to: '/contact-us' }}
        secondary={{ label: 'Explore our services', to: '/what-we-do' }}
        visual={visual}
      />

      <section className="overflow-hidden py-20 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-stretch lg:gap-20">
            <Reveal className="relative mx-auto w-full max-w-[560px]">
              <div className="relative h-[380px] sm:h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1100&q=85"
                  alt="Colleagues collaborating around a laptop"
                  className="absolute left-[8%] top-0 h-[88%] w-[82%] rounded-3xl object-cover object-center shadow-[0_24px_60px_-32px_rgba(16,27,53,0.5)]"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=85"
                  alt="Team reviewing ideas together"
                  className="absolute bottom-0 right-0 h-[43%] w-[58%] rounded-2xl border-[6px] border-white object-cover shadow-[0_20px_45px_-24px_rgba(16,27,53,0.45)] sm:border-[8px]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute left-0 top-10 flex min-h-32 w-24 flex-col items-center justify-center rounded-xl bg-brand px-3 py-4 text-center text-white shadow-[0_18px_40px_-18px_rgba(37,99,235,0.8)] sm:-left-2">
                  <Icon name="Lightbulb" className="h-6 w-6" />
                  <span className="mt-1 font-sans text-3xl font-extrabold leading-none">12</span>
                  <span className="mt-2 text-[9px] font-bold uppercase leading-4 tracking-wide">Years of<br />experience</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="flex h-full">
              <div className="flex w-full max-w-2xl flex-col justify-center lg:min-h-[500px]">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
                  <span className="text-[13px] leading-none" aria-hidden="true">✦</span>
                  Who we are
                  <span className="text-[13px] leading-none" aria-hidden="true">✦</span>
                </span>
                <h2 className="mt-5 max-w-xl font-sans text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl">
                  One team, turning business challenges into lasting solutions.
                </h2>
                <div className="mt-5 max-w-xl space-y-3 text-[14px] leading-7 text-muted">
                  <p>
                    We bring strategy, design, engineering, and data together to solve complex challenges with practical, lasting solutions.
                  </p>
                </div>
                <div className="mt-7 grid items-stretch gap-3 sm:grid-cols-2">
                  <div className="flex min-h-[112px] items-start gap-3 rounded-xl bg-slate-50 p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-sm ring-1 ring-brand/10">
                      <Icon name="Users" className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[12px] font-bold uppercase leading-5 text-navy">One connected team</h3>
                      <p className="mt-1 text-[12px] leading-5 text-muted">Our specialists collaborate from the first decision through delivery.</p>
                    </div>
                  </div>
                  <div className="flex min-h-[112px] items-start gap-3 rounded-xl bg-slate-50 p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-sm ring-1 ring-brand/10">
                      <Icon name="Target" className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[12px] font-bold uppercase leading-5 text-navy">Built around your outcomes</h3>
                      <p className="mt-1 text-[12px] leading-5 text-muted">Clear goals and measurable long-term value at every step.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button to="/contact-us" variant="primary" size="md" icon="ArrowRight" className="!rounded-lg">
                    Talk to our team
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#f8fafc] py-12 sm:py-14">
        <Container>
          <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
                  alt="A team working together around a table"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
                <button
                  type="button"
                  aria-label={`Show ${drivingPrinciples[(activeDrivingIndex + 1) % drivingPrinciples.length].tab} principle`}
                  onClick={() => setActiveDrivingIndex((activeDrivingIndex + 1) % drivingPrinciples.length)}
                  className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-white text-brand shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <Icon name="ArrowRight" className="h-5 w-5" />
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="flex lg:order-1 lg:min-h-[420px] lg:items-center">
              <div className="max-w-lg">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                  <span className="text-[13px] leading-none" aria-hidden="true">✦</span>
                  What Drives Us
                  <span className="text-[13px] leading-none" aria-hidden="true">✦</span>
                </span>
                <h2 className="mt-4 font-sans text-3xl font-bold leading-[1.12] tracking-tight text-navy sm:text-[40px]">
                  Purpose that turns possibility into progress.
                </h2>
                <p className="mt-4 max-w-md text-[15px] leading-7 text-slate-600">
                  Our vision, mission, and values shape how we think, work, and grow—with our clients.
                </p>
                <div className="mt-6">
                  <div className="inline-flex max-w-full flex-wrap gap-1.5" aria-label="Choose a principle">
                    {drivingPrinciples.map((principle, index) => (
                      <button
                        key={principle.tab}
                        type="button"
                        aria-pressed={index === activeDrivingIndex}
                        aria-controls="driving-principle-panel"
                        onClick={() => setActiveDrivingIndex(index)}
                        className={`rounded-lg px-4 py-2 text-[13px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${index === activeDrivingIndex ? 'bg-brand text-white shadow-sm' : 'bg-transparent text-ink/75 hover:bg-white hover:text-brand'}`}
                      >
                        {principle.tab}
                      </button>
                    ))}
                  </div>
                  <div id="driving-principle-panel" className="mt-5 max-w-md rounded-2xl border border-slate-200/80 bg-white/70 p-3 sm:p-4" aria-live="polite">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
                      <Icon name={activeDrivingPrinciple.icon} className="h-4 w-4" />
                      {activeDrivingPrinciple.title}
                    </div>
                    <h3 className="mt-2 font-sans text-lg font-bold leading-snug text-navy sm:text-xl">
                      {activeDrivingPrinciple.headline}
                    </h3>
                    <p className="mt-2 text-[13px] leading-6 text-muted">{activeDrivingPrinciple.description}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-blue-50/80 via-surface to-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="04. Intelligence Execution"
            eyebrowStars
            title="The Intelligence Behind Every Move"
            description="From strategic thinking to continuous evolution, we turn intelligence into measurable business outcomes."
            align="center"
          />
          <div
            className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 xl:overflow-visible"
            role="list"
            aria-label="Intelligence execution pillars"
          >
            {intelligencePillars.map((pillar, index) => (
              <Reveal
                key={pillar.number}
                delay={index * 0.06}
                className="flex w-[min(82vw,320px)] shrink-0 snap-start sm:w-[300px] xl:w-[calc((100%-4rem)/5)]"
                role="listitem"
              >
                <article className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/90 bg-white shadow-[0_18px_48px_-36px_rgba(16,27,53,0.32)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_24px_55px_-34px_rgba(37,99,235,0.28)]">
                  <div className="relative h-40 shrink-0 overflow-hidden">
                    <img
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-navy/5 to-transparent" />
                    <span className="absolute bottom-4 left-5 font-sans text-2xl font-extrabold text-white/90">{pillar.number}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="h-7 font-sans text-lg font-bold leading-7 text-navy transition-colors group-hover:text-brand">{pillar.title}</h3>
                    <p className="mt-1 h-5 whitespace-nowrap text-[11px] font-bold uppercase leading-5 tracking-[0.08em] text-brand xl:text-[10px] xl:tracking-[0.05em]">{pillar.focus}</p>
                    <p className="mt-3 h-20 line-clamp-4 text-[12px] leading-5 text-muted">{pillar.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-1 text-center text-[11px] font-medium text-muted xl:hidden">Scroll to explore all five pillars</p>
        </Container>
      </section>

      <section className="bg-[#faf9fc] py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our leadership"
            eyebrowStars
            title="The people behind the platform"
            description="Experienced leaders combining deep domain knowledge in human resources and cloud technology."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} delay={Math.min(index * 0.05, 0.25)}>
                <article className="h-full rounded-2xl border border-[#e4e3ef] bg-white p-5 shadow-[0_8px_24px_-20px_rgba(16,27,53,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                  <div className="pt-4">
                    <h3 className="text-[16px] font-bold text-navy">{member.name}</h3>
                    <p className="mt-1 text-[11px] font-semibold leading-5 text-brand">{member.role}</p>
                    <p className="mt-2 text-[12px] leading-5 text-muted">{member.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative">
        <div className="relative overflow-hidden bg-[#153f56] pb-24 pt-16 sm:pt-20">
          <div className="pointer-events-none absolute inset-0 dark-grid opacity-70" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl" />
          <Container className="relative">
            <div className="mx-auto max-w-4xl text-center">
              <Icon name="Quote" className="mx-auto h-10 w-10 text-orange-400" />
              <div className="relative mx-auto max-w-5xl">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => setActiveTestimonialIndex((activeTestimonialIndex + testimonials.length - 1) % testimonials.length)}
                  className="absolute left-0 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy transition-colors hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:flex"
                >
                  <Icon name="ArrowLeft" className="h-4 w-4" />
                </button>
                <div className="px-4 sm:px-16">
                  <blockquote className="mx-auto mt-4 flex min-h-[112px] max-w-3xl items-center justify-center" aria-live="polite">
                    <p className="font-sans text-[15px] font-medium leading-7 text-white sm:text-lg">
                      “{activeTestimonial.quote}”
                    </p>
                  </blockquote>
                </div>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => setActiveTestimonialIndex((activeTestimonialIndex + 1) % testimonials.length)}
                  className="absolute right-0 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy transition-colors hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:flex"
                >
                  <Icon name="ArrowRight" className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-4 flex justify-center gap-3 md:hidden">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => setActiveTestimonialIndex((activeTestimonialIndex + testimonials.length - 1) % testimonials.length)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy transition-colors hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Icon name="ArrowLeft" className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => setActiveTestimonialIndex((activeTestimonialIndex + 1) % testimonials.length)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy transition-colors hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Icon name="ArrowRight" className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <div className="flex items-center gap-4 text-left">
                  <img
                    src={activeTestimonial.image}
                    alt=""
                    aria-hidden="true"
                    className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-white/70"
                    loading="lazy"
                    decoding="async"
                  />
                  <span>
                    <span className="block text-[13px] font-bold text-orange-400">{activeTestimonial.name}</span>
                    <span className="mt-0.5 block text-[10px] text-slate-300">{activeTestimonial.role}</span>
                    <span className="block text-[10px] text-slate-400">{activeTestimonial.company}</span>
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="relative z-10 -mt-12 pb-16">
          <Container>
            <div ref={impactStatsRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[productsStat, experienceStat, satisfactionStat, countriesStat].map((stat, index) => (
                <article
                  key={stat.label}
                  className={`flex min-h-[132px] flex-col items-center justify-center border px-4 py-6 text-center shadow-[0_12px_35px_-24px_rgba(16,27,53,0.35)] ${index === 2 ? 'border-brand bg-brand text-white' : 'border-line bg-white text-navy'}`}
                >
                  <p className="font-sans text-4xl font-semibold tracking-tight tabular-nums">
                    <AnimatedStatValue value={stat.value} active={impactStatsInView} />
                  </p>
                  <p className={`mt-2 text-[12px] leading-5 ${index === 2 ? 'text-white/85' : 'text-muted'}`}>{stat.label}</p>
                </article>
              ))}
            </div>
          </Container>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-[#f5f5f3] to-blue-50 py-12 sm:py-16">
        <div className="pointer-events-none absolute -right-36 top-8 h-96 w-96 rounded-full bg-brand/5 blur-3xl" />
        <Container className="relative">
          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            <Reveal>
              <article>
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-slate-200 shadow-[0_24px_55px_-35px_rgba(16,27,53,0.5)]">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85"
                    alt="Close-up of a circuit board representing emerging technology"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-navy shadow-sm">
                    Looking ahead
                  </span>
                </div>
                <div className="mt-4">
                  <p className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-bold uppercase tracking-[0.12em] text-brand">
                    <span className="text-[13px] leading-none" aria-hidden="true">✦</span>
                    <span>Technology Beyond</span>
                    <span className="text-slate-400">·</span>
                    <span>Future-ready thinking</span>
                    <span className="text-[13px] leading-none" aria-hidden="true">✦</span>
                  </p>
                  <h2 className="max-w-2xl font-sans text-2xl font-bold leading-tight tracking-tight text-navy sm:text-3xl">
                    Beyond Technology. Into Possibilities.
                  </h2>
                  <p className="mt-3 max-w-2xl text-[14px] leading-7 text-slate-600">
                    We look beyond today&apos;s technology to explore what tomorrow can achieve. By embracing emerging technologies, intelligent systems, and new ways of thinking, we create solutions that help businesses stay ready for the future.
                  </p>
                </div>
              </article>
            </Reveal>
            <div className="flex h-full flex-col divide-y divide-slate-300/90">
              {[
                {
                  label: 'Emerging technologies',
                  title: 'Find the opportunity in what comes next',
                  description: 'Explore new capabilities and apply them where they can create meaningful business value.',
                },
                {
                  label: 'Intelligent systems',
                  title: 'Turn intelligence into confident action',
                  description: 'Bring data, automation, and AI together to help teams work and decide with confidence.',
                },
                {
                  label: 'New ways of thinking',
                  title: 'Rethink the challenge. Redesign the possible.',
                  description: "Challenge assumptions and find fresh approaches to tomorrow's business needs.",
                },
              ].map((possibility, index) => (
                <Reveal key={possibility.label} delay={index * 0.06} className="flex flex-1 flex-col justify-center py-5 first:pt-0 last:pb-0 sm:py-6">
                  <article className="grid grid-cols-[2.25rem_1fr] gap-3 sm:gap-4">
                    <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-[11px] font-bold tracking-wide text-blue-700 shadow-sm ring-1 ring-blue-200">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-blue-700">{possibility.label}</p>
                      <h3 className="mt-2 font-sans text-lg font-semibold leading-snug text-navy">{possibility.title}</h3>
                      <p className="mt-3 text-[13px] leading-6 text-slate-600">{possibility.description}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-surface to-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Explore more"
            eyebrowStars
            title="Discover what we can build together"
            description="Explore our capabilities, the work we have delivered, and the ideas that shape our approach."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: 'Layers3',
                title: 'What we do',
                description: 'From AI and data to software and cloud, see how our teams turn business needs into practical technology.',
                to: '/what-we-do',
                label: 'Capabilities',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85',
                imageAlt: 'Laptop displaying a software development workspace',
              },
              {
                icon: 'Briefcase',
                title: 'Case studies',
                description: 'Read how focused collaboration helps organizations solve complex challenges and move forward.',
                to: '/case-studies',
                label: 'Client outcomes',
                image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85',
                imageAlt: 'Team collaborating on a client project',
              },
              {
                icon: 'BookOpen',
                title: 'Insights',
                description: 'Get clear, practical perspectives from the specialists working across modern technology.',
                to: '/insights',
                label: 'Ideas & guidance',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85',
                imageAlt: 'Business analytics and charts on a laptop screen',
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <Link
                  to={item.to}
                  className="group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_15px_40px_-32px_rgba(16,27,53,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_24px_50px_-32px_rgba(37,99,235,0.4)]"
                >
                  <div className="relative h-48 shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-navy/10" />
                    <span className="absolute left-5 top-4 font-sans text-sm font-bold tracking-wider text-white/90">0{index + 1}</span>
                    <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-brand shadow-sm">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand">{item.label}</span>
                    <h3 className="mt-2 font-sans text-xl font-bold text-navy transition-colors group-hover:text-brand">{item.title}</h3>
                    <p className="mt-2 flex-1 text-[13px] leading-6 text-muted">{item.description}</p>
                    <span className="mt-5 flex items-center justify-between border-t border-line pt-4 text-[12.5px] font-bold text-navy">
                      Explore
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-brand transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                        <Icon name="ArrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="WORK WITH TECHNOVA"
        eyebrowStars
        title="Let's build something worth talking about."
        description="Tell us where you want to go. We will help you get there with clarity, craft, and technology that lasts."
      />
    </>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Button from '../components/Button'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import TechVisual from '../components/TechVisual'
import ServiceCard from '../components/ServiceCard'
import SolutionCard from '../components/SolutionCard'
import InsightCard from '../components/InsightCard'
import TestimonialCard from '../components/TestimonialCard'
import CTASection from '../components/CTASection'
import useDocumentMeta from '../hooks/useDocumentMeta'
import { caseStudies } from '../data/caseStudies'
import { services } from '../data/services'
import { solutions, industries } from '../data/solutions'
import { insights } from '../data/insights'
import { companyStats, processSteps, testimonials, technologyGroups, whyChooseUs } from '../data/site'

const ease = [0.22, 1, 0.36, 1]

const capabilities = [
  { name: 'Python', icon: 'Braces' },
  { name: 'TensorFlow', icon: 'BrainCircuit' },
  { name: 'React', icon: 'Code2' },
  { name: 'Node.js', icon: 'Server' },
  { name: 'Microsoft Azure', icon: 'Cloud' },
  { name: 'AWS', icon: 'Globe2' },
  { name: 'Snowflake', icon: 'Database' },
  { name: 'Kubernetes', icon: 'Boxes' },
]

export default function Home() {
  useDocumentMeta('', 'Technova helps businesses innovate and scale through AI solutions, web and software development, cloud engineering, and digital transformation.')

  const featuredServices = [services[0], services[1], services[3], services[5], services[6], services[10]]

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
        <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 -top-24 h-[380px] w-[380px] rounded-full bg-cyan-100/60 blur-3xl" />

        <Container className="relative pb-14 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-blue-50/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                <Icon name="Sparkles" className="h-3.5 w-3.5" />
                Technology partner for ambitious businesses
              </span>

              <h1 className="mt-7 text-[42px] font-bold leading-[1.1] text-navy sm:text-5xl lg:text-[58px] xl:text-[64px]">
                Transforming Ideas Into{' '}
                <span className="text-gradient">Intelligent Digital Solutions.</span>
              </h1>

              <p className="mt-7 max-w-xl text-[16px] leading-8 text-muted sm:text-[17px]">
                We help businesses innovate, scale, and succeed through AI-powered solutions, modern software engineering, and cutting-edge digital technologies.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button to="/what-we-do" variant="primary" size="lg" icon="ArrowRight">
                  Explore Our Services
                </Button>
                <Button to="/contact-us" variant="secondary" size="lg" icon="MessageSquare" iconRight={false}>
                  Let&apos;s Talk
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                {['No generic templates', 'Senior delivery teams', 'Measurable outcomes'].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-[12.5px] font-medium text-ink/80">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <Icon name="Check" className="h-3 w-3" strokeWidth={2.8} />
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease }}
            >
              <TechVisual />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-[0_20px_50px_-40px_rgba(16,27,53,0.5)] sm:mt-20 lg:grid-cols-4"
          >
            {companyStats.map((stat) => (
              <div key={stat.label} className="bg-white px-5 py-6 text-center sm:px-6 sm:py-7">
                <p className="font-sans text-2xl font-extrabold text-navy sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[11.5px] font-medium text-muted sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface/70 py-10">
        <Container>
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-muted">
            Trusted technology capabilities
          </p>
          <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
            {capabilities.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.04}>
                <div className="flex flex-col items-center gap-2 text-center transition-transform duration-300 hover:-translate-y-1">
                  <Icon name={item.icon} className="h-6 w-6 text-navy/60" />
                  <span className="text-[12px] font-bold text-navy/70">{item.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="What we do"
              title="Capabilities built around your goals"
              description="From first idea to production at scale, our teams bring the right mix of strategy, engineering, and intelligence to every engagement."
            />
            <Button to="/what-we-do" variant="secondary" size="md" icon="ArrowRight">
              View all services
            </Button>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Why choose us"
                title="A partner invested in your outcome, not just your output."
                description="We keep teams senior, communication direct, and decisions tied to value. That is how we build technology that lasts."
              />
              <div className="mt-10 space-y-5">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand/15 bg-white text-brand">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-[15px] font-bold text-navy">{item.title}</h3>
                      <p className="mt-1 text-[13px] leading-6 text-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-blue-500/15 to-cyan-400/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl bg-navy p-8 text-white sm:p-10">
                  <div className="pointer-events-none absolute inset-0 dark-grid" />
                  <div className="relative">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">Our commitment</span>
                    <p className="mt-6 font-sans text-3xl font-bold leading-snug sm:text-4xl">
                      Clear thinking. Careful engineering. Results you can point to.
                    </p>
                    <div className="mt-10 space-y-4">
                      {[
                        { icon: 'Clock', text: 'Two-week delivery cycles with visible progress' },
                        { icon: 'Users', text: 'Direct access to the people building your solution' },
                        { icon: 'ShieldCheck', text: 'Security and quality built in from the first sprint' },
                      ].map((item) => (
                        <div key={item.text} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                          <Icon name={item.icon} className="h-4 w-4 shrink-0 text-cyan-300" />
                          <span className="text-[13px] text-slate-200">{item.text}</span>
                        </div>
                      ))}
                    </div>
                    <Link to="/about-us" className="mt-9 inline-flex items-center gap-2 text-[13px] font-bold text-cyan-300 hover:text-white">
                      Learn more about us
                      <Icon name="ArrowRight" className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 dark-grid" />
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
        <Container className="relative">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Featured solutions"
              title="Business problems, solved end to end"
              description="We bring together the services needed to move the needle on the challenges that matter most."
              light
            />
            <Button to="/solutions" variant="outlineLight" size="md" icon="ArrowRight">
              See all solutions
            </Button>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.slice(0, 4).map((solution, index) => (
              <SolutionCard key={solution.title} solution={solution} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="A clear path from idea to impact"
            description="No black boxes. You see progress, understand decisions, and stay in control at every stage."
            align="center"
          />

          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-[26px] hidden h-px bg-line lg:block" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {processSteps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.07}>
                  <div className="relative text-center lg:px-2">
                    <span className="relative z-10 mx-auto flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-brand/20 bg-white font-sans text-sm font-extrabold text-brand shadow-sm">
                      {step.number}
                    </span>
                    <h3 className="mt-5 text-[17px] font-bold text-navy">{step.title}</h3>
                    <p className="mx-auto mt-2 max-w-[220px] text-[12.5px] leading-6 text-muted">{step.description}</p>
                    <p className="mt-3 text-[10.5px] font-semibold uppercase tracking-wider text-brand/70">{step.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-line bg-surface p-6 text-center sm:p-8">
            <p className="font-sans text-[15px] font-semibold text-navy sm:text-base">
              “The best technology decisions are made with clarity, not urgency.”
            </p>
            <p className="mt-2 text-[12px] text-muted">Jonathan Miller, Founder &amp; Managing Director</p>
          </div>
        </Container>
      </section>

      <section className="bg-[#eef0f6] py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Case studies"
              title="Progress built around real business needs."
              description="A closer look at how our teams help organizations move forward with engineering, AI, cloud, and data."
            />
          </div>
          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:min-h-[520px] lg:grid-cols-[0.9fr_1.2fr_0.9fr] lg:grid-rows-2">
            {caseStudies.slice(0, 4).map((caseStudy, index) => {
              const layout = [
                'lg:col-start-1 lg:row-start-1 lg:row-span-2',
                'lg:col-start-2 lg:row-start-1',
                'lg:col-start-2 lg:row-start-2',
                'lg:col-start-3 lg:row-start-1 lg:row-span-2',
              ][index]

              return (
                <Reveal key={caseStudy.slug} delay={index * 0.06} className={`h-full ${layout}`}>
                  <article className="group h-full">
                    <Link
                      to={`/case-studies/${caseStudy.slug}`}
                      className="relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-2xl bg-navy p-5 text-white shadow-[0_18px_40px_-24px_rgba(16,27,53,0.65)] sm:p-6"
                    >
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.imageAlt}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/95 via-[#07111f]/45 to-[#07111f]/15 transition-colors group-hover:from-[#07111f]/90" />
                      <div className="relative z-10 flex h-full flex-col">
                        <span className="self-start rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                          {caseStudy.category}
                        </span>
                        <div className="mt-auto pt-8">
                          <h3 className="font-sans text-lg font-bold leading-snug text-white sm:text-xl">
                            {caseStudy.cardTitle || caseStudy.title}
                          </h3>
                          <span className="mt-3 inline-flex items-center gap-2 text-[13px] font-bold text-white transition-colors group-hover:text-cyan-300">
                            Read case study
                            <Icon name="ArrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
              </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Client voices"
            title="Trusted by teams that expect more"
            description="Long-term partnerships built on delivery, honesty, and measurable progress."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-center">
            {industries.slice(0, 5).map((industry) => (
              <span key={industry.title} className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-muted">
                <Icon name={industry.icon} className="h-4 w-4 text-brand/70" />
                {industry.title}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Insights"
              title="Thinking from the field"
              description="Practical perspectives on AI, engineering, cloud, and the decisions shaping modern business."
            />
            <Button to="/insights" variant="secondary" size="md" icon="ArrowRight">
              All insights
            </Button>
          </div>
          <div className="mt-12">
            <InsightCard article={insights[0]} featured />
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {insights.slice(1, 4).map((article, index) => (
              <InsightCard key={article.slug} article={article} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}

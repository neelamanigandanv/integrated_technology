import { Link } from 'react-router-dom'
import HeroSection from '../../components/HeroSection'
import SectionHeading from '../../components/SectionHeading'
import Container from '../../components/Container'
import Reveal from '../../components/Reveal'
import Icon from '../../components/Icon'
import FAQAccordion from '../../components/FAQAccordion'
import CTASection from '../../components/CTASection'
import useDocumentMeta from '../../hooks/useDocumentMeta'
import { caseStudies } from '../../data/caseStudies'
import { insights } from '../../data/insights'
import { testimonials } from '../../data/site'

const challenges = [
  {
    icon: 'Layers3',
    title: 'Overcome legacy limitations',
    description: 'Modernize aging applications and platforms without losing the knowledge and workflows your business depends on.',
  },
  {
    icon: 'Network',
    title: 'Manage growing complexity',
    description: 'Connect systems, data, and teams with clear architecture and engineering practices built to stay maintainable.',
  },
  {
    icon: 'Rocket',
    title: 'Accelerate product development',
    description: 'Move from idea to release through focused delivery, fast feedback, and experienced multidisciplinary teams.',
  },
  {
    icon: 'Gauge',
    title: 'Improve reliability and performance',
    description: 'Build quality, observability, and performance into the systems your customers and teams rely on.',
  },
  {
    icon: 'Cloud',
    title: 'Create room to scale',
    description: 'Prepare your infrastructure and applications to handle new users, markets, and business demands.',
  },
]

const capabilityGroups = [
  {
    number: '01',
    icon: 'Code2',
    title: 'Product & Software Engineering',
    description: 'Design, build, and validate digital products and business applications around real user and business needs.',
    services: ['Software Engineering', 'Product Engineering', 'Quality Engineering'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Developer working on a software product',
  },
  {
    number: '02',
    icon: 'Cloud',
    title: 'Cloud & Platform Engineering',
    description: 'Connect and modernize the platforms, infrastructure, and delivery practices your business relies on.',
    services: ['Cloud Engineering', 'DevOps Engineering', 'System Integration'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Digital network visualization representing cloud infrastructure',
  },
  {
    number: '03',
    icon: 'BrainCircuit',
    title: 'Data, AI & Intelligent Systems',
    description: 'Turn trusted data into useful insight and responsible intelligent capabilities that support better decisions.',
    services: ['Data Engineering', 'AI & Machine Learning'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Humanoid robot representing artificial intelligence',
  },
]

const advantages = [
  {
    icon: 'Target',
    title: 'Business-first decisions',
    description: 'We connect technical choices to your goals, users, and measures of success.',
  },
  {
    icon: 'Users',
    title: 'Experienced engineers',
    description: 'Work directly with specialists who bring architecture and delivery experience to your team.',
  },
  {
    icon: 'Blocks',
    title: 'Flexible engagement',
    description: 'Shape the team and delivery model around your roadmap, skills, and preferred ways of working.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Quality in every stage',
    description: 'Build in testing, security, and thoughtful reviews instead of treating them as final checkpoints.',
  },
  {
    icon: 'TrendingUp',
    title: 'Designed to evolve',
    description: 'Create clear, scalable foundations that can adapt as your products and business change.',
  },
]

const engineeringProcess = [
  {
    number: '01',
    icon: 'Search',
    title: 'Discover',
    description: 'Understand your business needs, users, constraints, and the outcomes that matter.',
  },
  {
    number: '02',
    icon: 'Target',
    title: 'Strategize',
    description: 'Set priorities and define the technical direction, success measures, and delivery roadmap.',
  },
  {
    number: '03',
    icon: 'Layers3',
    title: 'Architect',
    description: 'Design a secure, reliable foundation that fits your current environment and future plans.',
  },
  {
    number: '04',
    icon: 'Code2',
    title: 'Engineer',
    description: 'Build in focused increments, with regular collaboration and working software to review.',
  },
  {
    number: '05',
    icon: 'TestTube2',
    title: 'Validate',
    description: 'Test functionality, security, performance, and quality against agreed acceptance criteria.',
  },
  {
    number: '06',
    icon: 'RefreshCw',
    title: 'Deliver & optimize',
    description: 'Deploy with care, monitor real-world use, and keep improving as needs evolve.',
  },
]

const engineeringFaqs = [
  {
    question: 'What are Tech & Engineering services?',
    answer: 'They bring together the people, practices, and technology needed to design, build, integrate, and improve digital products and business systems.',
  },
  {
    question: 'What types of engineering solutions do you provide?',
    answer: 'Our capabilities include software, cloud, data, DevOps, AI and machine learning, quality, product engineering, and system integration.',
  },
  {
    question: 'Which technologies and frameworks do you specialize in?',
    answer: 'We work across modern web and software frameworks, cloud platforms, data tools, and automation technologies. We recommend tools based on your requirements and existing environment.',
  },
  {
    question: 'Can you work with our existing development team?',
    answer: 'Yes. Our engineers can work alongside your team, share practices, and contribute to your existing delivery process and codebase.',
  },
  {
    question: 'Do you offer dedicated engineering resources?',
    answer: 'We can provide dedicated specialists or a cross-functional delivery team, depending on the outcomes, skills, and collaboration model you need.',
  },
  {
    question: 'How do you ensure the quality and security of solutions?',
    answer: 'We include testing, code review, secure development practices, and appropriate validation throughout delivery—not just before launch.',
  },
  {
    question: 'Can you help modernize existing applications?',
    answer: 'Yes. We assess your current systems and create a practical, phased modernization plan that protects essential operations while improving the platform.',
  },
  {
    question: 'What engagement models do you offer?',
    answer: 'Engagements can be scoped around a defined project, a dedicated team, or ongoing engineering support. We agree on responsibilities and milestones together.',
  },
]

function getStorySection(study, heading) {
  return study.sections.find((section) => section.heading.toLowerCase().includes(heading))
}

function TechEngineeringVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[500px]">
      <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-gradient-to-br from-blue-500/25 to-cyan-400/25 blur-3xl" />
      <div className="relative min-h-[380px] overflow-hidden rounded-3xl border border-white/60 bg-navy shadow-[0_35px_80px_-40px_rgba(16,27,53,0.65)] sm:min-h-[450px]">
        <img
          src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=85"
          alt="Engineer working on a technical product"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/90 via-[#081321]/20 to-[#081321]/10" />
        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-navy/55 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:left-7 sm:top-7">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
          Engineering in motion
        </div>
        <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-navy/65 p-5 backdrop-blur-xl sm:inset-x-7 sm:bottom-7 sm:p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">From idea to impact</p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { icon: 'Lightbulb', label: 'Design' },
              { icon: 'Code2', label: 'Engineer' },
              { icon: 'Rocket', label: 'Scale' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 rounded-xl bg-white/10 px-2 py-3 text-center text-white">
                <Icon name={item.icon} className="h-5 w-5 text-cyan-300" />
                <span className="text-[10px] font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TechEngineering() {
  useDocumentMeta(
    'Tech & Engineering Services',
    'Engineering-led software, cloud, data, AI, DevOps, and product services to help organizations build reliable systems and grow with confidence.',
  )

  const featuredStories = caseStudies.slice(0, 3)
  const featuredTestimonials = testimonials.slice(0, 3)
  const featuredInsights = insights.slice(0, 3)

  return (
    <>
      <HeroSection
        eyebrow="TECH & ENGINEERING SERVICES"
        title={<>Engineering the Technology Behind Your Next Big Move</>}
        description="From complex engineering challenges to business-critical technology solutions, we help organizations design, build, and scale digital products with the right expertise, modern technologies, and an engineering-first approach."
        primary={{ label: "Let's Discuss Your Project", to: '/contact-us?interest=Tech%20%26%20Engineering' }}
        secondary={{ label: 'Explore Our Capabilities', href: '#engineering-capabilities', icon: 'ChevronDown' }}
        highlights={['Business-first engineering', 'Quality-driven delivery', 'Built to scale']}
        visual={<TechEngineeringVisual />}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <SectionHeading
              eyebrow="ENGINEERING THAT MOVES BUSINESS FORWARD"
              title="Turning Complex Technology Challenges Into Practical Solutions"
              description="Technology should do more than support your business; it should move it forward. Our Tech & Engineering services combine technical expertise, innovative thinking, and proven engineering practices to help organizations build reliable systems, modernize applications, and accelerate digital growth."
            />
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-line bg-surface p-6 sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">Technology, connected to outcomes</p>
                <div className="mt-6 space-y-4">
                  {[
                    ['Compass', 'Start with the business objective'],
                    ['Layers3', 'Choose an architecture that fits'],
                    ['RefreshCw', 'Build for continuous improvement'],
                  ].map(([icon, text]) => (
                    <div key={text} className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand">
                        <Icon name={icon} className="h-5 w-5" />
                      </span>
                      <span className="text-[13px] font-semibold text-navy">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="THE NEED FOR BETTER ENGINEERING"
            title="Is Your Technology Ready for What Comes Next?"
            description="As business demands evolve, outdated systems, growing technical complexity, and limited engineering resources can slow progress. We help you overcome these challenges with the right technical capabilities to keep your business competitive, efficient, and ready to scale."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {challenges.map((challenge, index) => (
              <Reveal key={challenge.title} delay={index * 0.05}>
                <article className="h-full rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Icon name={challenge.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-[15px] font-bold leading-snug text-navy">{challenge.title}</h3>
                  <p className="mt-2.5 text-[12px] leading-6 text-muted">{challenge.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="engineering-capabilities" className="scroll-mt-24 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="WHAT WE BRING TO THE TABLE"
            title="Engineering Capabilities Designed Around Your Business Goals"
            description="Every business has different technology needs. Our comprehensive engineering capabilities help you address specific challenges, strengthen your digital foundation, and create solutions that deliver lasting business value."
          />
          <div className="mt-12 space-y-6">
            {capabilityGroups.map((group, index) => (
              <Reveal key={group.number} delay={index * 0.06}>
                <article className="group grid overflow-hidden rounded-3xl border border-line bg-white shadow-[0_16px_40px_-32px_rgba(16,27,53,0.4)] transition-all duration-300 hover:border-brand/30 hover:shadow-[0_24px_50px_-32px_rgba(37,99,235,0.4)] lg:grid-cols-2">
                  <div className={`relative min-h-[250px] overflow-hidden bg-navy sm:min-h-[300px] lg:min-h-[360px] ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={group.image}
                      alt={group.imageAlt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/70 via-transparent to-[#081321]/10" />
                    <span className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/25 bg-navy/45 text-white backdrop-blur-md sm:left-8 sm:top-8">
                      <Icon name={group.icon} className="h-5 w-5 text-cyan-300" />
                    </span>
                    <span className="absolute bottom-6 left-6 font-sans text-5xl font-extrabold tracking-tight text-white/85 sm:bottom-8 sm:left-8">
                      {group.number}
                    </span>
                  </div>
                  <div className={`flex flex-col justify-center p-7 sm:p-9 lg:p-12 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand">Engineering capability</p>
                    <h3 className="mt-3 font-sans text-2xl font-bold leading-snug text-navy sm:text-3xl">{group.title}</h3>
                    <p className="mt-4 text-[14px] leading-7 text-muted">{group.description}</p>
                    <div className="mt-7 border-t border-line pt-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">What this includes</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {group.services.map((service) => (
                          <li key={service} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-2 text-[11px] font-semibold text-ink">
                            <Icon name="Check" className="h-3.5 w-3.5 text-brand" strokeWidth={2.6} />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="THE DIFFERENCE IS IN OUR APPROACH"
            title="More Than Technical Expertise. A Partner in Your Engineering Journey."
            description="Successful engineering requires more than writing code. It takes strategic thinking, collaborative execution, and a deep understanding of business priorities. We bring these together to deliver solutions that work today and evolve with your needs."
            light
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {advantages.map((advantage, index) => (
              <Reveal key={advantage.title} delay={index * 0.05}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.06] p-6 transition-colors hover:bg-white/10">
                  <Icon name={advantage.icon} className="h-6 w-6 text-cyan-300" />
                  <h3 className="mt-5 text-[15px] font-bold text-white">{advantage.title}</h3>
                  <p className="mt-2.5 text-[12.5px] leading-6 text-slate-300">{advantage.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="FROM VISION TO EXECUTION"
            title="A Structured Approach to Building Better Technology"
            description="We follow a collaborative and outcome-driven engineering process that brings clarity to every stage of development, from understanding your requirements to delivering, optimizing, and supporting your solutions."
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringProcess.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.05}>
                <article className="relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 sm:p-7">
                  <span className="absolute right-5 top-3 font-sans text-5xl font-extrabold text-brand/[0.07]">{step.number}</span>
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand">
                    <Icon name={step.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="relative mt-5 text-[17px] font-bold text-navy">{step.title}</h3>
                  <p className="relative mt-2.5 text-[13px] leading-6 text-muted">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="ENGINEERING IMPACT IN ACTION"
            title="Real Challenges. Thoughtful Solutions. Measurable Results."
            description="Explore how we work alongside organizations to solve complex technology challenges, deliver engineering solutions, and create meaningful business outcomes through practical innovation and technical expertise."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredStories.map((study, index) => {
              const challenge = getStorySection(study, 'challenge')
              const approach = getStorySection(study, 'approach')
              const outcome = getStorySection(study, 'outcome')

              return (
                <Reveal key={study.slug} delay={index * 0.06}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_16px_40px_-32px_rgba(16,27,53,0.45)]">
                    <div className="relative h-52 overflow-hidden bg-navy">
                      <img
                        src={study.image}
                        alt={study.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-navy">
                        {study.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-[11px] font-semibold text-muted">{study.client} · {study.dateLabel}</p>
                      <h3 className="mt-3 text-[18px] font-bold leading-snug text-navy">{study.cardTitle || study.title}</h3>
                      <p className="mt-4 text-[12px] font-bold uppercase tracking-[0.12em] text-brand">The challenge</p>
                      <p className="mt-1.5 text-[12.5px] leading-6 text-muted">
                        {challenge ? challenge.paragraphs[0] : study.excerpt}
                      </p>
                      <p className="mt-4 text-[12px] font-bold uppercase tracking-[0.12em] text-brand">Engineering approach</p>
                      <p className="mt-1.5 text-[12.5px] leading-6 text-muted">
                        {approach ? approach.paragraphs[0] : study.excerpt}
                      </p>
                      {outcome && (
                        <p className="mt-4 border-t border-line pt-4 text-[12px] leading-6 text-ink">
                          <span className="font-bold text-navy">Outcome: </span>
                          {outcome.paragraphs[0]}
                        </p>
                      )}
                      <Link
                        to={`/case-studies/${study.slug}`}
                        className="mt-5 inline-flex items-center gap-2 text-[12.5px] font-bold text-brand"
                      >
                        Explore case study
                        <Icon name="ArrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
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
            eyebrow="WORDS FROM OUR PARTNERS"
            title="Built on Expertise. Strengthened by Trust."
            description="The strongest measure of our work is the confidence our clients place in us. Hear directly from the organizations and teams who have experienced our engineering expertise, collaborative approach, and commitment to delivering results."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featuredTestimonials.map((testimonial, index) => (
              <Reveal key={`${testimonial.name}-${testimonial.company}`} delay={index * 0.06}>
                <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-[0_14px_40px_-32px_rgba(16,27,53,0.5)] sm:p-7">
                  <Icon name="Quote" className="h-8 w-8 text-brand/25" />
                  <blockquote className="mt-4 flex-1 text-[14px] leading-7 text-ink/85">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                    <img
                      src={testimonial.image}
                      alt=""
                      loading="lazy"
                      className="h-11 w-11 rounded-full object-cover"
                    />
                    <span>
                      <span className="block text-[13px] font-bold text-navy">{testimonial.name}</span>
                      <span className="mt-0.5 block text-[11px] leading-5 text-muted">
                        {testimonial.role}, {testimonial.company}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="KNOWLEDGE THAT DRIVES INNOVATION"
              title="Explore Ideas Shaping the Future of Engineering"
              description="Stay informed with expert perspectives, practical technology insights, and the latest engineering trends. Discover ideas that help your business make smarter technology decisions and stay ahead in an evolving digital landscape."
            />
            <Link to="/insights" className="mb-1 inline-flex items-center gap-2 text-[13px] font-bold text-brand hover:text-branddark">
              Explore All Insights
              <Icon name="ArrowRight" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featuredInsights.map((article, index) => (
              <Reveal key={article.slug} delay={index * 0.06}>
                <Link
                  to={`/insights/${article.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
                >
                  <div className="h-48 overflow-hidden bg-navy">
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand">{article.category}</span>
                    <h3 className="mt-2.5 text-[16px] font-bold leading-snug text-navy">{article.title}</h3>
                    <p className="mt-2.5 flex-1 text-[12.5px] leading-6 text-muted">{article.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold text-brand">
                      Read insight
                      <Icon name="ArrowRight" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading
              eyebrow="NEED MORE CLARITY?"
              title="Everything You Need to Know About Our Tech & Engineering Services"
              description="Have questions about our engineering capabilities, technologies, engagement models, or delivery approach? Find answers to common questions to help you make informed decisions about your next technology initiative."
            />
            <Reveal delay={0.1}>
              <FAQAccordion faqs={engineeringFaqs} />
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="LET'S BUILD WHAT'S NEXT"
        title="Have a Technology Challenge? Let's Engineer the Solution Together."
        description="Whether you're building a new digital product, modernizing existing systems, or scaling your engineering capabilities, our experts are ready to help turn your vision into reality."
        primary={{ label: 'Start a Conversation', to: '/contact-us?interest=Tech%20%26%20Engineering' }}
        secondary={{ label: 'Talk to Our Experts', to: '/contact-us' }}
      />
    </>
  )
}

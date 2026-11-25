import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import useDocumentMeta from '../hooks/useDocumentMeta'
import { caseStudies } from '../data/caseStudies'

export default function CaseStudies() {
  useDocumentMeta(
    'Case Studies',
    'Explore how Technova teams approach engineering, AI, cloud, and data challenges with practical technology solutions.',
  )

  const [featured, ...moreStudies] = caseStudies

  return (
    <>
      <section aria-labelledby="case-studies-title" className="relative h-[360px] overflow-hidden sm:h-[420px] lg:h-[470px]">
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2000&q=90"
          alt="Technology team collaborating around a table"
          className="absolute inset-0 h-full w-full object-cover object-[center_45%]"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081321]/80 via-[#081321]/45 to-transparent" />
        <Container className="relative flex h-full items-end pb-12 sm:pb-16 lg:px-8">
          <div className="max-w-xl text-white">
            <h1 id="case-studies-title" className="max-w-md font-sans text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[52px]">
              Case Studies
            </h1>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg">
              Real-world technology challenges. Practical solutions. Measurable impact.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#eef1ff] via-[#f7f8fc] to-[#f0ecff] py-10 sm:py-14">
      <div className="pointer-events-none absolute -right-36 top-24 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-40 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <Container className="relative">
        <Reveal>
          <Link
            to={`/case-studies/${featured.slug}`}
            className="group grid overflow-hidden rounded-2xl border border-white/70 bg-white shadow-[0_30px_70px_-48px_rgba(16,27,53,0.5)] lg:min-h-[470px] lg:grid-cols-[1.3fr_0.9fr]"
          >
            <div className="relative flex flex-col items-start overflow-hidden bg-gradient-to-br from-[#101b35] via-[#162c52] to-[#1d4770] p-7 sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-40 left-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="relative z-10 flex h-full w-full flex-col items-start">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  Latest case study · {featured.category}
                </span>
                <h1 className="mt-6 max-w-3xl font-sans text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[48px]">
                  {featured.title}
                </h1>
                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-200 sm:text-base">
                  {featured.excerpt}
                </p>
                <span className="mt-8 inline-flex items-center gap-3 rounded-sm bg-white px-5 py-3.5 text-[13px] font-bold text-navy transition-colors group-hover:bg-brand group-hover:text-white">
                  Read case study
                  <Icon name="ArrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="mt-auto hidden items-center gap-3 pt-10 text-[12px] font-semibold text-slate-300 sm:flex">
                  <Icon name="Building2" className="h-4 w-4 text-cyan-300" />
                  <span>{featured.client}</span>
                  <span className="h-1 w-1 rounded-full bg-white/50" />
                  <span>{featured.dateLabel}</span>
                </div>
              </div>
            </div>
            <div className="relative min-h-[260px] overflow-hidden sm:min-h-[340px] lg:min-h-full">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {moreStudies.map((caseStudy, index) => (
            <Reveal key={caseStudy.slug} delay={index % 3 * 0.06}>
              <article className="group h-full">
                <Link
                  to={`/case-studies/${caseStudy.slug}`}
                  className="flex h-full flex-col overflow-hidden rounded-md border border-[#dfe2ed] bg-white/90 shadow-[0_12px_30px_-24px_rgba(16,27,53,0.35)] transition-[border-color,box-shadow] duration-300 hover:border-violet-500 hover:bg-white hover:shadow-[0_12px_28px_-18px_rgba(124,58,237,0.45)] focus-visible:border-violet-500"
                >
                  <div className="relative h-52 overflow-hidden bg-surface">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-navy">
                      {caseStudy.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[11px] font-semibold text-muted">{caseStudy.client} · {caseStudy.dateLabel}</span>
                    <h2 className="mt-3 text-[18px] font-bold leading-snug text-navy transition-colors group-hover:text-brand">
                      {caseStudy.title}
                    </h2>
                    <p className="mt-3 flex-1 text-[13px] leading-6 text-muted">{caseStudy.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[12.5px] font-bold text-brand">
                      Read case study
                      <Icon name="ArrowRight" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-10 border-t border-navy/10 pt-14 sm:mt-20 sm:pt-20 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Your next chapter</span>
            <h2 className="mt-4 max-w-xl font-sans text-3xl font-semibold leading-[1.14] tracking-tight text-navy sm:text-4xl lg:text-[44px]">
              Let&apos;s turn your next challenge into progress.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted">
              Every successful project starts with understanding the people, goals, and constraints behind it. Bring us the challenge you are working through, and we will help you find a practical first step.
            </p>
            <Link
              to="/contact-us"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-branddark"
            >
              Talk through your project
              <Icon name="ArrowRight" className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {[
              {
                title: 'Start with the real challenge',
                description: 'We learn your goals, constraints, and user needs before recommending a solution.',
                icon: 'Compass',
                to: '/contact-us',
              },
              {
                title: 'Get a clear delivery plan',
                description: 'Agree on priorities, milestones, and outcomes your team can track from day one.',
                icon: 'FileCheck2',
                to: '/what-we-do',
              },
              {
                title: 'Work with a hands-on team',
                description: 'Keep strategy, design, and engineering connected from the first decision through launch.',
                icon: 'Users',
                to: '/about-us',
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="group flex items-center gap-5 rounded-xl border border-white/80 bg-white/65 p-5 shadow-sm transition-all hover:border-brand/30 hover:bg-white sm:p-6"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-sans text-[18px] font-semibold text-navy">{item.title}</span>
                  <span className="mt-1.5 block text-[13px] leading-6 text-muted">{item.description}</span>
                </span>
                <Icon name="ArrowRight" className="h-5 w-5 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
      </section>
    </>
  )
}
